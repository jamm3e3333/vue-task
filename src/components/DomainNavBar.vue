<template>
    <div class="nav-wrapper">
            <p class="nav-header">
                Applications
            </p>
            <div class="nav-item--wraper">
                <p class="nav-item">
                    <span class="nav-icon">
                        <i class="fas fa-earth-americas"></i>
                    </span>
                    Registry
                </p>
            </div>
    </div>
</template>

<script>
export default {
    name: 'DomainNavBar',
    props: {

    }    
}
</script>

<style scoped>
    .nav-wrapper {
        position: fixed;
        width: 23rem;
        left: 0;
        bottom: 0;
        height: 100%;
        border-right: solid .2rem rgba(0, 0, 0, 0.2);
        z-index: -1;
        animation: navigationOpen 1s ease-out;
    }

    .nav-header {
        text-transform: uppercase;
        color: rgba(189, 189, 189, 1);
        font-weight: 600;
        margin-top: 10rem;
        margin-left: 1rem;
    }

    .nav-item--wraper {
        background: rgba(249, 201, 47, 1);
        padding: .1rem 0;
        margin-top: 2.2rem;
    }

    .nav-icon {
        margin: 0 1rem;
    }

    .fas {
        font-size: 2rem;
    }
    @keyframes navigationOpen {
        0% {
            transform: translateX(-2rem);
            opacity: 0;
        }
        50% {
            transform: translateX(1rem);
            opacity: .6;
        }
        100% {
            transform: none;
            opacity: 1;
        }
    }

    @keyframes navigationOpenFull {
        0% {
            transform: translateY(-2rem);
            opacity: 0;
        }
        50% {
            transform: translateY(1rem);
            opacity: .6;
        }
        100% {
            transform: none;
            opacity: 1;
        }
    }

    @media (max-width: 750px) {
        .nav-wrapper {
            width: 100%;
            z-index: 10;
            background: white;
            animation: navigationOpenFull 1s ease-out;
        }
    }

</style>