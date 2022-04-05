import React from 'react';
import { handleNavigation } from '~/utils/functions';
import LinearGradient from 'react-native-linear-gradient'
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
                <LinearGradient
                    start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} 
                    colors={['rgba(0, 0, 0, 1.0)', 'rgba(0, 0, 0, 0.0)']}
                    style={styles.linearGradient}
                >
                    <TouchableOpacity onPress={() => handlePress('Login')}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </View> 
        <View style={styles.container}>
            <ImageBackground
                source={backgroundUrl}
                resizeMode="cover"
                style={styles.image}
            > 
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    style={styles.kiiraContainer}
                    onPress={() => handlePress('KiiraWelcome')}
                >
                    <Text style={styles.kiiraHelp}>{'What is Kiira?'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.activateContainer}
                    onPress={() => handlePress('Activate')}
                >
                    <Text style={styles.activate}>{'I am a new member'}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    </View>
);

export default Page;
