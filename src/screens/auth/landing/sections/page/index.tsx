import React from 'react';
import { handleNavigation } from '~/utils/functions';
import {
    View,
    Text,
    ImageSourcePropType,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';

export type PageProps = {
    title: string;
    description: string;
    imageUrl: ImageSourcePropType;
    backgroundUrl: ImageSourcePropType;
};

const handlePress = (destination: string) => {
    handleNavigation(destination);
};

const Page = ({ title, description, imageUrl, backgroundUrl }: PageProps) => (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={imageUrl}
            >
                <TouchableOpacity onPress={() => handlePress('Login')}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={styles.container}>
            <ImageBackground
                source={backgroundUrl}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity
                    style={styles.activateContainer}
                    onPress={() => handlePress('Activate')}
                >
                    <Text style={styles.activate}>First Time Here?</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    </View>
);

export default Page;
