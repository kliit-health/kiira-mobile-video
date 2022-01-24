import { StyleSheet } from 'react-native'; 
import { text, colors } from '~/utils/constants'; 

export default StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: colors.white,
    },
    tabContainer: { 
        marginTop: 25,
        height: 40,
        backgroundColor: colors.white,
        borderBottomColor: colors.greyAccent,
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
    },
});

export const modifiers = {
    container: {
        root: {
            backgroundColor: colors.white,
        },
    },
    searchBar: {
        root: {
            backgroundColor:'#F6F7FA',
            marginHorizontal: 20,
            borderRadius:8,
        }, 
        textInput:{
            backgroundColor:'#F6F7FA',
            fontSize: text.size.regular,
            fontFamily: text.fontFamily.poppinsLight,
        }
    },
    button: {
        root: {
            marginHorizontal: 5,
        },
    },
};

