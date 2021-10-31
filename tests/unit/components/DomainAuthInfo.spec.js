import DomainAuthInfo from '@/components/AuthInfo/DomainAuthInfo';
import App from '@/App';

import { mount } from '@vue/test-utils';
import data from '@/assets/domain-detail.json';

describe('AuthInfo component', () => {
    test('Should mount the component', () => {
        const userInfo = mount(DomainAuthInfo, {
            props: {
                expires: data.expires_at,
                show: true,
            }
        });

        expect(userInfo.find('p.expires-value').text())
        .toBe(new Date(data.expires_at).toISOString());

        expect(userInfo.find('button.btn-toggle')
        .text()).toBe('SHOW');
    })
});