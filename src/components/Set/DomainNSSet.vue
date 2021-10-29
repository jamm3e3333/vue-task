<template>
    <DomainCart :headerText="headerText">
        <DomainHandle 
            nameKey="Handle:"
            :handle="set.handle"
        />
        <DomainHandle 
            nameKey="Registrar:"
            :handle="set.registrar"
        />
        <DomainDnsCart 
            :dnsName="dnsName"
            :dns="dns"
        />
    </DomainCart>
</template>

<script>
import DomainHandle from '../UI/DomainHandle';
import DomainCart from '../UI/DomainCart';
import DomainDnsCart from './DomainDnsCart';

export default {
    name: 'DomainNSSet',
    props: {
        set: Object,
        headerText: String,
        dnsName: String,
        dns: Array,
    },
    components: {
        DomainHandle,
        DomainCart,
        DomainDnsCart,
    },
}
</script>

<style scoped>

</style>