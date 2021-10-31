import DomainStateFlag from '@/components/StateFlags/DomainStateFlag';
import { mount } from '@vue/test-utils';

const flagActive = {
                name: "serverDeleteProhibited",
                active: true,
                description: "Deletion forbidden"
            };
            
const flagNotActive = {
                name: "expired",
                active: false,
                description: "Domain expired"
            };

describe('DomainStateFlag', () => {
    test('Should check the active flag.', () => {
        const stateFlag = mount(DomainStateFlag, {
            props: {
                flag: flagActive,
            }
        });

        expect(stateFlag.find('p.flag')
        .attributes().class).toContain('active');
    });

    test('Should check the non active flag.', () => {
        const stateFlag = mount(DomainStateFlag, {
            props: {
                flag: flagNotActive,
            }
        });

        expect(stateFlag.find('p.flag')
        .attributes().class).toContain('not-active');
    })
})