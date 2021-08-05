import { StyleSheet } from 'react-native';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let titlePaddingValue = metrics.width * 0.05;

const styles = StyleSheet.create({
    backContainerStyle: {
        alignSelf: 'flex-start',
        marginTop: 3,
    },

    backIconStyle: {
        width: 20,
        height: 20,
    },

    btnContainerStyle: {
        marginTop: metrics.height * 0.05,
        width: metrics.width - parentPadding,
        padding: metrics.height * 0.02,
        backgroundColor: Constant.App.colors.blueColor,
        borderRadius: 20,
    },

    btnTextStyle: {
        color: Constant.App.colors.whiteColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    itemsParentContainerStyle: {
        marginTop: metrics.width * 0.05,
        backgroundColor: Constant.App.colors.whiteColor,
        flexDirection: 'row',
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: parentPaddingValue * 0.5,
        paddingBottom: parentPaddingValue * 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    itemTextStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    itemTextBlueStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: Constant.App.colors.blueColor,
        fontSize: Constant.App.textSize.Medium,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    parentContainerStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        backgroundColor: Constant.App.colors.offWhiteColor,
        flexDirection: 'column',
    },

    referalCodeTitleContainerStyle: {
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrics.width * 0.05,
        paddingBottom: metrics.width * 0.05,
        flexDirection: 'column',
        justifyContent: 'center',
        width: metrics.width,
    },

    referalCodeTitleTextBoldStyle: {
        width: metrics.width - parentPadding,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerBold,
        fontWeight: '500',
    },

    referalCodeTextStyle: {
        marginTop: metrics.height * 0.02,
        backgroundColor: Constant.App.colors.whiteColor,
        padding: parentPaddingValue,
        borderRadius: 10,
        width: metrics.width - parentPadding,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerBold,
        fontWeight: '600',
    },

    titleContainerStyle: {
        backgroundColor: Constant.App.colors.whiteColor,
        padding: titlePaddingValue,
        flexDirection: 'column',
        width: metrics.width,
        borderBottomColor: Constant.App.colors.borderColorFilterModal,
        borderBottomWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    subTitleContainerStyle: {
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrics.width * 0.05,
        paddingBottom: metrics.width * 0.05,
        flexDirection: 'column',
        justifyContent: 'center',
        width: metrics.width,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    subTitleTextBoldStyle: {
        width: metrics.width - parentPadding,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerBold,
        fontWeight: '500',
    },

    subTitleTextRegularStyle: {
        width: metrics.width - parentPadding,
        marginTop: metrics.height * 0.01,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Medium,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    titleTextStyle: {
        alignSelf: 'center',
        position: 'absolute',
        color: Constant.App.colors.blackColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerBold,
        fontWeight: '600',
    },
});

export default styles;
