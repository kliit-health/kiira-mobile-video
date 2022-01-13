import { StyleSheet } from 'react-native';
import { text, colors } from '~/utils/constants';

export default StyleSheet.create({
    activate: {
        marginHorizontal:30, 
        paddingVertical: 12,
        color: colors.primaryBlue,
        backgroundColor: colors.white,
        width: '100%', 
        textAlign: 'center',
        borderRadius: 22,
        overflow: 'hidden',
    },

    kiiraHelp: { 

        marginHorizontal:30, 
        paddingVertical: 12,
         
        color: colors.primaryBlue,
        backgroundColor: colors.white,
        width: '100%', 
        textAlign: 'center',
        borderRadius: 22,
        overflow: 'hidden',
    },

    kiiraContainer: { 
        marginHorizontal:30,  
        marginVertical:10,
        alignItems: 'center', 
    },

    activateContainer: { 
        alignItems: 'center',
        marginVertical:10, 
        paddingHorizontal: 30,   
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },

    description: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.regular,
        padding: 20,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    },

    login: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        alignSelf: 'flex-end',
        paddingTop: 30,
        paddingRight: 20,
    },

    root: {
        flex: 1,
        height: '100%',
    },

    title: {
        color: colors.white,
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.xxxLarge,
        fontWeight: '400',
        paddingHorizontal: 30,
        marginBottom:20,
        marginTop:30, 
    },

    linearGradient: {
        height: 89,
    },
});
