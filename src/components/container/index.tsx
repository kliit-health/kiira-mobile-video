import React from 'react';
import { shape, object, node, bool, oneOf } from 'prop-types';
import { cloneChild, mergeStyles, cloneChildren } from '../../utils/functions';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import defaultStyles, { modifiers } from './styles';

const Container = ({
  styles: customStyles,
  children,
  unformatted,
  themed,
  modal,
  barStyle,
}) => {
  const insets = useSafeAreaInsets();
  const styles = {
    root: mergeStyles([defaultStyles.root, customStyles.root]),
    safeAreaTop: mergeStyles([
      { ...defaultStyles.safeAreaTop, height: insets.top },
      [modifiers.themed.safeAreaTop, themed],
      [modifiers.modal.safeAreaTop, modal],
      customStyles.safeAreaTop,
    ]),
    safeAreaBottom: mergeStyles([
      { ...defaultStyles.safeAreaBottom, height: insets.bottom },
      [modifiers.themed.safeAreaBottom, themed],
      [modifiers.modal.safeAreaBottom, modal],
      customStyles.safeAreaBottom,
    ]),
    container: mergeStyles([
      defaultStyles.container,
      [modifiers.unformatted.container, unformatted],
      customStyles.container,
    ]),
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle={barStyle} />
      <View style={styles.safeAreaTop} />
      {cloneChild({ children, name: 'Header' })}
      {cloneChild({ children, name: 'FavoritesBar' })}
      {cloneChild({ children, name: 'SearchBar' })}
      <View style={styles.container}>
        {cloneChildren({
          children,
          blacklist: ['Header', 'SearchBar', 'FavoritesBar', 'Footer'],
        })}
      </View>
      {cloneChild({ children, name: 'Footer' })}
      <View style={styles.safeAreaBottom} />
    </View>
  );
};

Container.propTypes = {
  children: node.isRequired,
  unformatted: bool,
  themed: bool,
  modal: bool,
  styles: shape({
    root: object,
    container: object,
  }),
  barStyle: oneOf(['light-content', 'dark-content', 'default']),
};

Container.defaultProps = {
  styles: {},
  barStyle: 'dark-content',
  unformatted: false,
  themed: false,
  modal: false,
};

export default Container;
