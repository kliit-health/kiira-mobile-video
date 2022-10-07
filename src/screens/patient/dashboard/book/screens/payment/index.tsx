import {
  ApplePayButton,
  CardField,
  confirmApplePayPayment,
  presentApplePay,
  useApplePay,
  useConfirmPayment,
} from '@stripe/stripe-react-native'
import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {ScrollView} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useDispatch, useSelector} from 'react-redux'
import * as Kiira from '~/components'
import {hideApiLoader, showApiLoader} from '~/components/customLoader/action'
import {card, card_title, default as globalStyles} from '~/components/styles'
import {RootState} from '~/redux/reducers'
import {bookAppointment} from '~/redux/reducers/appointments'
import {CameraBlack, Cart, Dollar} from '~/svgs'
import {fetchAppointmentCost, getOrganizationInfo, payIntent} from '~/utils/firebase'
import {handleBack} from '~/utils/functions/handleNavigation'

const {
  pad_b,
  pad_h,
  pad_v,
  text_align_c,
  radius_md,
  large,
  xLarge,
  xxLarge,
    grey_br,
    sm_pad_v,
    space_around,
    gray_dark,
    image_md,
} = globalStyles;

const Payment = () => {
    const dispatch = useDispatch();
    const { isApplePaySupported } = useApplePay();
    const { confirmPayment, loading } = useConfirmPayment();
    const user = useSelector((state: RootState) => state.user.data);
    const appointments = useSelector((state: RootState) => state.appointments);

    const [message, setMessage] = useState('');
    const [cardDetails, setCardDetails] = useState(null);
    const [balance, setBalance] = useState<number>(0);
    const [organizationInfo, setOrganizationInfo] = useState(null);

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

    const { email, uid, organizationId, plan, visits, prepaid, intakeData } =
        user;
    const { visit } = appointments;
    const { expert, reason } = visit;

    const appointmentDetails = {
        calendarID: visit.expert.calendarID,
        time: visit.time.date,
        reason: reason,
        appointmentType: visit.details,
        uid,
        insurance,
        plan,
        complete: false,
        profile: profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        organizationId,
        expert: {
            firstName: expert.profileInfo.firstName,
            lastName: expert.profileInfo.lastName,
            profession: expert.profileInfo.profession.shortName,
            imageUrl: expert.profileInfo.profileImageUrl,
            rating: expert.rating,
            uid: expert.uid,
            phoneNumber: expert.profileInfo.phoneNumber,
        },
        visits,
        prepaid,
        intakeData,
    };

    const bookVisit = () => {

        //appointmentDetails.intakeData = ''; ???
        dispatch(bookAppointment(appointmentDetails));
    };

    const calculateTotal = async (): Promise<number> => {
      const result = await fetchAppointmentCost(appointments.visit.details.id)
      return result.dollars
    };

    const fetchPaymentIntentClientSecret = async () => {
        const response = await payIntent({ balance });

        return response;
    };

    const handlePayPress = async () => {
        dispatch(showApiLoader());
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
            dispatch(hideApiLoader());
        } else if (paymentIntent) {
            bookVisit();
        }
    };

    const handleApplePay = async () => {
        if (!isApplePaySupported) return;

        const { error } = await presentApplePay({
            cartItems: [{ label: 'Kiira Balance', amount: `${balance}.00` }],
            country: 'US',
            currency: 'USD',
            requiredBillingContactFields: ['phoneNumber', 'name'],
        });

        if (error) {
            // handle error
        } else {
            const clientSecret = await fetchPaymentIntentClientSecret();
            console.log(clientSecret);
            const { error: confirmError } = await confirmApplePayPayment(
                clientSecret,
            );

            if (confirmError) {
                console.log(confirmError);
            } else {
                bookVisit();
            }
        }
    };

    useEffect(() => {
      async function x() {
        setBalance(await calculateTotal())
      }

      x();
    }, []);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await getOrganizationInfo(user);
            setOrganizationInfo(response);
        }

        fetchMyAPI();
    }, []);

    const VisitRecap = () => {
        return (
            <Kiira.Column options={[card]}>
                <Kiira.Text options={[card_title]}>
                    {moment(appointments.visit.time.date).format(
                        'ddd MMM Do h:mm a',
                    )}
                </Kiira.Text>
                <Kiira.Row options={[pad_h, pad_v]}>
                    <FastImage
                        style={[image_md]}
                        source={{
                            uri: appointments.visit.expert.profileInfo
                                .profileImageUrl,
                        }}
                    />
                    <Kiira.Column options={[pad_h, space_around]}>
                        <Kiira.Text options={[xxLarge]}>
                            {appointments.visit.expert.expertName}
                        </Kiira.Text>
                        <Kiira.Text options={[gray_dark]}>
                            {
                                appointments.visit.expert.profileInfo.profession
                                    .shortName
                            }
                        </Kiira.Text>
                    </Kiira.Column>
                </Kiira.Row>
            </Kiira.Column>
        );
    };
    return (
        <Kiira.Screen test="Appointment Payment">
             <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <Kiira.Header onBack={handleBack} title="Book Visit" />
            <VisitRecap />
            <Kiira.Column options={[card]}>
                <Kiira.Row options={[pad_h, sm_pad_v]}>
                    <CameraBlack />
                    <Kiira.Text options={[pad_h, large]}>
                        {`${appointments.visit.details.duration} min Video Visit`}
                    </Kiira.Text>
                </Kiira.Row>
                <Kiira.Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Kiira.Row options={[pad_h, sm_pad_v]}>
                    <Cart />
                    <Kiira.Text options={[pad_h, large]}>
                        {`$${appointments.visit.details.price} - Price of Visit`}
                    </Kiira.Text>
                </Kiira.Row>
                <Kiira.Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Kiira.Row options={[pad_h, sm_pad_v]}>
                    <Dollar />
                    <Kiira.Text options={[pad_h, large]}>
                        {`$${balance} - What You Owe`}
                    </Kiira.Text>
                </Kiira.Row>

                <Kiira.Conditional if={balance > 0}>
                    <>
                        <CardField
                            testID="Credit Card"
                            postalCodeEnabled={true}
                            placeholder={{
                                number: 'CC #',
                            }}
                            style={{
                                height: 50,
                                marginHorizontal: 10,
                            }}
                            onCardChange={cardDetails => {
                                setCardDetails(cardDetails);
                            }}
                        />
                        <Kiira.Line options={[{ width: '90%' }]} />
                        <Kiira.Row
                            options={[
                                { justifyContent: 'space-between' },
                                { alignItems: 'center' },
                                pad_b,
                            ]}
                        >
                            <Kiira.Text options={[pad_h, xxLarge]}>
                                Total: ${balance}
                            </Kiira.Text>
                            {isApplePaySupported && (
                                <ApplePayButton
                                    onPress={handleApplePay}
                                    type="plain"
                                    buttonStyle="black"
                                    borderRadius={4}
                                    style={[{ width: 80 }, { height: 40 }]}
                                />
                            )}

                            <Kiira.Button
                                onPress={handlePayPress}
                                disabled={
                                    !cardDetails?.complete ||
                                    cardDetails?.postalCode.length !== 5
                                }
                                style={{
                                    container: [pad_h],
                                    title: [xLarge],
                                }}
                                title="Pay"
                            />
                        </Kiira.Row>
                    </>
                </Kiira.Conditional>
            </Kiira.Column>

            <Kiira.Text options={[text_align_c]}>
                Anything you would like to add?
            </Kiira.Text>
            <Kiira.Input
                value={message}
                onChangeText={setMessage}
                options={[radius_md, grey_br, { width: '90%' }]}
                multiline
                placeholder="You can say something like 'I need new birth control'"
            />
            </ScrollView>
            {balance === 0 && (
                <Kiira.Button
                    test="Confirm Appointment"
                    onPress={bookVisit}
                    style={{ container: [pad_h], title: [large] }}
                    title="Confirm"
                />
            )}
        </Kiira.Screen>
    );
};

export default Payment;
