import { StyleSheet } from 'react-native';
import metrics, { smallScreen } from '~/utils/metrices';
import { colors, text, dimensions } from '~/utils/constants';

const { size, fontFamily } = text;

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'center',
        borderRadius: dimensions.btnBorderRadiusGlobal,
        padding: dimensions.btnPaddingGlobal,
        width: metrics.width - childPadding,
        backgroundColor: colors.primaryBlue,
        marginTop: metrics.height * 0.03,
        zIndex: 10,
    },

    buttonTextStyle: {
        textAlign: 'center',
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.white,
    },

    heading: {
        backgroundColor: colors.white,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headingText: {
        fontSize: size.large,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.white,
        fontWeight: '700',
    },

    expertImage: {
        width: smallScreen ? 90 : 120,
        height: smallScreen ? 90 : 120,
        borderRadius: 60,
        marginTop: -60,
    },

    expertImageContainer: {
        alignItems: 'center',
    },

    expertText: {
        fontSize: size.large,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black,
        marginVertical: 50,
        alignSelf: 'center',
    },

    modalImage: {
        width: smallScreen ? 90 : 120,
        height: smallScreen ? 90 : 120,
        borderRadius: 60,
    },

    modalImageContainer: {
        alignItems: 'center',
    },

    ratingContainer: {
        borderColor: colors.white,
        borderTopWidth: 30,
        backgroundColor: colors.babyBlue,
        height: metrics.height,
    },

    ratingStar: {
        marginTop: 20,
        marginBottom: 40,
    },

    modalRatingStarContainer: {
        marginVertical: 40,
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
        zIndex: 5,
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
