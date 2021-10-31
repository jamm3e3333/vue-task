import DomainHead from '@/components/DomainHead';
import { mount } from '@vue/test-utils';

const headerName = 'Ferda';
const userName = 'Jan Musílek';

describe('DomainHead.veu', () => {
    test('Should check the names in head bar.', () => {
        const domainHead = mount(DomainHead, {
            props: {
                headerName,
                userName,
            }
        });

        expect(domainHead.find('.header-name')
        .text()).toBe(headerName);

        expect(domainHead.find('.user-name')
        .text()).toBe(userName);
    })
})