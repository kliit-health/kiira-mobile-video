import React from 'react';
import {shape, object, bool, string, func, number, oneOf} from 'prop-types';
import {View, TouchableOpacity, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';
import Remove from '../../svgs/remove.svg';

const Avatar = ({
  styles: customStyles,
  activeOpacity,
  onLayout,
  source,
  resizeMode,
  size,
  rounded,
  onPress,
  border,
  online,
  deleteMode,
}) => {
  const styles = {
    image: mergeStyles([
      modifiers[size].image,
      [modifiers.rounded.image, rounded],
      customStyles.image,
    ]),
    root: mergeStyles([
      defaultStyles.root,
      modifiers[size].root,
      [modifiers.rounded.root, rounded],
      [modifiers.border[size].root, border],
      customStyles.root,
    ]),
    status: mergeStyles([
      defaultStyles.status,
      modifiers[size].status,
      [modifiers.online.status, online],
      [modifiers.offline.status, online === false],
      customStyles.status,
    ]),
    deleteIcon: mergeStyles([
      defaultStyles.deleteIcon,
      [modifiers.deleteMode.deleteIcon, deleteMode],
      customStyles.deleteIcon,
    ]),
  };

  const handleLayout = (event) => {
    const layout = event.nativeEvent.layout;
    onLayout(layout);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <View onLayout={handleLayout} style={styles.root}>
        <FastImage
          style={styles.image}
          source={{uri: source ? source : null}}
          fallback={true}
          resizeMode={resizeMode}
          defaultSource={require('../../../assets/profile_img_placeholder.png')}
        />
        <View style={styles.status} />
        {deleteMode && (
          <View style={styles.deleteIcon}>
            <Remove {...modifiers[size].delete} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  source: string,
  rounded: bool,
  border: bool,
  onPress: func,
  online: bool,
  deleteMode: bool,
  size: oneOf(['small', 'medium', 'large']),
  resizeMode: oneOf(['contain', 'center', 'cover', 'stretch']),
  activeOpacity: number,
  styles: shape({
    root: object,
    image: object,
    root: object,
    status: object,
  }),
  onLayout: func,
};

Avatar.defaultProps = {
  source: undefined,
  rounded: true,
  border: false,
  online: null,
  deleteMode: false,
  onPress: () => {},
  size: 'medium',
  resizeMode: 'cover',
  activeOpacity: 1,
  onLayout: () => {},
  styles: {},
};

export default Avatar;
