<template>
    <div :class="[verbose ? 'verbose' : '']">
        <div v-if="verbose"
             class="flag-wrapper">
            <DomainStateFlag 
                v-for="flag in blockForbiddenDeleted" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
        <div v-if="verbose"
             class="flag-wrapper">
            <DomainStateFlag 
                v-for="flag in keptZone" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
        <div v-if="verbose"
             class="flag-wrapper">
            <DomainStateFlag 
                v-for="flag in expired" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
        <div v-if="!verbose"
             class="flag-wrapper"
        >
            <DomainStateFlag
                v-for="flag in active"
                :key="flag.name"
                :flag="flag"
            />
        </div>
    </div>
</template>

<script>
import DomainStateFlag from './DomainStateFlag';

export default {
    name: 'DomainStateFlags',
    props: {
        flags: Array,
        verbose: Boolean,
    },   
    data() {
        return {
            blockForbiddenDeleted: [],
            keptZone: [],
            expired: [],
            active: [],
        }
    },
    components: {
        DomainStateFlag,
    },
    created() {
        this.blockForbiddenDeleted = this.flags.filter(flag => flag.description.match(/(blocked|forbidden|deleted)/));
        this.keptZone = this.flags.filter(flag => flag.description.match(/(kept in zone| kept out of zone)/));
        this.expired = this.flags.filter(flag => flag.description
        .match(/(expired|not validated|doesn't have associated nsset|expires|expiration|to be out of zone soon|will be deleted)/));

        this.active = this.flags.filter(flag => flag.active);
    },
}
</script>

<style scoped>
    .verbose {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .flag-wrapper {
        padding: 0 1rem;
    }
</style>