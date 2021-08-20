import { StyleSheet } from 'react-native';
import Constant, { text, colors } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
    active: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: Constant.App.colors.blueColor,
        marginTop: metrics.height * 0.03,
    },

    activeText: {
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        color: Constant.App.colors.whiteColor,
    },

    appointment: {
        alignSelf: 'center',
        backgroundColor: colors.blueGrey,
        padding: 10,
        overflow: 'hidden',
        width: '100%',
    },
    appointmentButtonContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: '45%',
        backgroundColor: Constant.App.colors.whiteColor,
        marginTop: metrics.height * 0.01,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        marginBottom: 20,
    },

    appointmentButtonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.azure,
    },

    appointmentContainer: {
        alignSelf: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
        paddingBottom: 30,
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: colors.blueGrey,
        borderWidth: 1,
    },

    appointmentDate: {
        color: 'white',
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xxLarge,
        textAlign: 'center',
    },

    appointmentModify: {
        width: '80%',
        flexDirection: 'row',
        marginLeft: 20,
        justifyContent: 'space-between',
    },

    cancelTextStyle: {
        textAlign: 'left',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Medium,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.whiteColor,
        paddingTop: 35,
    },

    creditButtonStyle: {
        marginLeft: -9,
        marginTop: 14,
        width: metrics.width * 0.49,
        height: 44,
        borderRadius: 22,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    creditButtonTextStyle: {
        textAlign: 'center',
        paddingTop: 11,
        fontFamily: Constant.App.fontFamily.avenirMedium,
        fontSize: Constant.App.textSize.Normal,
        color: Constant.App.colors.blueColor,
    },

    creditTextStyle: {
        textAlign: 'left',
        paddingTop: 10,
        color: Constant.App.colors.whiteColor,
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerMedium,
        fontWeight: '500',
    },

    disabled: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.lightGrey,
        marginTop: metrics.height * 0.03,
    },

    genderTextStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: Constant.App.colors.whiteColor,
        fontSize: Constant.App.textSize.xLarge,
        fontFamily: Constant.App.fontFamily.headerLight,
        fontWeight: '400',
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: parentPaddingValue * 0.5,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    itemsParentContainerStyle: {
        backgroundColor: Constant.App.colors.whiteColor,
        flexDirection: 'row',
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: parentPaddingValue * 0.5,
        paddingBottom: parentPaddingValue * 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1.5,
    },

    itemTextStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    logoutParentContainerStyle: {
        marginTop: metrics.width * 0.1,
        marginBottom: metrics.width * 0.1,
    },

    logoutTextStyle: {
        textAlign: 'center',
        paddingTop: 10,
        color: Constant.App.colors.redColorLogout,
        fontSize: Constant.App.textSize.xLarge,
        width: metrics.width,
        fontFamily: Constant.App.fontFamily.bodyRegular,
    },

    nameTextStyle: {
        textAlign: 'left',
        color: Constant.App.colors.whiteColor,
        fontSize: Constant.App.textSize.xxLarge,
        fontFamily: Constant.App.fontFamily.headerSemiBold,
    },

    myRecentExpertContainerStyle: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    parentContainerStyle: {
        flex: 1,
    },

    profileImageParentContainerStyle: {
        flexDirection: 'column',
    },

    profileInfoParentContainerStyle: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: metrics.width - AVATAR_SIZE - parentPadding,
    },

    titleTextStyle: {
        textAlign: 'left',
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.Large,
        fontFamily: Constant.App.fontFamily.headerBold,
    },

    expertContainer: {
        flexDirection: smallScreen ? 'column' : 'row',
    },

    expertImage: {
        width: 68,
        height: 68,
        padding: 2,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
    },

    expertImageContainer: {
        flexDirection: 'row',
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        zIndex: 1,
    },

    expertName: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },

    expertPrescriberImage: {
        width: 20,
        height: 20,
    },

    expertPrescriberTextStyle: {
        color: Constant.App.colors.blueColor,
        marginLeft: 10,
    },

    expertProfession: {
        marginVertical: 10,
    },

    expertProfessionTextStyle: {
        fontSize: text.size.regular,
        color: Constant.App.colors.blueGrey,
        fontFamily: text.fontFamily.poppinsMedium,
        marginRight: 10,
    },

    expertNameTextStyle: {
        flex: 1,
        marginTop: metrics.height * 0.025,
        fontSize: text.size.xLarge,
        fontFamily: text.fontFamily.poppinsRegular,
    },

    expertRatingImage: {
        width: 20,
        height: 20,
        padding: 5,
    },

    expertRatingTextStyle: {
        fontSize: Constant.App.textSize.Large,
        color: Constant.App.colors.blueGrey,
    },

    expertDetailsCard: {
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 13, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 10, //IOS
        elevation: 2, // Android
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '500',
        fontSize: text.size.xxxxLarge,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 20,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default styles;

export const modifiers = {
    button: {
        root: {
            marginTop: 'auto',
        },
    },
};
