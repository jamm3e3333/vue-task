import DomainVerbose from '@/components/DomainVerbose';
import { mount } from '@vue/test-utils';

describe('DomainVerbose.vue', () => {
    test('Should check the verbose \'ON\' button.', () => {
        const domainVerbose = mount(DomainVerbose, {
            props: {
                verbose: false,
            }
        });

        expect(domainVerbose.find('.btn-toggle').text()).toBe('ON');
    });

    test('Should check the verbose \'OFF\' button.', () => {
        const domainVerbose = mount(DomainVerbose, {
            props: {
                verbose: true,
            }
        });

        expect(domainVerbose.find('.btn-toggle').text()).toBe('OFF');
    });
})