describe('Chat With Expert', () => {
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

    // it('should show Login screen after tap', async () => {
    //     await element(by.id('Open Login')).tap();
    //     await expect(element(by.id('Login Screen'))).toBeVisible();
    // });

    // it('should clear email and password field on focus', async () => {
    //     await element(by.id('Login Email')).clearText();
    //     await element(by.id('Login Password')).clearText();
    //     await element(by.id('Login Email')).typeText('jkkiiradev@gmail.com');
    //     await element(by.id('Login Password')).typeText('Test1234!');
    // });

    // it('should validate username and password', async () => {
    //     await element(by.id('Login Button')).tap();
    // });

    // it('should should show App Dashboard', async () => {
    //     await waitFor(element(by.id('DashBoard')))
    //         .toBeVisible()
    //         .withTimeout(4000);
    // });
    // it('should navigate to Chat Screen', async () => {
    //     await element(by.id('dashboard.chatExpert')).tap();
    //     await waitFor(element(by.id('Chat Screen')))
    //         .toBeVisible()
    //         .withTimeout(2000);
    // });
    // it('should select Tech Support', async () => {
    //     await element(by.text('General health questions'));
    //         .toBeVisible()
    //         .withTimeout(2000);
    //     await element(by.title(chat.primaryCare.title)).tap();
    // });
});
