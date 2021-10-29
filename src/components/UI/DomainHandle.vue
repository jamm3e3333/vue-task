<template>
    <div class="handle-wrapper">
        <p :class="[isVerbose ? '' : 'verbose-margin' ,'handle-key']">
            {{nameKey}}
        </p>
        <p class="handle-prop">
            {{handle}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'DomainHandle',
    props: {
        nameKey: String,
        handle: String,
        isVerbose: Boolean,
    }
}
</script>

<style scoped>
    .handle-wrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        margin: .5rem 0 0;
    }

    p {
        margin: 0;

    }

    .handle-key {
        font-weight: 700;
        margin-left: 3.5rem;
        width: 10rem;
    }

    .handle-prop {
        color: rgba(83, 140, 245, 1);
        margin-left: 6rem;
    }

    .verbose-margin {
        margin-left: .3rem;
    }
    @media (max-width: 500px) {
        .handle-key {
            width: 5rem;
        }
    }
</style>