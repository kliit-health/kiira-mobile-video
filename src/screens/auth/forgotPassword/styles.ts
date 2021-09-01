import { StyleSheet, Platform } from 'react-native';
import { dimensions, text, colors } from '~/utils/constants';
import metrics from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';

const { size, fontFamily } = text;

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

    buttonContainerStyle: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.02,
    },

    buttonTextStyle: {
        textAlign: 'center',
        fontSize: size.regular,
        color: colors.white,
        fontFamily: fontFamily.poppinsRegular,
    },

    contentContainerStyle: {
        padding: parentPaddingValue,
    },

    inputTextContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - childPadding,
        paddingBottom: Platform.OS === 'ios' ? metrics.height * 0.01 : 0,
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5,
    },

    inputTextParentContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        marginTop: metrics.height * 0.01,
    },

    inputTypeStyle: {
        color: colors.black,
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - childPadding,
    },

    logoStyle: {
        alignSelf: 'center',
        height: metrics.width * 0.32,
        width: metrics.width * 0.32,
    },

    parentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        backgroundColor: colors.white,
        borderRadius: 25,
        overflow: 'hidden',
    },

    subTitleTextStyle: {
        marginTop: metrics.height * 0.01,
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black,
        width: metrics.width - childPadding,
    },

    titleContainer: {
        marginTop: metrics.height * 0.08,
        flexDirection: 'column',
        width: metrics.width - parentPadding,
        paddingLeft: childPaddingValue,
        paddingRight: childPaddingValue,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleTextStyle: {
        textAlign: 'center',
        fontSize: size.xxLarge,
        fontFamily: fontFamily.poppinsSemiBold,
        color: colors.black,
        width: metrics.width - childPadding,
    },
});

export default styles;
