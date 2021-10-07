describe('Cancel Booking', () => {
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
        await element(by.id('Login Email')).typeText('jkkiiradev@gmail.com');
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

    it('should navigate to Appointment Screen', async () => {
        await element(by.id('dashboard.appointments')).tap();
        await waitFor(element(by.id('Appointment Screen')))
            .toBeVisible()
            .withTimeout(2000);
    });

    it('should reschedule last appointment', async () => {
        await element(by.id('Appointments List')).scrollTo('bottom');
        await element(by.text('Reschedule')).atIndex(2).tap();
    });
    it('should navigate to Reschedule Screen', async () => {
        await element(by.id('dashboard.appointments')).tap();
        await waitFor(element(by.id('Appointment Screen')))
            .toBeVisible()
            .withTimeout(2000);
    });
    it('should bring up clinician calendar', async () => {
        await element(by.text('See Full Schedule')).tap();
    });
    it('should select date from calendar', async () => {
        await waitFor(element(by.id('date 3')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.id('date 3')).tap();
        //ToDo apply test={'date ' + index} to reschedule calendar
    });

    it('should select time from list', async () => {
        await waitFor(element(by.id('time 3')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.id('time 3')).tap();
        //ToDo apply test={'time ' + index} to reschedule calendar
    });
});
