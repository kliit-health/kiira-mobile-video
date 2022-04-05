import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    indicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 7.5,
        backgroundColor: '#fff',
    },
    activeIndicator: {  
        width: 16, 
        position: 'absolute',
        backgroundColor: '#fff',
    },
    indicatorContainer: {  
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        bottom: 20,
    },
});
