import { StyleSheet } from 'react-native';
import { colors, text } from '../../../utils/constants';

export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    image: {
        resizeMode: 'contain',
        height: 22,
        width: 22,
    },
    text: {
        fontFamily: text.fontFamily.poppinsRegular,
        color: colors.purple,
        fontSize: text.size.medium,
        marginLeft: 5,
    },
});
