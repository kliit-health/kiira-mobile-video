import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 800,
    },

    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 30,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        margin: 30,
    },
});

export default styles;
