<template>
    <main class="head-wrapper">
        <div class="bar-wrapper">
            <span class="bar-opener" @click="$emit('toggle-menu')">
                &#8801;
            </span>
            <h2 class="header-name">
                {{headerName}}
            </h2>
        </div>
        <div class="user-wrapper" @click="$emit('toggle-user')">
            <span class="portrait">
                <i class="fas fa-circle-user"></i>
            </span>
            <p class="user-name">
                {{userName}}
            </p>
        </div>
    </main>
</template>

<script>
export default {
    name: 'DomainHead',
    props: {
        headerName: String,
        userName: String,
    }
}
</script>

<style scoped>
    .head-wrapper {
        padding: 2rem 1rem;
        width: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(76, 130, 240, 1);
        color: rgba(255, 255, 255, 1);
        position: fixed;
        z-index: 20;
        box-shadow: 0 2rem 2rem rgba(0,0,0,0.12);
    }

    .bar-wrapper,
    .user-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .bar-opener {
        font-size: 3rem;
        margin: 0 2rem;
    }

    .bar-opener:hover,
    .user-wrapper:hover {
        cursor: pointer;
    }

    .header-name {
        font-weight: 700;
    }

    .fa-circle-user {
        font-size: 2rem;
    }

    .user-name {
        text-transform: uppercase;
        margin: 0 2rem 0 .3rem;
    }

    p, h2 {
        margin: 0;
    }

    @media (max-width: 500px) {
        .user-name {
            margin-left: 0;
        }

        .bar-opener {
            margin-right: .5rem;
        }
    }
</style>