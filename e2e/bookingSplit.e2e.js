describe('Booking Flow Split/Purchase', () => {
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
    it('should navigate to Booking Screen', async () => {
        await element(by.id('dashboard.book')).tap();
        await waitFor(element(by.id('Book Screen')))
            .toBeVisible()
            .withTimeout(2000);
    });
    it('should select mental health tab', async () => {
        await waitFor(element(by.text('MENTAL')))
            .toBeVisible()
            .withTimeout(2000);
        await element(by.text('MENTAL')).tap();
    });
    it('should select a reason for visit', async () => {
        await element(by.id('ADHD')).tap(); //@@Todo
    });
    it('should select See Providers', async () => {
        await element(by.id('See Providers')).tap();
    });

    it('should select provider Nick Riviera', async () => {
        await element(by.id('Nick Riviera')).tap();
    });

    it('should select availability calendar', async () => {
        await element(by.id('See Availability')).tap();
        await waitFor(element(by.id('Availability Calendar')))
            .toBeVisible()
            .withTimeout(4000);
    });
    it('should select date from calendar', async () => {
        await waitFor(element(by.id('date 3')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.id('date 3')).tap();
    });

    it('should select time from list', async () => {
        await waitFor(element(by.id('time 3')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.id('time 3')).tap();
    });

    it('should confirm date and time', async () => {
        await element(by.id('Confirm Date and Time')).tap();
    });
    it('should insert CC info into fields and pay', async () => {
        await waitFor(element(by.id('Appointment Payment')))
            .toBeVisible()
            .withTimeout(2000);
        await element(by.text('CC #')).tap();
        await element(by.id('Credit Card')).typeText(
            '4242424242424242112212391208', //dd 1122 cvv 123 zip 91208',
        );
        await waitFor(element(by.text('Pay')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.text('Pay')).tap();
    });
    xit('should confirm appointment', async () => {
        await waitFor(element(by.id('Appointment Payment')))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.id('Confirm Appointment')).tap();
    });
    xit('should navigate to Dashboard with Appointment Confirmation Modal', async () => {
        await waitFor(element(by.id('Appointment Confirmed Modal'))) //@Todo modal and text tests redundant. Worth cleaning up.
            .toBeVisible()
            .withTimeout(4000);
        await waitFor(by.text('Appointment successfully booked.'))
            .toBeVisible()
            .withTimeout(4000);
        await element(by.text('OK')).tap();
    });
});
