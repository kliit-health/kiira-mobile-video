import React from 'react';
import NativeModal from 'react-native-modal';
import { shape, object, func, bool, node, number } from 'prop-types';
import defaultStyles from './styles';

const Modal = ({
  styles: customStyles,
  visible,
  onBackdropPress,
  children,
  onDismiss,
}) => {
  const styles = {
    root: [defaultStyles.root, customStyles.root],
  };

  return (
    <NativeModal
      onBackdropPress={onBackdropPress}
      transparent={true}
      isVisible={visible}
      style={styles.root}
      onDismiss={onDismiss}
      useNativeDriver={true}>
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
  onDismiss: func,
};

Modal.defaultProps = {
  styles: {},
  onBackdropPress: () => {},
  visible: false,
  onDismiss: () => {},
};

export default Modal;
