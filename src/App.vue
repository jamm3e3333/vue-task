<template>
<div>
  <main>
    <h1>{{data.fqdn}}</h1>
  </main>
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
</template>

<script>
import json from './assets/domain-detail.json';
import DomainCart from './components/UI/DomainCart';
import DomainEvents from './components/Events/DomainEvents'
import DomainStateFlags from './components/StateFlags/DomainStateFlags';

export default {
  name: 'App',
  components: {
    DomainCart,
    DomainEvents,
    DomainStateFlags,
  },
  data() {
    return {
      data: json,
      verbose: false,
    }
  }
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
</style>

<style scoped>
 
</style>
