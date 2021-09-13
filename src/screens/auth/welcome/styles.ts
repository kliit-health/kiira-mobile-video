import { StyleSheet } from 'react-native';
import metrics from '~/utils/metrices';
import { text, colors } from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const style = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        width: metrics.width - childPadding,
        backgroundColor: colors.blue,
        marginTop: metrics.height * 0.03,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.white,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.offWhite,
    },

    image: {
        height: 400,
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoStyle: {
        alignSelf: 'center',
        height: metrics.width * 0.15,
        width: metrics.width * 0.32,
        marginTop: 30,
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: text.fontFamily.poppinsBold,
        margin: 30,
    },
});

export default style;
