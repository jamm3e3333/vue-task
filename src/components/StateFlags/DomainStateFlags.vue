<template>
    <div :class="[verbose ? 'verbose' : '']">
        <div v-if="showDiv(blockForbiddenDeleted)"
             class="flag-wrapper">
            <DomainStateFlag 
                :class="[verbose ? 'forbidden' : '']" 
                :verbose="verbose" 
                v-for="flag in blockForbiddenDeleted" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
        <div v-if="showDiv(keptZone)"
             class="flag-wrapper">
            <DomainStateFlag 
                :class="[verbose ? 'zone' : '']"
                :verbose="verbose" 
                v-for="flag in keptZone" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
        <div v-if="showDiv(expired)"
             class="flag-wrapper">
            <DomainStateFlag 
                :class="[verbose ? 'expired' : '']"
                :verbose="verbose" 
                v-for="flag in expired" 
                :flag="flag" 
                :key="flag.name" 
            />
        </div>
    </div>
</template>

<script>
import DomainStateFlag from './DomainStateFlag';

export default {
    name: 'DomainStateFlags',
    props: {
        flags: Object,
        verbose: Boolean,
    },   
    data() {
        return {
            blockForbiddenDeleted: [],
            keptZone: [],
            expired: [],
        }
    },
    methods: {
        showDiv(flagsArray) {
            if(this.verbose) return true;
            else {
                flagsArray.every(flag => !flag.active);
            }
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
    }
}
</script>

<style scoped>
    .verbose {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .flag-wrapper {
        padding: 1rem;
    }
</style>