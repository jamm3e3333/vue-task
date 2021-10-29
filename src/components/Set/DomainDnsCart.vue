<template>
    <div class="dns-wrapper">
        <p class="dns-name">
            {{dnsName}}
        </p>
        <div class="dns-value--wrapper">
            <p  v-for="dnsValue in dns"
                :key="dnsValue"
                class="dns-value--para">
                {{dnsValue}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DomainDnsCart',
    props: {
        dnsName: String,
        dns: Array,
    },
}
</script>

<style scoped>
.dns-wrapper {
    display: flex;
    gap: 2rem;
    align-items: center;
} 

.dns-name {
    width: 16rem;
    margin-left: 1.3rem;
    font-weight: 700;
}

.dns-value--wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.dns-value--para {
    margin: 0;
}

@media (max-width: 500px) {
    .dns-wrapper {
        display: block;
    }
    .dns-name {
        width: 10rem;
    }
    .dns-value--wrapper {
        align-items: center;
    }
}
</style>