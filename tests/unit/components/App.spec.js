import App from '@/App';
import data from '@/assets/domain-detail.json';
import { mount } from '@vue/test-utils';


describe('App.vue', () => {
    test('Should test the verbose view.', async () => {
        const app = mount(App, {
            props: {
                data,
                setModified: data.nsset.dns.map(dns => {
                    return `${dns.name}(${dns.ip_address})`;
                  }),
                showSecret: true,
                toggleMenu: true,
                toggleUser: false,
                userName: 'Jan Musílek',
                userRole: 'admin',
            }
        });

        const verboseFlags = app.findAll('p.flag');
        expect(verboseFlags.length)
        .toBe(data.state_flags.flags.length);

        const buttonsVerbose = app.findAll('.btn-toggle');
        expect(buttonsVerbose[0].text()).toBe('OFF');

        await app.find('.btn-toggle').trigger('click');

        const nonverboseFlags = app.findAll('p.flag');
        expect(nonverboseFlags.length)
        .toBe(data.state_flags.flags
            .filter(flag => flag.active).length);

        const buttonsInverbose = app.findAll('.btn-toggle');
        expect(buttonsInverbose[0].text()).toBe('ON');
    });

    test('Should test the secret key.', async () => {
        const app = mount(App, {
            props: {
                data,
                setModified: data.nsset.dns.map(dns => {
                    return `${dns.name}(${dns.ip_address})`;
                  }),
                showSecret: true,
                toggleMenu: true,
                toggleUser: false,
                userName: 'Jan Musílek',
                userRole: 'admin',
            }
        });

        expect(app.findAll('button.btn-toggle')[1]
        .text()).toBe('SHOW');

        expect(app.find('.secret-key') === null);

        await app.findAll('button.btn-toggle')[1].trigger('click');

        expect(app.findAll('button.btn-toggle')[1]
        .text()).toBe('HIDE');

        expect(app.find('.secret-key')).toBeTruthy();
    });

    test('Should test the user info display.', async () => {
        const app = mount(App, {
            props: {
                data,
                setModified: data.nsset.dns.map(dns => {
                    return `${dns.name}(${dns.ip_address})`;
                  }),
                showSecret: true,
                toggleMenu: true,
                toggleUser: false,
                userName: 'Jan Musílek',
                userRole: 'admin',
            }
        });

        expect(app.find('.user-wrapper') === null);

        await app.find('span.portrait').trigger('click');

        expect(app.find('.user-wrapper')).toBeTruthy();

    })
})