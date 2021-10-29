<template>
    <DomainCart>
        <div class="auth-wrapper">
            <p class="auth-key">
                AuthInfo:
            </p>
            <DomainButtonToggle 
                @toggle-button="$emit('toggle-button')"
                :show="show"
                on="SHOW"
                off="HIDE"
                class="button-wrapper"
            />
            <p v-if="!show" class="secret-key">
                adslij4lv09i09asdflkja09sdjf
            </p>
        </div>
        <div class="expires-wrapper">
            <p class="expires-key">
                Expires at:
            </p>
            <p class="expires-value">
                {{new Date(expires).toISOString()}}
            </p>
        </div>
    </DomainCart>
</template>

<script>
import DomainButtonToggle from '../UI/DomainButtonToggle';
import DomainCart from '../UI/DomainCart';

export default {
    name: 'DomainAuthInfo',
    props: {
        expires: String,
        show: Boolean,
    },
    components: {
        DomainButtonToggle,
        DomainCart,
    }
}
</script>

<style scoped>
    .auth-wrapper,
    .expires-wrapper {
        display: flex;
        align-items: center;
        gap: 7rem;
    }
    .auth-key,
    .expires-key {
        font-weight: 700;
        margin-left: 1rem;
        width: 10rem;
    }

    .auth-secret {
        gap: 3rem;
    }

    .secret-key {
        color: rgba(216, 0, 62, 1);
        font-weight: 800;
    }

    @media (max-width: 650px) {
        .auth-wrapper,
        .expires-wrapper {
            display: block;
            margin: 1rem auto;
            width: 90%;
            text-align: center;
        }

        .auth-key,
        .expires-key,
        .button-wrapper {
            margin: 1rem auto;
        }
    }

</style>