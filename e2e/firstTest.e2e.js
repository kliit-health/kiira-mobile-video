describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have reach Welcome screen', async () => {
        await expect(element(by.id('Landing'))).toBeVisible();
    });

    it('should show Activate button', async () => {
        await expect(element(by.id('Activate Button'))).toBeVisible();
    });

    it('should show Login button', async () => {
        await expect(element(by.id('Login Button'))).toBeVisible();
    });

    it('should show Login screen after tap', async () => {
        await element(by.id('Login Button')).tap();
        await expect(element(by.id('Login Screen'))).toBeVisible();
    });
});
