import { StyleSheet, Platform, StatusBarIOS, StatusBar } from 'react-native';
import { colors, text } from '~/utils/constants';
import metrices from '~/utils/metrices';

let parentPaddingValue = metrices.width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
    btnContainerStyle: {
        marginTop: metrices.height * 0.03,
        marginBottom: metrices.height * 0.02,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
        borderTopColor: colors.lightGrey,
        borderTopWidth: 0.5,
        padding: 10,
        backgroundColor: colors.white,
        width: metrices.width,
    },

    btnTextStyle: {
        textAlign: 'center',
        color: colors.primaryBlue,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsRegular,
    },

    changeProfileTextStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        textAlign: 'center',
        color: colors.primaryBlue,
        fontSize: text.size.medium,
        fontFamily: text.fontFamily.poppinsRegular,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingTop: '9%',
    },
    headerStyle: {
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
        textAlign: 'center',
    },

    inputTextParentContainerStyle: {
        backgroundColor: colors.white,
        flexDirection: 'column',
        marginTop: '6%',
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
    },
    textStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsMedium,
        backgroundColor: colors.white,
        paddingLeft: '3%',
    },
    logoutTextStyle: {
        color: '#C3224F',
        textAlign: 'center',
        marginTop: '10%',
        fontSize: text.size.large,
        fontFamily: text.fontFamily.poppinsMedium,
        backgroundColor: colors.white,
    },
    logoutView: {
        backgroundColor: colors.white,
        height: '50%',
        width: '100%',
        alignContent: 'center',
        marginTop: metrices.height * 0.02,
    },
    textEmptyStyle: {
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '300',
        color: colors.greyDark,
    },

    phoneInputEmptyTypeStyle: {
        color: colors.black,
        width: '100%',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: metrices.height * 0.02,
        paddingTop: metrices.height * 0.01,
        paddingBottom: metrices.height * 0.01,
    },
    emailInputEmptyTypeStyle: {
        color: colors.black,
        width: '100%',
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: metrices.height * 0.02,
        paddingTop: metrices.height * 0.01,
        paddingBottom: metrices.height * 0.01,
    },
    listContainer: {
        flexDirection: 'row',
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        lineHeight: 22,
        color: colors.black,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsMedium,
        backgroundColor: colors.white,
    },
    version: {
        marginLeft: '62%',
        color: colors.greyDark,
        lineHeight: 22,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        backgroundColor: colors.white,
    },
    versionListContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
    },
    borderStyle: {
        borderColor: colors.greyAccent,
        borderTopWidth: 1,
    },

    inputTextPhoneContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: metrices.width - parentPadding,
        backgroundColor: colors.white,
        paddingVertical: '1%',
    },

    inputTextEmailContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: metrices.width,
        paddingVertical: '1%',
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
    },

    textContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemView: {
        marginTop: '6%',
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
    },

    phoneChecboxIconStyle: {
        height: metrices.width * 0.08,
        width: metrices.width * 0.08,
    },
});

export default styles;
