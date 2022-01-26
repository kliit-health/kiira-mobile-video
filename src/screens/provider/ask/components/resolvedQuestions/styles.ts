import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';

export default {
    list: StyleSheet.create({
        listContainer: {},
        mainContainer: {
            flex: 1,
            marginVertical: 5,
        },
    }),
    item: StyleSheet.create({
        card: { 
            backgroundColor: colors.white,
            borderRadius: 10,
            shadowColor: colors.black, 
            paddingHorizontal: 10, 
            paddingTop:10,
            paddingBottom:20,
            justifyContent: 'space-between', 
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10, 
            borderColor: colors.greyAccent
        },
        title: {
            fontSize: text.size.medium,
            color: colors.charcoal,
            padding: 0,
            margin: 0,
        },
        subtitle: {
            fontFamily: text.fontFamily.poppinsRegular,
            fontSize: text.size.medium,
            color: colors.black,
            margin: 0,
        },
        imageContainer: {
            justifyContent: 'center',
            alignItems: 'center', 
            marginLeft: -5,
            flexDirection:'row', 
        },
        outerContainer: {
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flex: 1,
            marginRight: 10, 
        },
        innerContainer: {
            marginTop: 5,
        },
        image: {
            justifyContent: 'center',
            marginLeft: 10,
            marginRight: 20,
            width: 40,
            height: 40,
            borderRadius:20
        },
        time:{ 
            fontFamily: text.fontFamily.poppinsRegular,
            fontSize: text.size.xSmall,
            fontWeight: '400',
            color: colors.greyDark, 
            backgroundColor: colors.white,
            marginTop:5,
        }
    }),
    fallBack: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontFamily: text.fontFamily.poppinsRegular,
            fontSize: text.size.regular,
            color: colors.charcoal,
            textAlign: 'center',
        },
    }),
};
