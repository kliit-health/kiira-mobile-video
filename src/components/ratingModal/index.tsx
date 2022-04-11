import React, { useState, useEffect } from 'react';
import { AirbnbRating as Rating } from 'react-native-elements';
import { shape, object, string, func, bool, number, oneOf } from 'prop-types';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import TextButton from '../textButton';
import Avatar from '../avatar';
import defaultStyles, { modifiers } from './styles';

const RatingModal = ({
    styles: customStyles,
    visible,
    onRequestClose,
    onSubmit,
    startingValue,
    defaultRating,
    avatarUrl,
    avatarSize,
    starSize,
    title,
    description,
}) => {
    const [isVisible, setVisible] = useState(false);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setVisible(visible);
    }, [visible]);

    const handleRatingChange = value => {
        setRating(value);
    };

    const handleRatingSubmit = () => {
        if (onSubmit) {
            onSubmit(rating);
        }
        setVisible(false);
    };

    const styles = {
        root: [defaultStyles.root, customStyles.root],
        ratingStar: [defaultStyles.ratingStar, customStyles.ratingStar],
        title: [defaultStyles.title, customStyles.title],
        description: [defaultStyles.description, customStyles.description],
        submitButton: modifiers.submitButton,
    };

    return (
        <Modal
            isVisible={isVisible}
            onDismiss={onRequestClose}
            useNativeDriver={true}
            backdropOpacity={0.1}
            animationIn="fadeIn"
            animationOut="fadeOut"
        >
            <View style={styles.root}>
                <Text style={styles.title}>{title}</Text>
                <Avatar
                    styles={modifiers.avatar}
                    source={avatarUrl}
                    size={avatarSize}
                    border
                />
                <Text style={styles.description}>{description}</Text>
                <Rating
                    size={starSize}
                    showRating={false}
                    starStyle={customStyles.ratingStar}
                    defaultRating={defaultRating}
                    onFinishRating={handleRatingChange}
                />
                <TextButton
                    styles={styles.submitButton}
                    disabled={rating === 0}
                    onPress={handleRatingSubmit}
                >
                    Rate
                </TextButton>
            </View>
        </Modal>
    );
};

RatingModal.propTypes = {
    styles: shape({
        root: object,
        ratingStar: object,
        title: object,
        description: object,
        submitButton: object,
    }),
    visible: bool,
    onRequestClose: func,
    defaultRating: number,
    starSize: number,
    avatarUrl: string,
    startingValue: number,
    avatarSize: oneOf(['small', 'medium', 'large']),
    title: string,
    description: string,
};

RatingModal.defaultProps = {
    styles: {},
    visible: true,
    onRequestClose: () => {},
    defaultRating: 0,
    starSize: 35,
    avatarUrl: undefined,
    startingValue: 0,
    avatarSize: 'large',
    title: undefined,
    description: undefined,
};

RatingModal.displayName = 'RatingModal';

export default RatingModal;
