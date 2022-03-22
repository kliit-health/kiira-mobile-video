import { StyleSheet } from 'react-native';
import { colors, text } from '~/utils/constants';
import Constant from '~/utils/constants';
import metrics from '~/utils/metrices';

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
            padding: 10,
            paddingLeft: 12,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 5,
            borderBottomColor: Constant.App.colors.greyBgAsk,
            borderBottomWidth: 2,
            width: metrics.width - 20,
        },
        message: {
            fontSize: text.size.medium,
            color: colors.charcoal,
            padding: 0,
            margin: 0,
        },
        subtitle: {
            fontFamily: text.fontFamily.poppinsBold,
            fontSize: text.size.large,
            color: colors.black,
            margin: 0,
        },
        time:{
            fontSize: text.size.medium,
            color: colors.charcoal, 
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
    }),
    fallBack: StyleSheet.create({
        container: {
            marginTop:'30%',
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
