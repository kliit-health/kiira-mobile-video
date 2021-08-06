import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default {
    card: StyleSheet.create({
        container: {
            backgroundColor: colors.white,
            borderRadius: 10,
            padding: 20,
            maxWidth: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            position: 'relative',
            width: '100%',
        },
        text: {
            fontFamily: text.fontFamily.poppinsRegular,
            fontSize: text.size.large,
            color: colors.black,
            textAlign: 'auto',
        },
    }),
    modal: StyleSheet.create({
        root: {
            backgroundColor: 'transparent',
            top: 0,
            bottom: 0,
            margin: 'auto',
            left: 0,
            right: 0,
        },
    }),
};
