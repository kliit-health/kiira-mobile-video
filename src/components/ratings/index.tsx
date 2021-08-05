import React, { Fragment } from 'react';
import { shape, object, bool, number } from 'prop-types';
import Star from '../../svgs/star.svg';
import { View, Text } from 'react-native';
import { colors } from '../../utils/constants';
import { generateIdentifier, mergeStyles } from '../../utils/functions';
import defaultStyles, { modifiers } from './styles';

const { gray, yellow } = colors;

const Ratings = ({
    styles: customStyles,
    value,
    multistar,
    numberOfStars,
    size,
}) => {
    const styles = {
        root: mergeStyles([
            defaultStyles.root,
            customStyles.root,
            [modifiers.multistar.root, multistar],
        ]),
        text: [defaultStyles.text, customStyles.text],
        starContainer: [
            defaultStyles.starContainer,
            customStyles.starContainer,
        ],
    };

    const getStars = (rating, numberOfStars) => {
        let stars = [];
        for (var i = 0; i < numberOfStars; i++) {
            stars.push({ color: i >= rating ? gray : yellow });
        }
        return stars;
    };

    return (
        <Fragment>
            {multistar ? (
                <View style={styles.root}>
                    {getStars(value, numberOfStars).map(({ color }) => {
                        const key = generateIdentifier();
                        return (
                            <View key={key} style={styles.starContainer}>
                                <Star
                                    width={size.width}
                                    heigth={size.heigth}
                                    color={color}
                                />
                            </View>
                        );
                    })}
                </View>
            ) : (
                <View style={styles.root}>
                    <Star
                        width={size.width}
                        heigth={size.heigth}
                        color={colors.yellow}
                    />
                    <Text style={styles.text}>{value}</Text>
                </View>
            )}
        </Fragment>
    );
};

Ratings.propTypes = {
    styles: shape({
        root: object,
    }),
    value: number,
    multistar: bool,
    numberOfStars: number,
    size: shape({
        heigth: number,
        width: number,
    }),
};

Ratings.defaultProps = {
    styles: {},
    value: 5,
    multistar: false,
    numberOfStars: 5,
    size: { heigth: 18, width: 18 },
};

export default Ratings;
