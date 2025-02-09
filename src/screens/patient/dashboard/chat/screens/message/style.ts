import { StyleSheet } from 'react-native';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.05;
let parentPadding = parentPaddingValue * 2;
const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.offWhiteColor,
    },
    headerStyle: {
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
    profileHeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTextStyle: {
        paddingLeft: 5,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.headerBold,
    },
    rowRightParentContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    rowRightContainerView: {
        backgroundColor: Constant.App.colors.chatHighLightedBgColor,
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 5,
        padding: 5,
    },
    messagesRightTextStyle: {
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 10,
    },
    rowLeftParentContainerStyle: {
        flexDirection: 'row',
        marginRight: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    rowLeftContainerStyle: {
        backgroundColor: Constant.App.colors.greyBgAsk,
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: 5,
        padding: 5,
    },
    messagesLeftTextStyle: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 10,
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
    chatInputParentContainer: {
        flexDirection: 'column',
        width: metrics.width,
        padding: parentPaddingValue,
        backgroundColor: Constant.App.colors.whiteColor,
        borderTopWidth: 1,
        borderTopColor: Constant.App.colors.greyBgAsk,
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
    imageContainerStyle: {
        marginTop: 16,
    },
    imageCrossContainerStyle: {
        right: 0,
        marginTop: 20,
        position: 'absolute',
    },
    imageCrossStyle: {
        width: 20,
        height: 20,
    },
    chatInputContainer: {
        flexDirection: 'row',
        width: metrics.width,
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
    textInputStyle: {
        padding: 5,
        width: metrics.width - parentPadding - 30 - 10 - 44,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },
    cameraContainerStyle: {
        alignSelf: 'center',
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

    //Action Modal Styles
    actionModalParentContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    actionModalTitleTextStyle: {
        width: metrics.width - 20,
        color: Constant.App.colors.lightGrey,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 12,
    },
    actionModalLineSeperator: {
        backgroundColor: Constant.App.colors.greyBgAsk,
        width: metrics.width - 20,
        height: 1,
    },
    actionModalBlueTextStyle: {
        width: metrics.width - 20,
        color: Constant.App.colors.blueColor,
        textAlign: 'center',
        padding: 12,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
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
});
export default styles;
