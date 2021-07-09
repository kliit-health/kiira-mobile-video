import {StyleSheet} from 'react-native';
import {text, colors} from '~/utils/constants';
import { smallScreen } from '~/utils/metrices';

const styles = StyleSheet.create({
    text: {
        color: colors.blue,
        textAlign: "center",
        fontSize: smallScreen ? 17 : text.size.xLarge
    },
    button: {
        backgroundColor: colors.white,
        marginVertical: smallScreen ? 10 : 20,
        marginHorizontal: 20,
        padding: smallScreen ? 10 : 15,
        borderRadius: 30
    }
})

export default styles;
