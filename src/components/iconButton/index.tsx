import React, { cloneElement } from 'react';
import { shape, node, object, oneOf, number, func, bool } from 'prop-types';
import { mergeStyles } from '../../utils/functions';
import defaultStyles, { modifiers } from './styles';
import { TouchableOpacity } from 'react-native';
import Image from 'react-native-fast-image';

interface iconButton{
    styles: any,
    source: any,
    resizeMode?: any,
    children?: any,
    disabled?: boolean,
    activeOpacity?: any,
    onPress: any,
    boxed?:any,
    test?: any,  
}

const IconButton = (props: iconButton) => {
    const styles = {
        root: mergeStyles([
            defaultStyles.root,
            [modifiers.boxed.root, props.boxed],
            props.styles.root,
        ]),
        image: mergeStyles([
            defaultStyles.image,
            [modifiers.boxed.image, props.boxed],
            props.styles.image,
        ]),
    };

    const handlePress = event => {
        event.preventDefault();
        props.onPress();
    };

    return (
        <TouchableOpacity
            testID={props.test}
            disabled={props.disabled}
            activeOpacity={props.activeOpacity}
            onPress={handlePress}
            style={styles.root}  
        >
            {props.source ? (
                <Image
                    source={props.source}
                    style={styles.image}
                    resizeMode={props.resizeMode}
                />
            ) : (
                cloneElement(props.children)
            )}
        </TouchableOpacity>
    );
};

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
    source: node,
    chidlren: node,
    activeOpacity: number,
    resizeMode: oneOf(['contain', 'cover', 'stretch', 'center', 'repeat']),
    onPress: func,
    disabled: bool,
    boxed: bool,
    styles: shape({
        root: object,
        image: object,
    }),
};

IconButton.defaultProps = {
    styles: {},
    activeOpacity: 1,
    resizeMode: 'contain',
    disabled: false,
    boxed: false,
    onPress: () => {},
};

export default IconButton;
