import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        margin: 30,
    },
    buttonText: {
        color: colors.blueGrey,
    },
    button: {
        margin: 30,
        marginTop: 'auto',
    },
    date: {
        alignSelf: 'center',
        paddingVertical: 10,
        fontSize: text.size.large,
        fontWeight: '600',
    },
    text: {
        fontSize: text.size.regular,
        marginBottom: 5,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
