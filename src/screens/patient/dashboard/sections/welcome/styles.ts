import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: text.size.xxxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.black,
    },
});
