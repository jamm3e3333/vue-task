<template>
<div>
  <DomainHead 
    @toggle-menu="toggleMenuHandler"
    @toggle-user="toggleUserHandler"
    headerName="Ferda"
    userName="Jan Musílek"
  />
  <DomainNavBar v-if="toggleMenu" />
  <div :class="['info-wrapper', toggleMenu ? '' : 'toggle-menu']">
    <div class="info-left">
      <main class="header-wrapper">
        <h1 class="header-h1">{{data.fqdn}}</h1>
      </main>

      <DomainVerbose 
        :verbose="verbose" 
        @toggle-verbose="toggleVerbose"  
      />

      <DomainAuthInfo 
        :expires="data.expires_at"
        :show="showSecret"
        @toggle-button="toggleSecret"
      />

      <DomainCart headerText="Events:">
        <DomainEvents :events="data.events" />
      </DomainCart>

      <DomainCart headerText="State flags:">
        <DomainStateFlags 
          :flags="data.state_flags.flags" 
          :verbose="verbose"  
        />
      </DomainCart>
    </div>

    <div class="info-right">
      <DomainCart
        class="info-right--top"
        v-if="verbose"
        headerText="Owner:">
        <DomainContactCart 
          :contact="data.owner"
          :isVerbose="verbose"
          />
      </DomainCart>
      <div
        v-if="verbose"
      >
        <DomainCart 
          v-for="contact in data.administrative_contacts" 
          :key="contact.handle"
          headerText="Administrative contact:">
          <DomainContactCart 
            :contact="contact"  
            :isVerbose="verbose"
          />
        </DomainCart>
      </div>

      <DomainCart 
        v-if="!verbose"
        headerText="Administrative contacts:"
      >
        <DomainHandle 
          v-for="contact in data.administrative_contacts"
          :key="contact.handle"
          :nameKey="contact.name + ':'"
          :handle="contact.handle"
        />
      </DomainCart>
      <DomainNSSet 
        headerText="NSSet:"
        :set="data.nsset"
        dnsName="DNS:"
        :dns="setModified"
      />
      <DomainNSSet 
        headerText="KeySet:"
        :set="data.keyset"
        dnsName="DNS keys:"
        :dns="data.keyset.dns_keys"
      />
    </div>
  </div>
</div>
</template>

<script>
import json from './assets/domain-detail.json';
import DomainCart from './components/UI/DomainCart';
import DomainEvents from './components/Events/DomainEvents'
import DomainStateFlags from './components/StateFlags/DomainStateFlags';
import DomainVerbose from './components/DomainVerbose';
import DomainContactCart from './components/UI/DomainContactCart';
import DomainHandle from './components/UI/DomainHandle';
import DomainNSSet from './components/Set/DomainNSSet';
import DomainAuthInfo from './components/AuthInfo/DomainAuthInfo';
import DomainHead from './components/DomainHead';
import DomainNavBar from './components/DomainNavBar';

export default {
  name: 'App',
  components: {
    DomainCart,
    DomainEvents,
    DomainStateFlags,
    DomainVerbose,
    DomainContactCart,
    DomainHandle,
    DomainNSSet,
    DomainAuthInfo,
    DomainHead,
    DomainNavBar,
  },
  data() {
    return {
      data: json,
      verbose: true,
      setModified: Array,
      showSecret: true,
      toggleMenu: true,
      toggleUser: false,
    }
  },
  methods: {
    toggleVerbose() {
      this.verbose = !this.verbose;
    },
    toggleSecret() {
      this.showSecret = !this.showSecret;
    },
    toggleMenuHandler() {
      if(!this.toggleMenu && this.toggleUser) {
        this.toggleUser = false;
      }
      this.toggleMenu = !this.toggleMenu;
    },
    toggleUserHandler() {
      if(this.toggleMenu && !this.toggleUser) {
        this.toggleMenu = false;
      }
      this.toggleUser = !this.toggleUser;
    }
  },
  created() {
    this.setModified = this.data.nsset.dns.map(dns => {
      return `${dns.name}(${dns.ip_address})`;
    });
  },
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  margin: 0;
}

</style>

<style scoped>
  .header-wrapper {
    width: 95%;
    margin: 0 auto;
    padding: .7rem;
  }

 .info-wrapper {
   display: flex;
   justify-content: center;
   margin-left: 23.5rem;
 }

 .info-left {
   flex-grow: 5;
   padding-top: 8rem;
 }

 .info-right {
   flex-grow: 2;
   padding-top: 20.73rem;
   margin-right: 1rem;
 }

 .toggle-menu {
   margin: 0;
 }

 @media (max-width: 1360px) {
  .info-wrapper {
    position: static;
  }

  .info-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .info-right,
  .info-left {
    margin: 0;
    padding: 0;
    width: 95%;
  }

  .info-left {
    margin-top: 10rem;
  }

  .toggle-menu {
    margin: 0;
  }
 }

 @media (max-width: 750px) {
   .info-wrapper,
   .info-right {
     margin: 0;
   }
 }
</style>
