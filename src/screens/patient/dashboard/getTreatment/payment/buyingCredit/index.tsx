import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import styles, { PaymentDropdownDimensions } from './style';
import Constant from '~/utils/constants';
import CustomText from '~/components/customText';
import { IconButton } from '~/components';
import FlyingLabelIcon from '~/components/FlyingLabelIcon';
import CustomButton from '~/components/customButton';
import ModalDropdown from '~/components/modalDropdown';
import {
    getCreditAmountsOptions,
    getPaymentMethods,
    buyCreditsWithCard,
    buyCreditsWithToken,
    buyCreditsUsingPayPal,
} from '../action';
import {
    defaultPaymentMethods,
    PaymentMethodsTypes,
} from '~/utils/helper/payment';
import { payWithNativeModule } from '~/utils/payment';
import { showOrHideModal } from '~/components/customModal/action';

class BuyingCredit extends PureComponent {
    public state: any;
    public props: any;
    public paymentMethodsDropdown: any;
    public amountDropdown: any;
    public setState: any;
    public navigation: any;
    public lang: any;
    public buyCreditsWithToken: any;
    public showAlert: any;
    public cellHeight: any;
    public marginVertical: any;
    public marginRight: any;
    public marginBottom: any;
    public amountOptions: any;

    constructor(props) {
        super(props);
        const AddPaymentMethod = {
            type: PaymentMethodsTypes.addPaymentMethod,
            title: 'Add Payment Method',
        };
        this.state = {
            amountOptionIndex: 0,
            paymentMethodOption: AddPaymentMethod,
            visitData: this.props.visitData,
        };
        props.getPaymentMethods();
    }

    buyCredits = async () => {
        const { lang, visitData } = this.props;
        const {
            appointmentType: { credits, price },
        } = visitData;
        const paymentMethod = this.state.paymentMethodOption;
        const sessions = credits;
        const amount = price;

        if (sessions <= 0) {
            return;
        }
        if (paymentMethod && paymentMethod.type) {
            if (paymentMethod.type === PaymentMethodsTypes.card) {
                this.props.buyCredits(paymentMethod.id, sessions, amount, true);
            } else if (paymentMethod.type === PaymentMethodsTypes.applePay) {
                await this.payUsingApplePay(sessions, amount);
            } else if (paymentMethod.type === PaymentMethodsTypes.payPal) {
                this.props.buyCreditsUsingPayPal(
                    sessions,
                    amount,
                    this.props.navigation,
                );
            } else {
                this.props.showAlert(lang.en.buyingCredits.selectPaymentMethod);
            }
        }
    };

    payUsingApplePay = async (sessions, amount) => {
        const response = await payWithNativeModule(sessions, amount);
        const { buyCreditsWithToken, showAlert, lang } = this.props;

        // User has no credit cards or user cancelled the operation
        if (response === null) {
            return;
        }

        if (response.ok) {
            const cardTokenID = response.token.tokenId;
            buyCreditsWithToken(cardTokenID, sessions, amount);
        } else {
            showAlert(lang.errorMessage.serverError);
        }
    };

    renderPaymentMethodsDropdown = () => {
        const { navigation } = this.props;
        const paymentMethods = [
            ...defaultPaymentMethods(this.props.isNativePaySupported),
            ...this.props.paymentMethods.map(method => ({
                ...method,
                type: PaymentMethodsTypes.card,
            })),
            {
                type: 'AddPaymentMethod',
                title: 'Add Payment Method',
            },
        ];

        const {
            cellHeight,
            marginVertical,
            marginRight,
            marginBottom,
        } = PaymentDropdownDimensions;
        const dropDownViewHeight =
            Math.min(paymentMethods.length, 6) * cellHeight + marginVertical;

        return (
            <View style={styles.paymentMethodsDropdownContainer}>
                <ModalDropdown
                    ref={ref => {
                        this.paymentMethodsDropdown = ref;
                    }}
                    dropdownStyle={styles.paymentMethodsDropdown}
                    options={paymentMethods}
                    defaultIndex={paymentMethods.length > 0 ? 0 : -1}
                    defaultValue=""
                    showsVerticalScrollIndicator={false}
                    renderRow={this.renderPaymentDropdownCell}
                    renderSeparator={() => null}
                    textStyle={{ color: 'transparent' }}
                    onSelect={(_, option) => {
                        this.setState({ paymentMethodOption: option });
                        if (
                            option.type === PaymentMethodsTypes.addPaymentMethod
                        ) {
                            navigation.navigate(
                                Constant.App.screenNames.PaymentMethods,
                            );
                        }
                    }}
                    adjustFrame={_ => {
                        return {
                            height: dropDownViewHeight,
                            right: marginRight,
                            bottom: marginBottom,
                        };
                    }}
                />
            </View>
        );
    };

    renderPaymentDropdownCell = (option, _, isSelected) => {
        if (option && option.type) {
            if (option.type === PaymentMethodsTypes.addPaymentMethod) {
                return this.renderAddPaymentMethodCell();
            } else if (option.type === PaymentMethodsTypes.payPal) {
                return this.renderPayPalCell(option.title);
            } else if (option.type === PaymentMethodsTypes.applePay) {
                return this.renderApplePayCell(option.title);
            } else if (option.type === PaymentMethodsTypes.card) {
                return this.renderPaymentMethodCell(option, isSelected);
            } else {
                return null;
            }
        }
    };

