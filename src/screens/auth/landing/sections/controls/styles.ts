import { StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

export default StyleSheet.create({
    actions: {
        marginTop: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    container: {
        margin: 10,
        padding: 5,
        width: '45%',
    },

    text: {
        fontSize: 14,
    },

    container2: {
        margin: 10,
        padding: 5,
        width: '45%',
        backgroundColor: colors.white,
        borderColor: colors.primaryBlue,
        borderWidth: 1,
    },

    text2: {
        fontSize: 14,
        color: colors.primaryBlue,
    },
});
