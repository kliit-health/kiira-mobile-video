import React from 'react';
import { shape, object, func, bool, number } from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { icons } from '../../utils/constants';
import defaultStyles from './styles';

const ListItem = props => {
    const {
        styles: customStyles,
        onPress,
        displayChevron,
        displayBorder,
        children,
        activeOpacity,
        id,
    } = props;

    const styles = {
        root: [defaultStyles.root, customStyles.root],
        chevron: [defaultStyles.chevron, customStyles.chevron],
    };

    const handlePress = () => {
        if (onPress) {
            onPress(id);
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={
                displayBorder ? [styles.root, defaultStyles.borderStyle, !displayChevron ? {backgroundColor:'#ECFCFF'} : {}] : styles.root
            }
            onPress={handlePress} 
        >
            {children}
            {displayChevron && (
                <Image
                    style={styles.chevron}
                    resizeMode="contain"
                    source={icons.chevron}
                />
            )}
        </TouchableOpacity>
    );
};

ListItem.propTypes = {
    styles: shape({
        root: object,
        chevron: object,
    }),
    onPress: func,
    displayChevron: bool,
    displayBorder: bool,
    activeOpacity: number,
};

ListItem.defaultProps = {
    styles: {},
    onPress: undefined,
    displayChevron: false,
    activeOpacity: 0.8,
};

export default ListItem;
