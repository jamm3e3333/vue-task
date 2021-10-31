import DomainNSSet from '@/components/Set/DomainNSSet';
import { mount } from '@vue/test-utils';

const set = {
    handle: "ZEMEPLOCHA-KEYSET",
    registrar: "REG-CZNIC",
    dns_keys: [
        "AwEAAddt2AkLfYGKgiEZB5SmIF8EvrjxNMH6HtxW",
        "EA4RJ9Ao6LCWheg8"
    ]
}

describe ('DomainNSSet.vue', () => {
    test('Should check the loaded set', () => {
        const dnsSet = mount(DomainNSSet, {
            props: {
                set,
                headerText: 'NSSet',
                dnsName: 'DNS',
                dns: set.dns_keys,
            }
        });

        const sets = dnsSet.findAll('.handle-prop');

        expect(sets[0].text()).toBe(set['handle']);
        expect(sets[1].text()).toBe(set['registrar']);

        const dnsValues = dnsSet.findAll('.dns-value--para');

        dnsValues.forEach((dns, i) => {
            expect(dns.text()).toBe(set.dns_keys[i]);

        })

    })
})