<template>
    <button 
        @click="$emit('toggle-button')" 
        :class="[show ? 'btn-toggle--on' : 'btn-toggle--off' ,'btn-toggle']"
    >{{!show ? on : off}}</button>
</template>

<script>
export default {
    name: 'DomainButtonToggle',
    props: {
        show: Boolean,
        on: String,
        off: String,
    },
}
</script>

<style scoped>
.btn-toggle {
    padding: .5rem 1rem;
    border-radius: .4rem;
    border-style: none;
    color: rgba(255,255,255,1);
    width: 8rem;
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
</style>
