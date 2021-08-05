import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import navigationService from '~/navigation/navigationService';
import { TextButton } from '~/components';
import Constant from '~/utils/constants';
import styles, { buttonStyles } from './styles';

const Controls = () => {
    const insets = useSafeAreaInsets();
    const lang = useSelector(state => state.language);

    const handleNavigation = (route: string) => {
        navigationService.navigate(route);
    };

    return (
        <View
            style={[
                styles.actions,
                { marginBottom: insets.bottom > 0 ? 10 : 10 },
            ]}
        >
            <TextButton
                styles={buttonStyles}
                onPress={() =>
                    handleNavigation(Constant.App.screenNames.Verify)
                }
            >
                {lang.tutorial.verify}
            </TextButton>
            <TextButton
                styles={buttonStyles}
                onPress={() => handleNavigation(Constant.App.screenNames.Login)}
                outlined
            >
                {lang.tutorial.login}
            </TextButton>
        </View>
    );
};
export default Controls;
