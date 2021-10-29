<template>
    <div class="contact-wrapper">
        <DomainHandle 
            :handle="contact.handle" 
            nameKey="Handle:" 
            :isVerbose="isVerbose"   
        />
        <DomainContact 
            :mark="contact.publish.organization"
            name="Organization:"
            :value="contact.organization"
        />
        <DomainContact
            :mark="contact.publish.name"
            name="Name:"
            :value="contact.name"
        />
    </div>
</template>

<script>
import DomainCart from './DomainCart';
import DomainHandle from './DomainHandle';
import DomainContact from './DomainContact';

export default {
    name: 'DomainContactCart',
    props: {
        contact: Object,
        headerText: String,
        isVerbose: Boolean,
    },
    components: {
        DomainCart,
        DomainHandle,
        DomainContact,
    },
}
</script>

<style scoped>
    .contact-wrapper {
        width: 95%;
    }
</style>