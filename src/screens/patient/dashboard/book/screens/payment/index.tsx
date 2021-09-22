import React, { useState, useEffect } from 'react';
import {
    Screen,
    Header,
    Column,
    Row,
    Text,
    Button,
    Line,
    Input,
} from '~/components';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { handleBack } from '~/utils/functions/handleNavigation';
import { payIntent } from '~/utils/firebase';
import moment from 'moment';
import { default as globalStyles, card, card_title } from '~/components/styles';
import { CameraBlack, Dollar, Cart } from '~/svgs';
import { bookAppointment } from '~/redux/reducers/appointments';
import {
    ApplePayButton,
    CardField,
    useApplePay,
    useConfirmPayment,
    presentApplePay,
    confirmApplePayPayment,
} from '@stripe/stripe-react-native';

const {
    pad_b,
    pad_h,
    pad_v,
    text_align_c,
    radius_lg,
    radius_md,
    large,
    xLarge,
    xxLarge,
    grey_br,
    sm_pad_v,
    space_around,
    gray_dark,
} = globalStyles;

const Payment = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isApplePaySupported } = useApplePay();
    const { confirmPayment, loading } = useConfirmPayment();
    const user = useSelector((state: RootState) => state.user.data);
    const appointments = useSelector((state: RootState) => state.appointments);

    const [message, setMessage] = useState('');
    const [cardDetails, setCardDetails] = useState(null);
    const [balance, setBalance] = useState(null);

    const {
        firstName,
        lastName,
        profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        insurance,
    } = user.profileInfo;

    const { email, uid, organizationId, plan, visits } = user;

    // const appointmentDetails = {
    //     firstName,
    //     lastName,
    //     email,
    //     calendarID: expert.calendarID,
    //     time: time.date,
    //     reason: {
    //         reason: appointment.reason,
    //         sessionType: appointment.details,
    //     },
    //     details: appointment.details,
    //     prescription: true,
    //     appointmentTypeID: appointment.details.appointmentType,
    //     uid,
    //     insurance,
    //     plan,
    //     complete: false,
    //     profile: profileImageUrl,
    //     pronouns,
    //     phoneNumber,
    //     dob,
    //     gender,
    //     organizationId,
    //     expert: {
    //         firstName: expert.profileInfo.firstName,
    //         lastName: expert.profileInfo.lastName,
    //         profession: expert.profileInfo.profession.shortName,
    //         imageUrl: expert.profileInfo.profileImageUrl,
    //         rating: expert.rating,
    //         uid: expert.uid,
    //     },
    // };

    const bookVisit = () => {
        // dispatch(bookAppointment(appointmentDetails));
        console.log(cardDetails);
    };

    const calculateTotal = () => {
        if (appointments.visit.details.price <= visits * 60) {
            return 0;
        } else {
            return appointments.visit.details.price - visits * 60;
        }
    };

    const fetchPaymentIntentClientSecret = async () => {
        const response = await payIntent();

        return response;
    };

    const handlePayPress = async () => {
        const billingDetails = {
            email,
            firstName,
            lastName,
            ...cardDetails,
        };

        const clientSecret = await fetchPaymentIntentClientSecret();

        const { paymentIntent, error } = await confirmPayment(clientSecret, {
            type: 'Card',
            billingDetails,
        });

        if (error) {
            console.log('Payment confirmation error', error);
        } else if (paymentIntent) {
            console.log('Success from promise', paymentIntent);
        }
    };

    const handleApplePay = async () => {
        if (!isApplePaySupported) return;

        const { error } = await presentApplePay({
            cartItems: [{ label: 'Kiira Balance', amount: '1.00' }],
            country: 'US',
            currency: 'USD',
            requiredBillingContactFields: ['phoneNumber', 'name'],
        });

        if (error) {
            // handle error
        } else {
            const clientSecret = await fetchPaymentIntentClientSecret();

            const { error: confirmError } = await confirmApplePayPayment(
                clientSecret,
            );

            if (confirmError) {
                console.log(confirmError);
            }
        }
    };

    useEffect(() => {
        setBalance(calculateTotal());
    }, []);

    const VisitRecap = () => {
        return (
            <Column options={[card]}>
                <Text options={[card_title]}>
                    {moment(appointments.visit.time.date).format(
                        'ddd MMM Do h:mm a',
                    )}
                </Text>
                <Row options={[pad_h, pad_v]}>
                    <FastImage
                        style={[{ height: 75, width: 75 }, [radius_lg]]}
                        source={{
                            uri: appointments.visit.expert.profileInfo
                                .profileImageUrl,
                        }}
                    />
                    <Column options={[pad_h, space_around]}>
                        <Text options={[xxLarge]}>
                            {appointments.visit.expert.expertName}
                        </Text>
                        <Text options={[gray_dark]}>
                            {
                                appointments.visit.expert.profileInfo.profession
                                    .shortName
                            }
                        </Text>
                    </Column>
                </Row>
            </Column>
        );
    };

    return (
        <Screen test="Appointment Payment">
            <Header onBack={handleBack} title="Book Visit" />
            <VisitRecap />
            <Column options={[card]}>
                <Row options={[pad_h, sm_pad_v]}>
                    <CameraBlack />
                    <Text options={[pad_h, large]}>
                        {`${appointments.visit.details.duration} min Video Visit`}
                    </Text>
                </Row>
                <Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Row options={[pad_h, sm_pad_v]}>
                    <Cart />
                    <Text options={[pad_h, large]}>
                        {`$${appointments.visit.details.price}`}
                    </Text>
                </Row>
                <Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Row options={[pad_h, sm_pad_v]}>
                    <Dollar />
                    <Text options={[pad_h, large]}>
                        {` -$${visits * 60} credit ($${visits * 60} available)`}
                    </Text>
                </Row>
                <Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <CardField
                    postalCodeEnabled={true}
                    placeholder={{
                        number: 'CC #',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        height: 50,
                        marginHorizontal: 10,
                    }}
                    onCardChange={cardDetails => {
                        setCardDetails(cardDetails);
                    }}
                />
                <Line options={[{ width: '90%' }]} />
                <Row
                    options={[
                        { justifyContent: 'space-between' },
                        { alignItems: 'center' },
                        pad_b,
                    ]}
                >
                    <Text options={[pad_h, xxLarge]}>Total: ${balance}</Text>
                    {isApplePaySupported && (
                        <ApplePayButton
                            onPress={handleApplePay}
                            type="plain"
                            buttonStyle="black"
                            borderRadius={4}
                            style={[{ width: 80 }, { height: 40 }]}
                        />
                    )}
                    {balance > 0 && (
                        <Button
                            onPress={handlePayPress}
                            style={{
                                container: [pad_h],
                                title: [xLarge],
                            }}
                            title="Pay"
                        />
                    )}
                </Row>
            </Column>

            <Text options={[text_align_c]}>
                Anything you would like to add?
            </Text>
            <Input
                value={message}
                onChangeText={setMessage}
                options={[radius_md, grey_br, { width: '90%' }]}
                multiline
                placeholder="You can say something like 'I need new birth control'"
            />

            {balance === 0 && (
                <Button
                    test="Confirm Appointment"
                    onPress={bookVisit}
                    style={{ container: [pad_h], title: [large] }}
                    title="Confirm"
                />
            )}
        </Screen>
    );
};

export default Payment;