    renderPaymentMethodCell = (paymentMethod, isSelected) => {
        const cellColor = isSelected
            ? Constant.App.colors.paleLilac
            : Constant.App.colors.whiteColor;

        return (
            <View
                style={{
                    ...styles.paymentMethodCell,
                    backgroundColor: cellColor,
                }}
            >
                <Image
                    source={Constant.App.staticImages.creditCard}
                    style={styles.paymentMethodIcon}
                />
                <CustomText
                    style={styles.paymentMethodNumber}
                >{`···· ${paymentMethod.last4Digits}`}</CustomText>
            </View>
        );
    };

    renderAddPaymentMethodCell = () => {
        const { lang } = this.props;
        return (
            <View style={styles.addPaymentMethodCell}>
                <Image
                    source={Constant.App.staticImages.addIcon}
                    style={styles.addPaymentIcon}
                />
                <CustomText style={styles.addPaymentTitle}>
                    {lang.buyingCredits.addPaymentMethod}
                </CustomText>
            </View>
        );
    };

    renderPayPalCell = title => {
        return (
            <View style={styles.payPalCell}>
                <Image
                    source={Constant.App.staticImages.payPalIcon}
                    style={styles.payPalIcon}
                    resizeMode="contain"
                />
                <CustomText style={styles.paymentMethodNumber}>
                    {title}
                </CustomText>
            </View>
        );
    };

    renderApplePayCell = title => {
        return (
            <View style={styles.payPalCell}>
                <Image
                    source={Constant.App.staticImages.applePayIcon}
                    style={styles.applePayIcon}
                />
                <CustomText style={styles.paymentMethodNumber}>
                    {title}
                </CustomText>
            </View>
        );
    };

    get currentPaymentMethodTitle() {
        const option = this.state.paymentMethodOption;
        if (option.type === PaymentMethodsTypes.card) {
            return `···· ${option.last4Digits}`;
        } else {
            return option.title;
        }
    }

    render() {
        const { navigation, lang, visitData } = this.props;
        const {
            appointmentType: { duration, price, title },
        } = visitData;

        return (
            <View style={styles.topContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <IconButton
                            source={Constant.App.staticImages.xCloseIcon}
                            onPress={() => navigation.dismiss()}
                        />
                        <CustomText style={styles.title}>
                            {lang.buyingCredits.title}
                        </CustomText>
                    </View>
                    <View style={styles.optionsContainer}>
                        <FlyingLabelIcon
                            source={Constant.App.staticImages.penguin}
                            title={lang.buyingCredits.kiira}
                            label={title}
                        />
                        <FlyingLabelIcon
                            containerStyle={styles.amountContainer}
                            iconStyle={styles.amountIcon}
                            source={Constant.App.staticImages.basket}
                            title={lang.buyingCredits.amountTitle}
                            label={`$${price} \t ${duration} minutes`}
                        />
                        <FlyingLabelIcon
                            containerStyle={styles.amountContainer}
                            source={Constant.App.staticImages.creditCard}
                            iconStyle={styles.creditCardIcon}
                            title={lang.buyingCredits.paymentTitle}
                            label={this.currentPaymentMethodTitle}
                            onPress={() => {
                                this.paymentMethodsDropdown &&
                                    this.paymentMethodsDropdown.show();
                            }}
                        />
                    </View>
                    <View style={styles.footerContainer}>
                        <CustomText style={styles.totalText}>
                            {`Total: $${price}`}
                        </CustomText>
                        <CustomButton
                            onPress={() => this.buyCredits()}
                            text={lang.buyingCredits.buyCredits}
                            buttonStyle={styles.buyCreditsButton}
                            textStyle={styles.buyCreditsButtonText}
                        />
                    </View>
                </View>
                {this.renderPaymentMethodsDropdown()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.user.data,
    amountOptions: state.payment.creditAmountOptions,
    paymentMethods: state.payment.paymentMethods.filter(
        method => !method.isExpired,
    ),
    isNativePaySupported: state.payment.isNativePaySupported,
    orderData: state.payment.orderData,
    lang: state.language,
    visitData: state.expertSchedule,
});

const mapDispatchToProps = dispatch => ({
    getCreditAmountOptions: () => dispatch(getCreditAmountsOptions()),
    getPaymentMethods: () => dispatch(getPaymentMethods()),
    buyCredits: (cardID, credits, amount, prepaid) =>
        dispatch(buyCreditsWithCard(cardID, credits, amount, prepaid)),
    buyCreditsWithToken: (tokenID, credits, amount, prepaid) =>
        dispatch(buyCreditsWithToken(tokenID, credits, amount, prepaid)),
    buyCreditsUsingPayPal: (credits, amount, navigation, prepaid) =>
        dispatch(buyCreditsUsingPayPal(credits, amount, navigation, prepaid)),
    showAlert: message => dispatch(showOrHideModal(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyingCredit);
