import React, {cloneElement} from 'react';
import {shape, node, object, oneOf, number, func, bool} from 'prop-types';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';
import {TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';

const IconButton = ({
  styles: customStyles,
  source,
  resizeMode,
  children,
  disabled,
  activeOpacity,
  onPress,
  boxed,
  ...rest
}) => {
  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.boxed.root, boxed],
      customStyles.root,
    ]),
    image: mergeStyles([
      defaultStyles.image,
      [modifiers.boxed.image, boxed],
      customStyles.image,
    ]),
  };

  const handlePress = (event) => {
    event.preventDefault();
    onPress();
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={handlePress}
      style={styles.root}
      {...rest}>
      {source ? (
        <Image source={source} style={styles.image} resizeMode={resizeMode} />
      ) : (
        cloneElement(children)
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
