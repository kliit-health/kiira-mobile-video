import { StyleSheet } from 'react-native';
import { text } from '../../utils/constants';

export default StyleSheet.create({
    root: {
        flexDirection: 'column',
    },
    button: {top:-10},
    chkButton: {marginLeft:15},
    text: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular, 
    },
});

export const modifiers = {
    horizontal: {
        root: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 3,
            marginHorizontal: 20,
        },
        button: {
            marginBottom: 0, 
        },
    },
    boxed: {
        button: {
            marginBottom: 10,
        },
        chkButton: {
            marginBottom: 0,
        },
    },
}; 