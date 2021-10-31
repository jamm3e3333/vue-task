import DomainUser from '@/components/DomainUser';
import { mount } from '@vue/test-utils';

const userName = 'Jan Musílek';
const userRole = 'admin';

describe('DomainUser.vue', () => {
    test('Should check the name and role', () => {
        const domainUser = mount(DomainUser, {
            props: {
                userName,
                userRole,
            }
        });

        expect(domainUser.find('.user-name--para')
        .text()).toBe(userName);

        expect(domainUser.find('.user-role--para')
        .text()).toBe(userRole);
    })
})