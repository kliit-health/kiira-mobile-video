import { StyleSheet } from 'react-native';
import { text, colors } from '../../utils/constants';

export default StyleSheet.create({
    modalDatePickerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.white,
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
    },
    cancelDatePicketButtonTextStyle: {
        color: colors.white,
        textAlign: 'center',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
    },
    cancelDatePicketButtonStyle: {
        backgroundColor: colors.primaryBlue,
        borderRadius: 5,
        padding: 5,
    },
    dateTextStyle: {
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        alignSelf: 'center',
    },
});
