import React from 'react';
import {shape, object, func, string, node, bool} from 'prop-types';
import IconButton from '../iconButton';
import TextButton from '../textButton';
import {View, Text} from 'react-native';
import {icons} from '../../utils/constants';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';

const Header = ({
  title,
  onBack,
  onEditPress,
  editState,
  styles: customStyles,
  children,
  disableEdit,
  onClose,
  themed,
}) => {
  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.themed.root, themed],
      customStyles.root,
    ]),
    backButton: mergeStyles([
      modifiers.backButton,
      [modifiers.themed.backButton, themed],
      customStyles.backButton,
    ]),
    title: mergeStyles([
      defaultStyles.title,
      [modifiers.themed.title, themed],
      customStyles.title,
    ]),
    editButton: {
      root: defaultStyles.editButton,
    },
  };

  return (
    <View style={styles.root}>
      {onBack && (
        <IconButton
          styles={styles.backButton}
          source={icons.chevron}
          onPress={onBack}
          boxed={themed}
        />
      )}
      {onClose && <IconButton source={icons.cross} onPress={onClose} />}
      <Text pointerEvents="none" style={styles.title}>
        {title}
      </Text>
      {children}
      {onEditPress && (
        <TextButton
          disabled={disableEdit}
          styles={styles.editButton}
          link
          onPress={onEditPress}>
          {disableEdit ? 'Edit' : editState ? 'Done' : 'Edit'}
        </TextButton>
      )}
    </View>
  );
};

Header.propTypes = {
  title: string,
  onBack: func,
  onEdit: func,
  onClose: func,
  disableEdit: bool,
  children: node,
  editState: bool,
  themed: bool,
  styles: shape({
    root: object,
    back: shape({
      root: object,
      image: object,
    }),
  }),
};

Header.defaultProps = {
  title: undefined,
  onBack: undefined,
  onEdit: undefined,
  onClose: undefined,
  children: undefined,
  disableEdit: false,
  editState: true,
  styles: {},
  themed: false,
};

Header.displayName = 'Header';

export default Header;
