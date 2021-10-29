<template>
<div class="info-wrapper">
  <div class="info-left">
    <main class="header-wrapper">
      <h1 class="header-h1">{{data.fqdn}}</h1>
    </main>

    <DomainVerbose 
      :verbose="verbose" 
      @toggle-verbose="toggleVerbose"  
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
  },
  data() {
    return {
      data: json,
      verbose: true,
      setModified: Array,
    }
  },
  methods: {
    toggleVerbose() {
      this.verbose = !this.verbose;
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
}
.header-wrapper {
  width: 95%;
  margin: 0 auto;
  padding: .7rem;
}
</style>

<style scoped>
 .info-wrapper {
   position: relative;
 }

 .info-left {
   position: absolute;
   width: 55%;
   left: 0;
 }

 .info-right {
   position: absolute;
   top: 12.7rem;
   width: 45%;
   right: 0;
 }

 @media (max-width: 1100px) {
  .info-wrapper,
  .info-left,
  .info-right {
    position: static;
  }

  .info-wrapper {
    width: 100%;
    margin: 0 auto;
  }
  .info-left,
  .info-right {
    width: 100%;
    margin: 0 auto;
  }
 }
</style>
