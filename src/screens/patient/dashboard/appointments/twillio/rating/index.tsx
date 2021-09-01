import React, { useState } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Rating } from 'react-native-elements';
import { CustomButton, Text, Input, Conditional } from '~/components/';
import Constant, { colors } from '~/utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { rateVisit } from '~/redux/reducers/appointments';
import { handleNavigation } from '~/utils/functions';
import { default as globalStyles } from '~/components/styles';

import styles from './styles';

const { staticImages } = Constant.App;

const { black, pad_h, xxLarge, large, pad_v, center, grey_br, radius_md } =
    globalStyles;

const VideoRating = () => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [hasRated, setHasRated] = useState(false);
    const { visit } = useSelector((state: RootState) => state.appointments);

    const handleRatingChange = value => {
        setHasRated(!hasRated);
        setRating(value);
    };

    return (
        <ScrollView>
            <StatusBar barStyle="light-content" translucent />
            <View style={styles.heading}>
                <Text options={[black, pad_h, xxLarge]}>
                    We hope you had a great visit! Please rate your visit
                </Text>
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
                    options={[black, large, pad_v, center]}
                >{`${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
                <Rating
                    type="custom"
                    ratingCount={5}
                    ratingColor="#00C0E2"
                    ratingBackgroundColor={colors.greyAccent}
                    imageSize={45}
                    onFinishRating={handleRatingChange}
                    style={styles.ratingStar}
                    tintColor={colors.babyBlue}
                    startingValue={0}
                />
                <Input
                    editable
                    multiline
                    value={review}
                    onChangeText={setReview}
                    placeholder="Tell us about your experience"
                    options={[grey_br, radius_md, pad_v]}
                />
                <Conditional if={review.length || hasRated}>
                    <CustomButton
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={() =>
                            dispatch(rateVisit({ rating, review, visit }))
                        }
                        text="Submit"
                    />
                </Conditional>
                <Conditional if={!hasRated}>
                    <CustomButton
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={() => handleNavigation('Home')}
                        text="Skip"
                    />
                </Conditional>
            </View>
        </ScrollView>
    );
};

export default VideoRating;
