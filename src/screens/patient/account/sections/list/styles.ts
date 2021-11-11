import { StyleSheet } from 'react-native';
import { text } from '~/utils/constants';

export default StyleSheet.create({
    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
    },
    listContainer: {
        flexDirection: 'row'
    },
    titleContainer: {
        flexDirection: 'column'
    },
    content: {
        fontSize: text.size.medium,
        lineHeight: 22,
        color: '#909297',
    },
    icon: {
        height: 44,
        width: 44,
        marginRight: 20
    }
});
