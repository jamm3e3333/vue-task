<template>
    <div class="button-wrapper">
        <button 
            @click="$emit('toggle-verbose')" 
            :class="[verbose ? 'btn-toggle--on' : 'btn-toggle--off' ,'btn-toggle']"
        >{{verbose ? 'OFF' : 'ON'}}</button>
        <label name="verbose-view">Verbose view</label> 
    </div>    
</template>

<script>
export default {
    name: 'DomainVerbose',
    props: {
        verbose: Boolean,
    },
}
</script>

<style scoped>
.btn-toggle {
    padding: .5rem 1rem;
    border-radius: .4rem;
    border-style: none;
    color: rgba(255,255,255,1);
    width: 6rem;
    margin-right: 3rem;

}

.btn-toggle:hover {
    cursor: pointer;
}

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
