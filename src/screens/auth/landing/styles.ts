import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '~/utils/constants';

export default StyleSheet.create({
    root: {
        backgroundColor: colors.white,
        alignItems: 'center',
        flex: 1,
    },
});

export const indicatorStyles = StyleSheet.create({
    indicatorContainer: {
        bottom: Dimensions.get('screen').height / 2.75,
    },
});
