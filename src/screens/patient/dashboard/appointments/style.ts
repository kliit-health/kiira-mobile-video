import { StyleSheet } from 'react-native';
import { text, colors, dimensions } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const { size, fontFamily } = text;

const styles = StyleSheet.create({
    active: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginVertical: metrics.height * 0.03,
    },

    activeText: {
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.white,
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
        padding: dimensions.btnPaddingGlobal,
        width: '45%',
        backgroundColor: colors.white,
        marginTop: metrics.height * 0.01,
        borderColor: colors.greyAccent,
        borderWidth: 1,
        marginBottom: 20,
    },

    appointmentButtonText: {
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.azure,
    },

    appointmentModify: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingTop: 55,
    },

    disabled: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.greyAccent,
        marginTop: metrics.height * 0.03,
    },

    parentContainerStyle: {
        flex: 1,
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
        color: colors.primaryBlue,
        marginLeft: 10,
    },

    expertProfession: {
        marginVertical: 10,
    },

    expertProfessionTextStyle: {
        fontSize: size.regular,
        color: colors.greyDark,
        fontFamily: fontFamily.poppinsMedium,
        marginRight: 10,
    },

    expertNameTextStyle: {
        flex: 1,
        marginTop: metrics.height * 0.025,
        fontSize: size.xLarge,
        fontFamily: fontFamily.poppinsRegular,
    },

    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 'auto',
    },

    title: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '500',
        fontSize: size.xxxLarge,
        textAlign: 'center',
    },

    subtitle: {
        fontFamily: fontFamily.poppinsRegular,
        fontSize: size.regular,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default styles;
