import { initStripe } from '@stripe/stripe-react-native';
import { Platform } from 'react-native';
import Config from 'react-native-config';

initStripe({
    publishableKey: Config.prod,
    merchantIdentifier: 'merchant.com.kliit',
});

export const deviceSupportsNativePay = async () => {
    // Disable android pay and check if iOS devices
    // supports apple pay since iPhone 5S and below don't support

    return Platform.OS === 'ios'
        ? await stripe.deviceSupportsNativePay()
        : false;
};

const payWithNativeModule = async (credits, amount) => {
    try {
        const canMakePayments = await stripe.canMakeNativePayPayments({
            networks: ['american_express', 'discover', 'master_card', 'visa'],
        });

        if (!canMakePayments) {
            await stripe.openNativePaySetup();
            return null;
        }

        amount = String(amount);

        const token = await stripe.paymentRequestWithNativePay({}, [
            {
                label: `${credits} Credits`,
                amount,
            },
            {
                label: 'Kiira',
                amount,
            },
        ]);

        stripe.completeNativePayRequest();

        return { ok: true, token };
    } catch (err) {
        // TODO: Handle different error codes with user-friendly messages
        stripe.cancelNativePayRequest();
        let status = err.code || 'internal';
        return status !== 'cancelled' ? { ok: false, status } : null;
    }
};

export default payWithNativeModule;
