import React from 'react';
import {shape, object, node, bool} from 'prop-types';
import {cloneChild, mergeStyles, cloneChildren} from '../../utils/functions';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import defaultStyles, {modifiers} from './styles';

const Container = ({styles: customStyles, children, unformatted}) => {
  const styles = {
    root: [defaultStyles.root, customStyles.root],
    container: mergeStyles([
      defaultStyles.container,
      [modifiers.unformatted.container, unformatted],
      customStyles.container,
    ]),
  };

  return (
    <SafeAreaView style={styles.root}>
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
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: node.isRequired,
  unformatted: bool,
  styles: shape({
    root: object,
    container: object,
  }),
};

Container.defaultProps = {
  styles: {},
  unformatted: false,
};

export default Container;
