import React, { useState } from 'react';
import { ScrollView, View, Text, StatusBar, Modal } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AirbnbRating, Rating } from 'react-native-elements';
import CustomButton from '~/components/customButton';
import Constant from '~/utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { rateVisit } from '../../../appointments/action';

import styles from './styles';

const { staticImages } = Constant.App;

const VideoRating = ({ navigation }) => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(5);
    const [modalVisible, setModalVisible] = useState(false);
    const { visit } = useSelector(state => state.visit);

    const handleRatingChange = value => {
        setRating(value);
    };

    return (
        <ScrollView>
            <StatusBar barStyle="light-content" translucent={true} />
            <View style={styles.heading}>
                <Text style={styles.headingText}>Rate your consultation</Text>
            </View>
            <View style={styles.ratingContainer}>
                <View style={styles.expertImageContainer}>
                    <FastImage
                        style={styles.expertImage}
                        defaultSource={staticImages.profilePlaceholderImg}
                        source={{ uri: visit.expert.imageUrl }}
                        activeOpacity={0.7}
                    />
                </View>
                <Text
                    style={styles.expertText}
                >{`${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
                <AirbnbRating
                    size={35}
                    readonly={false}
                    startingValue={5}
                    showRating={false}
                    starStyle={styles.ratingStar}
                    defaultRating={5}
                    onFinishRating={handleRatingChange}
                />
                <CustomButton
                    buttonStyle={styles.yesContainerStyle}
                    textStyle={styles.yesTextStyle}
                    onPress={() => setModalVisible(!modalVisible)}
                    text="Continue"
                />
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalImageContainer}>
                                <FastImage
                                    style={styles.modalImage}
                                    defaultSource={
                                        staticImages.profilePlaceholderImg
                                    }
                                    source={{ uri: visit.expert.imageUrl }}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View style={styles.modalRatingStarContainer}>
                                <Rating
                                    size={35}
                                    readonly
                                    startingValue={rating}
                                    showRating={false}
                                    starStyle={styles.ratingStar}
                                />
                            </View>
                            <Text style={styles.expertText}>
                                Thank you for rating this experience.
                            </Text>
                            <CustomButton
                                buttonStyle={styles.yesContainerStyle}
                                textStyle={styles.yesTextStyle}
                                onPress={() =>
                                    dispatch(
                                        rateVisit({
                                            visit,
                                            rating,
                                            navigation,
                                        }),
                                    )
                                }
                                text="Back to home"
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default VideoRating;
