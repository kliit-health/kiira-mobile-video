import React from 'react';
import { View, Linking, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Header, Container, TextButton } from '~/components';
import Image from 'react-native-fast-image';
import { screenNames } from '~/utils/constants';
import { icons } from '~/utils/constants';

import styles, { modifiers } from './styles';

const Help = ({ navigation }) => {
    const lang = useSelector((state: RootState) => state.language);

    const handleBack = () => {
        navigation.goBack();
    };

    const handleAsk = () => {
        Linking.openURL('mailto:hello@kiira.io?subject=Kiira Support');
        setTimeout(() => {
            navigation.navigate(screenNames.Help);
        }, 200);
    };

    return (
        <Container>
            <Header title={lang.help.title} onBack={handleBack} />
            <View>
                <Image
                    source={icons.logoHorizontal}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.question}>{lang.help.question}</Text>
            <TextButton styles={modifiers.button} onPress={handleAsk}>
                {lang.help.ask}
            </TextButton>
        </Container>
    );
};

export default Help;
