<template>
    <div class="button-wrapper">
        <DomainButtonToggle 
            @toggle-button="$emit('toggle-verbose')"
            :show="verbose"
            on="ON"
            off="OFF"
        />

        <label name="verbose-view">Verbose view</label> 
    </div>    
</template>

<script>
import DomainButtonToggle from './UI/DomainButtonToggle';

export default {
    name: 'DomainVerbose',
    props: {
        verbose: Boolean,
    },
    components: {
        DomainButtonToggle,
    },
}
</script>

<style scoped>
.btn-toggle--on {
    background: rgba(76, 130, 240, 1);
}
.btn-toggle--off {
    background: rgba(189, 189, 189, 1);
}
label {
    color: rgba(0,0,0,.5);;
}
.button-wrapper {
    width: 95%;
    margin: 0 auto;
    padding: .7rem;
}
</style>
