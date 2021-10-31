import DomainContactCart from '@/components/UI/DomainContactCart';
import { mount } from '@vue/test-utils';

const contactActive = {
    handle: "ARCIKANCLER",
    organization: "Neviditelná univerzita",
    name: "Vzoromil Výsměšek",
    publish: {
        organization: true,
        name: true,
    }
}

const contactInactive = {
    handle: "ARCIKANCLER",
    organization: "Neviditelná univerzita",
    name: "Vzoromil Výsměšek",
    publish: {
        organization: false,
        name: false,
    }
}

describe('DomainContactCart.vue', () => {
    test('Should check the active contact rendered in the cart component.', () => {
        const contactCart = mount(DomainContactCart, {
            props: {
                contact: contactInactive,
                headerText: 'Owner',
                isVerbose: true,
            }
        });

        const invisibles = contactCart.findAll('.fa-eye-slash');
        expect(invisibles.length).toBe(2);

        expect(contactCart.find('.handle-prop')
        .text()).toBe(contactInactive.handle);

        expect(contactCart.findAll('.contact-name')[0]
        .text()).toBe(contactInactive.organization);

        expect(contactCart.findAll('.contact-name')[1]
        .text()).toBe(contactInactive.name);
    });

    test('Should check the inactive contact rendered in the cart component.', () => {
        const contactCart = mount(DomainContactCart, {
            props: {
                contact: contactActive,
                headerText: 'Owner',
                isVerbose: true,
            }
        });

        const visibles = contactCart.findAll('.fa-eye');
        expect(visibles.length).toBe(2);

        expect(contactCart.find('.handle-prop')
        .text()).toBe(contactActive.handle);

        expect(contactCart.findAll('.contact-name')[0]
        .text()).toBe(contactActive.organization);

        expect(contactCart.findAll('.contact-name')[1]
        .text()).toBe(contactActive.name);
    })
})