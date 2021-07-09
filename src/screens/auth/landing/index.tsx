import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    StatusBar,
    View,
    ImageBackground,
    ScrollView,
    Dimensions,
    Platform,
    Linking,
} from 'react-native';
import {
    requestMultiple,
    checkMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import SplashScreen from 'react-native-smart-splash-screen';
import styles from './style';
import Constant from '~/utils/constants';
import CustomButton from '~/components/customButton';
import Carousel from '~/components/carousel';
import VersionCheck from 'react-native-version-check';

const largeDisplay = Dimensions.get('window').height > 800;

let banner = [
    {
        id: 1,
        image: largeDisplay
            ? Constant.App.staticImages.tutorialImageOneLarge
            : Constant.App.staticImages.tutorialImageOne,
    },
    {
        id: 2,
        image: largeDisplay
            ? Constant.App.staticImages.tutorialImageTwoLarge
            : Constant.App.staticImages.tutorialImageTwo,
    },
    {
        id: 3,
        image: largeDisplay
            ? Constant.App.staticImages.tutorialImageThreeLarge
            : Constant.App.staticImages.tutorialImageThree,
    },
    {
        id: 4,
        image: largeDisplay
            ? Constant.App.staticImages.tutorialImageFourLarge
            : Constant.App.staticImages.tutorialImageFour,
    },
];

const Landing = props => {
    const { navigation } = props;
    const lang = useSelector(state => state.language);

    useEffect(() => {
        if (Platform.OS === 'android') {
            checkMultiple([
                PERMISSIONS.ANDROID.CAMERA,
                PERMISSIONS.ANDROID.RECORD_AUDIO,
                PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ])
                .then(statuses => {
                    for (var key in statuses) {
                        if (statuses.hasOwnProperty(key)) {
                            switch (statuses[key]) {
                                case RESULTS.UNAVAILABLE:
                                    break;
                                case RESULTS.DENIED:
                                    requestMultiple([
                                        PERMISSIONS.ANDROID.CAMERA,
                                        PERMISSIONS.ANDROID.RECORD_AUDIO,
                                        PERMISSIONS.ANDROID
                                            .WRITE_EXTERNAL_STORAGE,
                                    ]).then(result => {});
                                    break;
                                case RESULTS.GRANTED:
                                    break;
                                case RESULTS.BLOCKED:
                                    break;
                            }
                        }
                    }
                })
                .catch(error => {
                    console.log('The permission error', error);
                });
        }
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 3000,
            delay: 500,
        });
    }, []);

    useEffect(() => {
        VersionCheck.needUpdate().then(async res => {
            if (res.isNeeded) {
                Linking.openURL(res.storeUrl); // open store if update is needed.
            }
        });
    }, []);

    const renderSliderView = () => {
        return (
            <View style={styles.sliderViewStyle}>
                <StatusBar hidden />
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={Dimensions.get('window').width}
                    activePageIndicatorStyle={{
                        backgroundColor: Constant.App.colors.blueColor,
                    }}
                >
                    {banner.map((item, key) => (
                        <View key={key}>
                            <ImageBackground
                                style={styles.bannerImageStyle}
                                resizeMethod={'auto'}
                                source={item.image}
                            />
                        </View>
                    ))}
                </Carousel>
            </View>
        );
    };

    const renderButtonView = () => {
        return (
            <View style={styles.buttonContainerStyle}>
                <CustomButton
                    text={lang.tutorial.verify}
                    textStyle={styles.verifyButtonTextStyle}
                    buttonStyle={styles.verifyButtonStyle}
                    onPress={() =>
                        navigation.navigate(Constant.App.screenNames.Verify)
                    }
                />
                <CustomButton
                    text={lang.tutorial.login}
                    textStyle={styles.loginButtonTextStyle}
                    buttonStyle={styles.loginButtonStyle}
                    onPress={() => {
                        navigation.navigate(Constant.App.screenNames.Login);
                    }}
                />
            </View>
        );
    };

    return (
        <View style={styles.containerStyle}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {renderSliderView()}
                {renderButtonView()}
            </ScrollView>
        </View>
    );
};

export default Landing;
