import DomainAuthInfo from '@/components/AuthInfo/DomainAuthInfo';
import { mount } from '@vue/test-utils';

describe('AuthInfo component', () => {
    test('Should mount the component', () => {
        mount(DomainAuthInfo, {
            props: {
                expires: '10-02-2021',
                show: false,
            }
        });
    })
});