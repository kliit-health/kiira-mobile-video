import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    animated: {
        flexDirection: 'row',
    },
    indicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 5,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    activeIndicator: {
        position: 'absolute',
        backgroundColor: '#fff',
    },
    indicatorContainer: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        bottom: 10,
    },
});
