describe('Booking Flow', () => {
    beforeAll(async () => {
        await device.launchApp({
            permissions: {
                notifications: 'YES',
                calendar: 'YES',
                camera: 'YES',
                microphone: 'YES',
                photos: 'YES',
            },
        });
    });

    it('should show Login screen after tap', async () => {
        await element(by.id('Open Login')).tap();
        await expect(element(by.id('Login Screen'))).toBeVisible();
    });

    it('should clear email and password field on focus', async () => {
        await element(by.id('Login Email')).clearText();
        await element(by.id('Login Password')).clearText();
        await element(by.id('Login Email')).typeText('aaron@kiira.io');
        await element(by.id('Login Password')).typeText('Test1234!');
    });

    it('should validate username and password', async () => {
        await element(by.id('Login Button')).tap();
    });

    it('should should show App Dashboard', async () => {
        await waitFor(element(by.id('DashBoard')))
            .toBeVisible()
            .withTimeout(4000);
    });

    it('should navigate to Booking', async () => {
        await element(by.id('dashboard.book')).tap();
        await waitFor(element(by.id('Book Screen')))
            .toBeVisible()
            .withTimeout(2000);
    });
});
