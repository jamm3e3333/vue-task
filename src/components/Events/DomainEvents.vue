<template>
    <div class="event-wrapper" v-for="event in eventData" :key="event.name">
        <p class="event-name">
            {{event.name}}
        </p>
        <p class="event-date">
            {{event.date}}
        </p>
        <p v-if="event.registrar" class="event-registrar--name">
            Registrar:
        </p>
        <p v-if="event.registrar" class="event-registrar">
            {{event.registrar}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'DomainEvents',
    props: {
        events: Object,
    },
    data() {
        return {
            eventData: [],
        }
    },
    created() {
        for(const event in this.events) {
          if(this.events[event]) {
              this.eventData.push({
                  name: event.charAt(0).toUpperCase() + event.slice(1) + ' Date:',
                  date: new Date(this.events[event].timestamp).toLocaleString(),
                  registrar: this.events[event].registrar_handle,

              });
          }
          else {
              this.eventData.push({
                  name: event.charAt(0).toUpperCase() + event.slice(1) + ' Date:',
                  date: '',
                  registrar: '',
              })
          }
        }
    }
}
</script>

<style scoped>
    .event-wrapper {
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 95%;
        line-height: .5;

    }
    .event-name {
        font-weight: 700;
        text-align: left;
        width: 15rem;
    }
    .event-registrar--name {
        font-weight: 700;
        text-align: left;
    }
    .event-registrar {
        color: rgba(83, 140, 245, 1);
        text-align: left;
        width: 12rem;
    }
    .event-date {
        color: rgba(0,0,0,.5);
        display: inline-block;
        text-align: left;
        width: 18rem;
    }
    @media (max-width: 840px) {
        .event-name,
        .event-registrar--name,
        .event-registrar,
        .event-date {
            text-align: center;
            width: 100%;
            margin: 0 auto;
        }

        .event-wrapper {
            display: block;
            margin: 0 auto;
            margin-bottom: 3rem;
            line-height: 2;
        }
    }
</style>