import { StyleSheet, Platform } from 'react-native';
import { dimensions, text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

const { size, fontFamily } = text;

let parentPaddingValue = metrices.width * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
    agreementButtonContainerStyle: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: 10,
        width: metrices.width - parentPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: 20,
    },

    buttonContainerStyle: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrices.width - parentPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrices.height * 0.1,
    },

    buttonTextStyle: {
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.white,
    },

    cancelTextStyle: {
        textAlign: 'left',
        alignSelf: 'center',
        color: colors.black,
        fontSize: size.medium,
        fontFamily: fontFamily.poppinsRegular,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        marginTop: 35,
    },

    disabledButtonContainerStyle: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrices.width - parentPadding,
        backgroundColor: colors.greyAccent,
        marginTop: metrices.height * 0.1,
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: parentPaddingValue * 0.5,
        backgroundColor: colors.white,
        borderBottomColor: colors.gray,
        borderBottomWidth: 3,
    },

    inputTextParentContainerStyle: {
        flexDirection: 'column',
        width: metrices.width,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        marginTop: metrices.height * 0.02,
    },

    inputTextContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrices.width - parentPadding,
        paddingBottom: Platform.OS === 'ios' ? metrices.height * 0.01 : 0,
        marginTop: metrices.height * 0.05,
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5,
    },

    inputTypePasswordStyle: {
        color: colors.black,
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },

    passwordHideShowIconStyle: {
        height: metrices.width * 0.05,
        width: metrices.width * 0.05,
        marginTop: metrices.height * 0.02,
    },

    passwordValidationContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrices.width,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        marginTop: metrices.height * 0.01,
    },

    passwordValidationTextStyle: {
        marginLeft: 3,
        color: colors.black,
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - 15,
    },

    passwordValidChecboxIconStyle: {
        height: 12,
        width: 12,
    },

    pronounsParentContainerStyle: {
        width: metrices.width,
        backgroundColor: colors.white,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrices.height * 0.03,
        paddingBottom: metrices.height * 0.03,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
    },

    pronounsTitleTextStyle: {
        color: colors.black,
        fontSize: size.large,
        fontFamily: fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding,
    },

    pronounsContainerStyle: {
        marginTop: metrices.height * 0.02,
        width: metrices.width - parentPadding,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pronounsTextStyle: {
        paddingLeft: 10,
        color: colors.black,
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - metrices.width * 0.05,
    },

    pronounsChecboxIconStyle: {
        height: metrices.width * 0.05,
        width: metrices.width * 0.05,
    },

    titleTextStyle: {
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        width: metrices.width,
        color: colors.black,
        fontSize: size.large,
        fontFamily: fontFamily.poppinsBold,
    },
});

export default styles;
