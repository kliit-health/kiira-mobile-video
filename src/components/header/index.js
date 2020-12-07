import React from 'react';
import { shape, object, func, string, node, bool } from 'prop-types';
import IconButton from '../iconButton';
import TextButton from '../textButton';
import { View, Text } from 'react-native';
import { icons } from '../../utils/constants';
import defaultStyles from './styles';

const Header = ({
  title,
  onBack,
  onEditPress,
  editState,
  styles: customStyles,
  children,
  disableEdit,
  onClose,
}) => {
  const styles = {
    root: [defaultStyles.root, customStyles.root],
    backButton: {
      image: defaultStyles.backButton,
      ...customStyles.backButton,
    },
    title: [defaultStyles.title, customStyles.title],
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
          onPress={onEditPress}
        >
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
};

Header.displayName = 'Header';

export default Header;
