import { Dimensions, Platform, StatusBar } from 'react-native';
import {
    getStatusBarHeight,
    getBottomSpace,
} from '../../components/iPhoneXHelper';

export const IS_ANDROID = Platform.OS === 'android';

const { height, width } = Dimensions.get('window');

export default {
    height: IS_ANDROID
        ? height - StatusBar.currentHeight
        : height - getStatusBarHeight(null),
    width: width,
    BOTTOM_SAVE_AREA: getBottomSpace(),
};

export const smallScreen = width <= 400 && height <= 667;
