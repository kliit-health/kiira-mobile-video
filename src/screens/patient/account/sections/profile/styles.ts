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
