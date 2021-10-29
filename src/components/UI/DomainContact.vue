<template>
    <div class="contact-wrapper">
        <i :class="['fas', mark ? 'fa-eye' : 'fa-eye-slash']"></i>
        <p class="contact-key">
            {{name}}
        </p>
        <p class="contact-name">
            {{value}}
        </p>
    </div>

    
    
</template>

<script>
export default {
    name: 'DomainContact',
    props: {
        mark: Boolean,
        name: String,
        value: String,
    }

}
</script>

<style scoped>
    .contact-wrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    p {
        margin: 1rem 0;
    }
    .fa-eye {
        color: rgba(33, 221, 69, 1);
        margin-left: .8rem;
    }

    .fa-eye-slash {
        color: rgba(216, 0, 62, 1);
        margin-left: .8rem;
    }

    .contact-key {
        font-weight: 700;
        width: 10rem;
    }

    .contact-name {
        margin-left: 6rem;
    }

    @media (max-width: 500px) {
        .contact-key {
            width: 5rem;
        }
    }
</style>