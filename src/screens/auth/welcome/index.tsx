import React from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Constant from '~/utils/constants';
import styles from './styles';
import CustomButton from '~/components/customButton';

const Welcome = ({ navigation }) => {
    const { staticImages, screenNames } = Constant.App;

    const user = useSelector(state => state.user.data);

    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                source={staticImages.logoHorizontal}
                style={styles.logoStyle}
            />
            <View>
                <Text style={styles.title}>
                    {`Welcome ${user.displayName}! \n Let's Set up your profile.`}
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={staticImages.penguin_b}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <CustomButton
                    buttonStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    onPress={() => {
                        navigation.navigate(screenNames.ChatBot);
                    }}
                    text="Get Started"
                />
            </View>
        </View>
    );
};

export default withNavigation(Welcome);
