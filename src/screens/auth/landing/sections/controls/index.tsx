import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Button } from '~/components';
import { screenNames } from '~/utils/constants';
import { handleNavigation } from '~/utils/functions';
import styles from './styles';

const Controls = () => {
    const tutorial = useSelector((state: RootState) => state.language.tutorial);

    return (
        <View style={[styles.actions, { marginBottom: 10 }]}>
            <Button
                testID="Open Activate"
                title={tutorial.verify}
                style={{ container: styles.container, title: styles.text }}
                onPress={() => handleNavigation(screenNames.Activate)}
            />
            <Button
                testID="Open Login"
                title={tutorial.login}
                style={{ container: styles.container2, title: styles.text2 }}
                onPress={() => handleNavigation(screenNames.Login)}
            />
        </View>
    );
};
export default Controls;
