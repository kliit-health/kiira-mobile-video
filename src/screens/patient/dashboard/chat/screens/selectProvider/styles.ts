import { StyleSheet, Platform } from 'react-native';
import metrics from '~/utils/metrices';
import { colors, text } from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;

let parentPaddingValueFilterModal = metrics.width * 0.05;
let parentPaddingFilterModal = parentPaddingValueFilterModal * 2;

const styles = StyleSheet.create({
    checkboxIcon: {
        height: metrics.width * 0.05,
        width: metrics.width * 0.05,
    },

    container: {
        backgroundColor: colors.white,
    },

    expertInfo: {
        marginLeft: 10,
        width: metrics.width - parentPadding - 105,
        flexDirection: 'column',
    },

    expertInfoContainer: {
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: metrics.width * 0.03,
        paddingBottom: metrics.width * 0.03,
        flexDirection: 'row',
        width: metrics.width,
        backgroundColor: colors.white,
        marginVertical: 10,
        height: 130,
        alignItems: 'center',
    },
    heartIconView: {
        borderColor: colors.greyAccent,
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        width: 40,
        justifyContent: 'center',
        height: 40,
    },

    heartIcon: {
        alignSelf: 'center',
    },

    chatIcon: {
        alignItems: 'center',
        marginTop: '30%',
    },

    expertInfoProfession: {
        marginTop: 2,
        width: metrics.width - parentPadding - 105,
        color: colors.black,
        fontSize: text.size.small,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '200',
    },

    expertNameTextBoldStyle: {
        width: metrics.width - parentPadding - 105,
        color: colors.black,
        fontSize: text.size.large,
        fontWeight: '500',
        fontFamily: text.fontFamily.proximaNovaSemiBold,
    },

    expertProfessionLoctionBoldStyle: {
        marginTop: 2,
        width: metrics.width - parentPadding - 105,
        color: colors.gray,
        fontSize: text.size.small,
        fontWeight: '200',
        fontFamily: text.fontFamily.poppinsRegular,
    },

    expertProfile: {
        height: 70,
        width: 70, 
        paddingRight: 10, 
        borderRadius:100,
        borderColor:colors.purple,
        overflow: 'hidden',
    },
    imageView: {
        borderWidth: 2,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: colors.blue,
    },

    expertsContainer: {
        width: metrics.width,
    },
    conterStyle :{
        paddingBottom: 140
    },
    filterIconStyle: {
        width: 35,
        height: 35,
    },

    genderContainer: {
        margin: parentPaddingValueFilterModal,
        justifyContent: 'flex-start',
        flex: 0,
    },

    genderTitle: {
        color: colors.black,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.proximaNovaSemiBold,
        fontWeight: '300',
    },

    itemContainer: {
        marginTop: metrics.height * 0.02,
        width: metrics.width - parentPaddingFilterModal,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },

    itemText: {
        paddingLeft: 10,
        color: colors.gray,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'left',
        width: metrics.width - parentPaddingFilterModal - metrics.width * 0.05,
    },

    langContainer: {
        margin: parentPaddingValueFilterModal,
        justifyContent: 'flex-start',
        flex: 0,
    },

    langTitle: {
        color: colors.black,
        fontSize: text.size.large,
        fontFamily: text.fontFamily.proximaNovaSemiBold,
        fontWeight: '300',
    },

    onlineStatus: {
        left: 35,
        width: 16,
        height: 16,
        top: 25,
        borderRadius: 8,
        backgroundColor: colors.green,
        position: 'absolute',
    },

    parentContainerStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
        backgroundColor: colors.blueLight,
    },

    searchButton: {
        width: '80%',
        alignSelf: 'center',
    },

    searchButtonDisabled: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: colors.greyAccent,
    },
});

export default styles;
