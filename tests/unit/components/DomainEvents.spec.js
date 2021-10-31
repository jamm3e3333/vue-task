import DomainEvents from '@/components/Events/DomainEvents';
import { mount } from '@vue/test-utils';
import data from '@/assets/domain-detail.json';

describe('DomainEvents.vue', () => {
    test('Should check dates of the component', () => {
        const domainEvent = mount(DomainEvents, {
            props: {
                events: data.events
            }
        });

        const eventDates = domainEvent.findAll('.event-date');
        
        let i = 0;

        for(const event in data.events) {
            if(data.events[event] !== null) {
                expect(eventDates[i].text())
                .toBe(new Date(data.events[event].timestamp).toLocaleString());
            }
            ++i;
        }
        
        
    });
    
    test('Should check the registrar handles.', () => {
        const domainEvent = mount(DomainEvents, {
            props: {
                events: data.events
            }
        });

        const eventRegistrar = domainEvent.findAll('.event-registrar');

        let i = 0;
        for(const event in data.events) {
            if(data.events[event] !== null) {
                expect(eventRegistrar[i].text())
                .toBe(data.events[event].registrar_handle);
            }
            ++i;
        }

    })
})