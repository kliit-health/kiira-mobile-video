import { StyleSheet } from 'react-native';
import Constant from '~/utils/constants';

const style = StyleSheet.create({
    category: {
        flexWrap: 'wrap',
        fontFamily: Constant.App.fontFamily.headerSemiBold,
    },

    value: {
        flexWrap: 'wrap',
        fontFamily: Constant.App.fontFamily.proximaNovaSemiBold,
        color: '#509AEC',
        marginBottom: 10,
    },

    plan: {
        // alignSelf: 'center',
        flexWrap: 'wrap',
        fontFamily: Constant.App.fontFamily.proximaNovaSemiBold,
        color: '#509AEC',
        marginBottom: 10,
    },

    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 42,
        marginVertical: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    pronounsContainer: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },

    title: {
        fontFamily: Constant.App.fontFamily.headerSemiBold,
        fontSize: Constant.App.textSize.xLarge,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginHorizontal: 8,
    },
});

export default style;
