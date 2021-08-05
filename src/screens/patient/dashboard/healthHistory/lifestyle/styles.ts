import { StyleSheet } from 'react-native';
import { text } from '~/utils/constants';

export default StyleSheet.create({
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    gap: {
        width: 20,
    },
    question: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        marginBottom: 20,
    },
});
