import React, { useEffect } from 'react';
import { View, Platform, Linking, StatusBar } from 'react-native';
import {
    requestMultiple,
    checkMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import SplashScreen from 'react-native-smart-splash-screen';
import VersionCheck from 'react-native-version-check';
import { Carousel, PageIndicator } from '~/components';
import { Page } from './sections';
import styles, { indicatorStyles } from './styles';
import { pages } from './model';

const Landing = () => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            checkMultiple([
                PERMISSIONS.ANDROID.CAMERA,
                PERMISSIONS.ANDROID.RECORD_AUDIO,
                PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ])
                .then(status => {
                    for (var key in status) {
                        if (status.hasOwnProperty(key)) {
                            switch (status[key]) {
                                case RESULTS.UNAVAILABLE:
                                    break;
                                case RESULTS.DENIED:
                                    requestMultiple([
                                        PERMISSIONS.ANDROID.CAMERA,
                                        PERMISSIONS.ANDROID.RECORD_AUDIO,
                                        PERMISSIONS.ANDROID
                                            .WRITE_EXTERNAL_STORAGE,
                                    ]);
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
                Linking.openURL(res.storeUrl);
            }
        });
    }, []);

    return (
        <View testID="Landing" style={[styles.root]}>
            <StatusBar hidden />
            <Carousel
                pageIndicator={props => (
                    <PageIndicator styles={indicatorStyles} {...props} />
                )}
            >
                {pages.map(props => (
                    <Page key={props.title} {...props} />
                ))}
            </Carousel>
        </View>
    );
};

export default Landing;
