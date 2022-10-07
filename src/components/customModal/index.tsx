/* eslint-disable react/prop-types */
import React from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Image,
    Text,
    Linking,
} from 'react-native';
import CustomText from '../customText';
import style from './style';
import CustomButton from '../customButton';
import { BlurView } from '@react-native-community/blur';
import Constant from '~/utils/constants';

const { staticImages } = Constant.App;

const CustomModal = ({
    showLoader,
    errorMsg,
    supportLink,
    memberMsg,
    onPressErrorButtonOk,
    onEmailSupport,
    onBecomeMember,
}) => (
    <Modal
        animationType="fade"
        onRequestClose={() => {}}
        transparent
        visible={showLoader}
        testID="Show Or Hide Modal"
    >
        {memberMsg && (
            <BlurView style={style.absolute} blurType="light" blurAmount={5} />
        )}
        <View
            style={
                memberMsg
                    ? [
                          style.parentContainerStyle,
                          { backgroundColor: 'rgba(0, 11, 30, 0.65)' },
                      ]
                    : style.parentContainerStyle
            }
        >
            <View
                style={
                    memberMsg
                        ? [style.innerContainerStyle, { borderRadius: 16 }]
                        : style.innerContainerStyle
                }
            >
                <CustomText
                    style={memberMsg ? style.textMemberStyle : style.textStyle}
                >
                    {errorMsg}{' '}
                    {supportLink ? (
                        <Text
                            style={style.linkStyle}
                            onPress={() =>
                                Linking.openURL('mailto:hello@kiira.io')
                            }
                        >
                            hello@kiira.io
                        </Text>
                    ) : null}{' '}
                </CustomText>
                {memberMsg && (
                    <CustomButton
                        textStyle={style.supportStyle}
                        buttonStyle={{}}
                        text={'Email Support'}
                        onPress={onEmailSupport}
                    />
                )}
                <CustomButton
                    test="Appointment Successfully Booked OK Button"
                    buttonStyle={
                        memberMsg
                            ? style.okBtnMemberContainerStyle
                            : style.okBtnErrorContainerStyle
                    }
                    textStyle={style.okBtnErrorTextStyle}
                    text={memberMsg ? 'Become a member' : 'OK'}
                    onPress={memberMsg ? onBecomeMember : onPressErrorButtonOk}
                />
            </View>
            {memberMsg && (
                <TouchableOpacity
                    style={style.xCloseButton}
                    onPress={onPressErrorButtonOk}
                >
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                        }}
                        resizeMode="contain"
                        source={staticImages.xxIcon}
                    />
                </TouchableOpacity>
            )}
        </View>
    </Modal>
);

export default CustomModal;
