import { StyleSheet } from 'react-native';
import Constant from '~/utils/constants';
import metrices from '~/utils/metrices';

let parentPaddingValue = metrices.width * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
    agreementButtonContainerStyle: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: 10,
        width: metrices.width - parentPadding,
        backgroundColor: Constant.App.colors.blueColor,
        marginTop: 20,
    },

    buttonContainerStyle: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: metrices.width - parentPadding,
        backgroundColor: Constant.App.colors.blueColor,
        marginTop: metrices.height * 0.1,
    },

    buttonTextStyle: {
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        color: Constant.App.colors.whiteColor,
    },

    cancelTextStyle: {
        textAlign: 'left',
        alignSelf: 'center',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Medium,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.whiteColor,
        marginTop: 35,
    },

    disabledButtonContainerStyle: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: metrices.width - parentPadding,
        backgroundColor: Constant.App.colors.grayColor,
        marginTop: metrices.height * 0.1,
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: parentPaddingValue * 0.5,
        backgroundColor: Constant.App.colors.whiteColor,
        borderBottomColor: Constant.App.colors.greyBgAsk,
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
        borderBottomColor: Constant.App.colors.blackColor,
        borderBottomWidth: 0.5,
    },

    inputTypePasswordStyle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
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
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        textAlign: 'left',
        width: metrices.width - parentPadding - 15,
    },

    passwordValidChecboxIconStyle: {
        height: 12,
        width: 12,
    },

    pronounsParentContainerStyle: {
        width: metrices.width,
        backgroundColor: Constant.App.colors.whiteColor,
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrices.height * 0.03,
        paddingBottom: metrices.height * 0.03,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: Constant.App.colors.lightGrey,
        borderBottomWidth: 0.5,
    },

    pronounsTitleTextStyle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.bodyRegular,
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
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
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
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.headerBold,
    },
});

export default styles;
