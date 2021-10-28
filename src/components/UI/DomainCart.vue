<template>
    <div class="wrapper">
        <header class="wrapper-head" v-if="headerText">
            {{headerText}}
        </header>
        <div class="wrapper-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DomainCart',
        props: {
            headerText: String,
        }
    }
</script>

<style scoped>
    .wrapper {
        border-radius: .2rem;
        box-shadow: 0 .1rem .1rem rgba(0,0,0,0.3);
        border: .1rem solid rgba(0,0,0,.1);
        width: 95%;
        margin: 2.5rem auto;
    }
    .wrapper-head {
        padding: 1rem .7rem;
        font-weight: 700;
        text-align: left;
        background: rgba(235, 235, 235, 1);
    }
    .wrapper-body {
        padding: 1rem .7rem;
        width: 100%;
    }
</style>