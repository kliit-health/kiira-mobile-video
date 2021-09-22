import React, { useState } from 'react';
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
import moment from 'moment';
import { default as globalStyles } from '~/components/styles';
import { CameraBlack, Dollar, Cart } from '~/svgs';
import { bookAppointment } from '~/redux/reducers/appointments';

const {
    pad_b,
    pad_h,
    pad_v,
    text_align_c,
    grey_dark_bg,
    radius_lg,
    radius_md,
    hide_overflow,
    large,
    xxLarge,
    white,
    white_bg,
    justify_fs,
    grey_br,
    sm_pad_v,
    pad_sm,
    space_around,
    gray_dark,
} = globalStyles;

const Payment = ({ navigation }) => {
    const dispatch = useDispatch();
    const { expert, appointment, day, time } = navigation.state.params;
    const userData = useSelector((state: RootState) => state.user.data);

    const [message, setMessage] = useState('');

    const {
        firstName,
        lastName,
        profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        insurance,
    } = userData.profileInfo;

    const { email, uid, organizationId, plan } = userData;

    const appointmentDetails = {
        firstName,
        lastName,
        email,
        calendarID: expert.calendarID,
        time: time.date,
        reason: {
            reason: appointment.reason,
            sessionType: appointment.details,
        },
        details: appointment.details,
        prescription: true,
        appointmentTypeID: appointment.details.appointmentType,
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
        },
    };

    const bookVisit = () => {
        dispatch(bookAppointment(appointmentDetails));
    };

    return (
        <Screen test="Appointment Payment">
            <Header onBack={handleBack} title="Book Visit" />
            <Column
                options={[
                    radius_md,
                    pad_h,
                    hide_overflow,
                    white_bg,
                    justify_fs,
                    pad_v,
                    { flex: 0 },
                    grey_br,
                ]}
            >
                <Text
                    options={[
                        pad_sm,
                        grey_dark_bg,
                        text_align_c,
                        xxLarge,
                        white,
                    ]}
                >
                    {moment(time.date).format('ddd MMM Do h:mm a')}
                </Text>
                <Row options={[pad_h, pad_v]}>
                    <FastImage
                        style={[{ height: 75, width: 75 }, [radius_lg]]}
                        source={{ uri: expert.profileInfo.profileImageUrl }}
                    />
                    <Column options={[pad_h, space_around]}>
                        <Text options={[xxLarge]}>{expert.expertName}</Text>
                        <Text options={[gray_dark]}>
                            {expert.profileInfo.profession.shortName}
                        </Text>
                    </Column>
                </Row>
            </Column>
            <Column
                options={[
                    radius_md,
                    pad_h,
                    hide_overflow,
                    white_bg,
                    justify_fs,
                    pad_v,
                    grey_br,
                    { flex: 0 },
                ]}
            >
                <Row options={[pad_h, sm_pad_v]}>
                    <CameraBlack />
                    <Text options={[pad_h, large]}>
                        {`${appointment.details.duration} min Video Visit`}
                    </Text>
                </Row>
                <Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Row options={[pad_h, sm_pad_v]}>
                    <Cart />
                    <Text options={[pad_h, large]}>
                        {`$${appointment.details.price}`}
                    </Text>
                </Row>
                <Line options={[{ marginBottom: 0 }, { width: '90%' }]} />
                <Row options={[pad_h, sm_pad_v]}>
                    <Dollar />
                    <Text options={[pad_h, large]}>
                        {` -$60 credit ($120 available)`}
                    </Text>
                </Row>
                <Line options={[{ width: '90%' }]} />
                <Text options={[pad_h, large, pad_b]}>Total: $0</Text>
            </Column>

            <Text options={[text_align_c, pad_b]}>
                Anything you would like to add?
            </Text>
            <Input
                value={message}
                onChangeText={setMessage}
                options={[radius_md, grey_br, { width: '90%' }]}
                multiline
                placeholder="You can say something like 'I need new birth control'"
            />

            <Button
                test="Confirm Appointment"
                onPress={bookVisit}
                style={{ container: [pad_h], title: [large] }}
                title="Confirm"
            />
        </Screen>
    );
};

export default Payment;
