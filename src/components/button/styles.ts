import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';

const styles = StyleSheet.create({
    text: {
        color: colors.blue,
        textAlign: "center",
        fontSize: text.size.xLarge
    },
    button: {
        backgroundColor: colors.white,
        margin: 20,
        padding: 15,
        borderRadius: 30
    }
})

export default styles;
