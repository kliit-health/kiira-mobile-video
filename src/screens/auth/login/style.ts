import { StyleSheet } from 'react-native';
import { text, colors, dimensions } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
    backIconStyle: {
        margin: metrics.height * 0.02,
        height: metrics.width * 0.05,
        width: metrics.width * 0.05,
        alignSelf: 'flex-end',
    },

    biometrics: {
        alignSelf: 'center',
        height: metrics.width * 0.1,
        width: metrics.width * 0.1,
        marginTop: metrics.height * 0.05,
    },

    contentContainerStyle: {
        padding: smallScreen ? 0 : parentPaddingValue,
    },

    forgotPasswordText: {
        textAlign: 'center',
        marginTop: metrics.height * 0.02,
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        fontFamily: text.fontFamily.poppinsRegular,
        marginBottom: metrics.height * 0.02,
    },

    inputTextParentContainerStyle: {
        flexDirection: 'column',
        width: metrics.width - parentPadding,
        marginTop: metrics.height * 0.01,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
    },

    inputTextContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - childPadding,
        paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
        marginTop: metrics.height * 0.01,
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5,
    },

    inputTypeStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - childPadding,
    },

    inputTypePasswordStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        textAlign: 'left',
        width: metrics.width - childPadding - metrics.width * 0.05,
    },

    loginButton: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.05,
    },

    loginButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    logoStyle: {
        alignSelf: 'center',
        height: metrics.width * 0.2,
        width: metrics.width * 0.2,
    },

    logo2Style: {
        alignSelf: 'center',
        height: metrics.width * 0.35,
        width: metrics.width * 0.35,
    },

    parentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        backgroundColor: colors.white,
        borderRadius: 35,
        overflow: 'hidden',
    },

    passwordHideShowIconStyle: {
        height: metrics.width * 0.05,
        width: metrics.width * 0.05,
        marginTop: metrics.height * 0.02,
    },

    version: {
        alignSelf: 'center',
    },
});

export default styles;
