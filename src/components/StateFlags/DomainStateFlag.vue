<template>
    <p :class="[flag.active ? 'active' : 'not-active', 'flag']">
        <i :class="['fas', flag.active ? 'fa-circle-check' : 'fa-circle-xmark']"></i>
        {{flag.description}}
    </p>
</template>

<script>
export default {
    name: 'DomainStateFlag',
    props: {
        flag: Object,
    },
}
</script>

<style scoped>
    .active {
        color: rgba(33, 221, 69, 1);
    }

    .not-active {
        color: rgba(216, 0, 62, 1);
    }
    
    .flag {
        display: block;
        text-align: left;
    }
</style>
