import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';
import metrics, { smallScreen } from '~/utils/metrices'; 
import Constant from '~/utils/constants';

let parentPaddingValue = metrics.width * 0.01;
let parentPadding = parentPaddingValue * 2;

export default StyleSheet.create({
    container: {
        zIndex: 100,
        paddingHorizontal: '10%',
        paddingVertical: 20,
    },
    headerStyle:{
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,  
    },
    root: {
        backgroundColor: colors.white,
        borderRadius: 12,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 5,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.greyAccent, 
    },
    actionModalParentContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    actionModalInnerContainerStyle: {
        borderRadius: 10,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        width: metrics.width - 20,
        backgroundColor: Constant.App.colors.whiteColor,
    },
    actionModalOkBtnErrorContainerStyle: {
        width: metrics.width - 20,
        padding: 10,
        backgroundColor: Constant.App.colors.whiteColor,
        marginTop: 10,
        borderRadius: 10,
    },
    actionModalOkBtnErrorTextStyle: {
        color: Constant.App.colors.blueColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.headerBold,
    },
    actionModalTitleTextStyle: {
        width: metrics.width - 20,
        color: Constant.App.colors.lightGrey,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        padding: 12,
    },

    detailsContainer: {
        padding: 5,
        alignItems: 'center',
    },

    title: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xLarge,
    },

    icon: {
        marginRight: 5, 
        alignSelf:'center'
    },

    itemContainer: {
        flexDirection: 'row',
        paddingLeft: parentPaddingValue * 2,
        width: '45%',
        justifyContent: 'space-between',
        marginVertical: parentPaddingValue * 2,
        padding: 5, 
    },

    itemTitle: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        color: colors.black, 
        marginLeft: parentPaddingValue,
        width: metrics.width * 0.4
    },

    itemEmptyTitle: {
        fontFamily: text.fontFamily.poppinsLight,
        fontSize: text.size.regular,
        color: colors.greyDark, 
        marginLeft: parentPaddingValue,
        width: metrics.width * 0.4
    },

    itemValue: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
    },
});

export const modifiers = {
    avatar: {
        root: {
            marginTop: 10,
            alignSelf: 'center',
        },
    },
};
export const messageStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 30,
        maxWidth: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        paddingBottom: 30,
    },
    messageText: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        color: colors.black,
    },
});
