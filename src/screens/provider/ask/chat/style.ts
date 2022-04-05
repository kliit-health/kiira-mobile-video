import { StyleSheet, Platform } from 'react-native';
import Constant from '~/utils/constants';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';
import metrics from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
    actionModalBlueTextStyle: {
        width: metrics.width - 20,
        color: Constant.App.colors.blueColor,
        textAlign: 'center',
        padding: 12,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    actionModalInnerContainerStyle: {
        borderRadius: 10,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        width: metrics.width - 20,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    actionModalLineSeperator: {
        backgroundColor: Constant.App.colors.greyBgAsk,
        width: metrics.width - 20,
        height: 1,
    },

    actionModalParentContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 200,
        paddingBottom: 20,
    },

    actionModalOkBtnErrorContainerStyle: {
        width: metrics.width - 20,
        padding: 10,
        backgroundColor: Constant.App.colors.whiteColor,
        marginTop: 10,
        borderRadius: 10,
    },

    actionModalOkBtnErrorTextStyle: {
        color: Constant.App.colors.blueColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.headerBold,
    },

    actionModalTitleTextStyle: {
        width: metrics.width - 20,
        color: Constant.App.colors.lightGrey,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 12,
    },

    cameraContainerStyle: {
        alignSelf: 'center',
    },

    chatInputContainer: {
        flexDirection: 'row',
        width: metrics.width,
    },

    chatInputParentContainer: {
        flexDirection: 'column',
        width: metrics.width,
        padding: parentPaddingValue,
        backgroundColor: Constant.App.colors.whiteColor,
        borderTopWidth: 1,
        borderTopColor: Constant.App.colors.greyBgAsk,
    },

    dateContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dateTextStyle: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Small,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 5,
    },

    headerStyle: {
        paddingTop: getStatusBarHeight(null) + parentPaddingValue * 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: parentPaddingValue,
        paddingBottom: parentPaddingValue * 0.5,
        paddingRight: parentPaddingValue,
        backgroundColor: Constant.App.colors.whiteColor,
        borderBottomColor: Constant.App.colors.greyBgAsk,
        borderBottomWidth: 3,
    },

    imageContainerStyle: {
        marginTop: 16,
    },

    imageCrossContainerStyle: {
        right: 0,
        marginTop: 20,
        position: 'absolute',
    },

    imageCrossStyle: {
        width: 16,
        height: 16,
    },

    image: {
        marginRight: 5,
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    imageParentContainerStyle: {
        width: metrics.width * 0.75,
        borderRadius: 15,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 5,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    messagesLeftTextStyle: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 10,
    },

    messagesRightTextStyle: {
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 10,
    },

    parentContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.offWhiteColor,
        marginTop: Platform.OS === 'android' ? 35 : 0,
    },

    profileHeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    resolvedParentContainer: {
        flexDirection: 'column',
        width: metrics.width,
        padding: parentPaddingValue,
    },

    resovledTextStyle: {
        color: Constant.App.colors.greyColorText,
        textAlign: 'center',
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    rowLeftContainerStyle: {
        backgroundColor: Constant.App.colors.greyBgAsk,
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: 5,
        padding: 5,
    },

    rowLeftParentContainerStyle: {
        flexDirection: 'row',
        marginRight: 70,
        marginTop: 10,
        marginBottom: 10,
    },

    rowRightContainerView: {
        padding: 5,
        backgroundColor: Constant.App.colors.chatHighLightedBgColor,
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 5,
    },

    rowRightParentContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 10,
    },

    sendButtonContainerStyle: {
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width:
            metrics.width -
            parentPadding -
            30 -
            (metrics.width - parentPadding - 30 - 10 - 44),
    },

    staticTextContainerStyle: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    staticTextStyle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    textContainerStyle: {
        flexDirection: 'row',
        marginLeft: 2,
        width: metrics.width - parentPadding - 30,
        borderColor: Constant.App.colors.greyBgAsk,
        borderWidth: 2,
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },

    textInputStyle: {
        padding: 5,
        width: metrics.width - parentPadding - 30 - 10 - 44,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    titleTextStyle: {
        paddingLeft: 5,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.headerBold,
    },
});
export default styles;
