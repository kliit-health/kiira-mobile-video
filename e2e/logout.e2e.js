describe('Login / Logout Flow', () => {
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

    // beforeEach(async () => {
    //     await device.reloadReactNative();
    // });

    it('should show Login screen after tap', async () => {
        await element(by.id('Login Button')).tap();
        await expect(element(by.id('Login Screen'))).toBeVisible();
    });

    it('should login using Biometrics', async () => {
        await element(by.id('Bio Login')).tap();
    });

    it('should should show App Dashboard', async () => {
        await waitFor(element(by.id('DashBoard')))
            .toBeVisible()
            .withTimeout(4000);
    });

    it('should navigate to Profile', async () => {
        await element(by.id('Profile Tab')).atIndex(1).tap();
        await waitFor(element(by.id('Profile Screen')))
            .toBeVisible()
            .withTimeout(2000);
    });

    it('should log user out', async () => {
        await element(by.id('Logout')).tap();
    });


    it('should show Activate Account screen after tap', async () => {
        await element(by.id('Activate Button')).tap();
        await expect(element(by.id('Activate Screen'))).toBeVisible(); //test failed no identifier matching
    });

    //implement back to Landing
    it('should go back to Landing screen after tap', async () => {
        await element(by.id('Close Button')).tap();
        await expect(element(by.id('Landing'))).toBeVisible();
    });

    it('should show Login screen after tap', async () => {
        await element(by.id('Login Button')).tap();
        await expect(element(by.id('Login Screen'))).toBeVisible();
    });

    // clear previous values in email and password
    it('should clear email and password field on focus', async () => {
        await element(by.id('Login Email')).clearText();
        await element(by.id('Login Password')).clearText();
    });

});
