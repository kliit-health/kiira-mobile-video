import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { icons } from '~/utils/constants';
import { IconButton } from '~/components';
import styles from './styles';

const Header = ({ onClose }) => (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={icons.kiiraLogo}
            />
            <IconButton source={icons.cross} onPress={onClose} />
        </View>
    </SafeAreaView>
);

export default Header;
