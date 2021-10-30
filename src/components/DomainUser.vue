<template>
    <div class="user-wrapper">
        <div class="user-name--wrapper">
            <p class="user-icon">
                <i class="fas fa-circle-user"></i>
            </p>
            <div class="user-credentials">
                <p class="user-name--para">{{userName}}</p>
                <p>{{userRole}}</p>
            </div>
        </div>
        <div class="user-logout--wrapper">
            <p class="logout-icon">
                <i class="fas fa-right-from-bracket"></i>
            </p>
            <p class="user-logout">
                Logout
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DomainUser',
    props: {
        userName: String,
        userRole: String,
    }
}
</script>

<style scoped>
    p {
        margin: 0;
    }
    .user-wrapper {
        position: fixed;
        top: 5rem;
        right: 5rem;
        z-index: 30;
        background: white;
        color: rgba(118, 118, 118, 1);
        width: 30rem;
        border: solid .17rem rgba(220, 220, 220, 1);
        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.14);
        animation: userOpen 1s ease-out;
    }

    .user-name--wrapper,
    .user-logout--wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3rem;
        border-bottom: solid .17rem rgba(220, 220, 220, 1);
        padding: 1.5rem;
    }

    .user-logout--wrapper {
        border: none;
    }

    .user-icon {
        font-size: 3rem;
    }

    .logout-icon {
        font-size: 2.3rem;
    }

    .user-name--para {
        font-weight: 700;
    }

    @keyframes userOpen {
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

    @keyframes userOpenFull {
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
</style>