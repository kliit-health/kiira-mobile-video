import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

const styles = StyleSheet.create({
    version: {
        marginTop: 10,
        alignSelf: 'center',
    },
});

export default styles;

export const modifiers = {
    container: {
        safeAreaBottom: {
            height: 0,
        },
        root: {
            backgroundColor: colors.offWhite,
        },
    },
    button: {
        text: {
            color: colors.primaryBlue,
            fontSize: text.size.large,
        },
    },
};
