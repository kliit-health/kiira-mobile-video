import { StyleSheet } from 'react-native';
import Constant from '~/utils/constants';
import metrices from '~/utils/metrices';

let parentPaddingValue = metrices.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrices.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.App.colors.whiteColor,
    },

    input: {
        borderColor: Constant.App.colors.blueColor,
        borderWidth: 5,
        width: metrices.width * 0.8,
        alignSelf: 'center',
        marginTop: 50,
        height: 400,
        color: 'black',
        padding: 10,
        textAlignVertical: 'top',
    },

    submitButtonStyle: {
        alignSelf: 'center',
        borderRadius: Constant.App.dimensions.btnBorderRadiusGlobal,
        padding: Constant.App.dimensions.btnPaddingGlobal,
        width: metrices.width - childPadding,
        backgroundColor: Constant.App.colors.blueColor,
        marginTop: metrices.height * 0.03,
    },

    submitButtonTextStyle: {
        textAlign: 'center',
        fontSize: Constant.App.textSize.Normal,
        fontFamily: Constant.App.fontFamily.bodyRegular,
        color: Constant.App.colors.whiteColor,
    },

    question: {
        alignSelf: 'center',
        paddingVertical: 40,
        fontSize: Constant.App.textSize.xLarge,
    },
});

export default styles;
