import React from 'react';
import NativeModal from 'react-native-modal';
import { shape, object, func, bool, node, number } from 'prop-types';
import defaultStyles from './styles';

const Modal = ({
    styles: customStyles,
    visible,
    onBackdropPress,
    children,
    ...rest
}) => {
    const styles = {
        root: [defaultStyles.root, customStyles.root],
    };

    return (
        <NativeModal
            onBackdropPress={onBackdropPress}
            transparent
            isVisible={visible}
            style={styles.root}
            hideModalContentWhileAnimating
            {...rest}
        >
            {children}
        </NativeModal>
    );
};

Modal.propTypes = {
    styles: shape({
        root: object,
        background: object,
    }),
    children: node,
    onBackdropPress: func,
    visible: bool,
    height: number,
};

Modal.defaultProps = {
    styles: {},
    onBackdropPress: () => {},
    visible: false,
};

export default Modal;
