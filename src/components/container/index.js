import React from 'react';
import {shape, object, node, bool} from 'prop-types';
import {cloneChild, mergeStyles, cloneChildren} from '../../utils/functions';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import defaultStyles, {modifiers} from './styles';

const Container = ({styles: customStyles, children, unformatted, themed}) => {
  const insets = useSafeAreaInsets();
  const styles = {
    root: mergeStyles([defaultStyles.root, customStyles.root]),
    safeAreaTop: mergeStyles([
      {...defaultStyles.safeAreaTop, height: insets.top},
      [modifiers.themed.safeAreaTop, themed],
      customStyles.safeAreaTop,
    ]),
    safeAreaBottom: mergeStyles([
      {...defaultStyles.safeAreaBottom, height: insets.bottom},
      [modifiers.themed.safeAreaBottom, themed],
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
      <View style={styles.safeAreaTop} />
      {cloneChild({children, name: 'Header'})}
      {cloneChild({children, name: 'FavoritesBar'})}
      {cloneChild({children, name: 'SearchBar'})}
      <View style={styles.container}>
        {cloneChildren({
          children,
          blacklist: ['Header', 'SearchBar', 'FavoritesBar', 'Footer'],
        })}
      </View>
      {cloneChild({children, name: 'Footer'})}
      <View style={styles.safeAreaBottom} />
    </View>
  );
};

Container.propTypes = {
  children: node.isRequired,
  unformatted: bool,
  themed: bool,
  styles: shape({
    root: object,
    container: object,
  }),
};

Container.defaultProps = {
  styles: {},
  unformatted: false,
  themed: false,
};

export default Container;
