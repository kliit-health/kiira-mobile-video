import { StyleSheet } from 'react-native';
import Constant from '../../utils/constants';
import metrices from '../../utils/metrices';
import { text, colors } from '~/utils/constants';
const { size, fontFamily } = text;

export default StyleSheet.create({
    innerContainerStyle: {
        borderRadius: 10,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    okBtnErrorContainerStyle: {
        width: metrices.width - 100,
        padding: 10,
        backgroundColor: Constant.App.colors.blueColor,
        marginTop: 15,
        borderRadius: 10,
    },

    okBtnMemberContainerStyle: {
        width: metrices.width - 100,
        padding: 10,
        backgroundColor: '#0253E2',
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 16,
    },

    okBtnErrorTextStyle: {
        color: Constant.App.colors.whiteColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
    }, 

    okBtnMemberTextStyle: {
        color: Constant.App.colors.whiteColor,
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
    },

    parentContainerStyle: {
        flex: 1,
        backgroundColor: Constant.App.colors.modalBgSemiTransparentColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle: {
        width: metrices.width - 80,
        color: Constant.App.colors.blackColor,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: Constant.App.textSize.Large,
    },

    textMemberStyle: {
        marginTop:10,
        marginBottom:20,
        width: metrices.width - 80,
        color: Constant.App.colors.blackColor,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 22,
        fontFamily: fontFamily.poppinsRegular,
    },

    supportStyle: {
        width: metrices.width - 80,
        color: '#0253E2',
        paddingLeft: 25,
        paddingRight: 25,
        textAlign:'center', 
        fontSize: Constant.App.textSize.Normal,
        marginVertical: 10,
    },

    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
     },

    xCloseButton: {
        position: "absolute",
        top:30,
        right:42
    },
});
