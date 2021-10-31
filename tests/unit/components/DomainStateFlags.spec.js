import DomainStateFlags from '@/components/StateFlags/DomainStateFlags';
import data from '@/assets/domain-detail.json';
import { mount } from '@vue/test-utils';

describe('DomainStateFlags.vue', () => {

    test('Should check rendered verbose state flags.', () => {
        const stateFlags = mount(DomainStateFlags, {
            props: {
                flags: data.state_flags.flags,
                verbose: true, 
            },
        });
        expect(stateFlags.findAll('p.flag'))
        .toHaveLength(data.state_flags.flags.length);
    })

    test('Should check non verbose state flags.', () => {
        const stateFlags = mount(DomainStateFlags, {
            props: {
                flags: data.state_flags.flags,
                verbose: false, 
            },
        });
        expect(stateFlags.findAll('p.flag'))
        .toHaveLength(data.state_flags.flags.filter(flag => flag.active).length);
    })
})