import React from 'react';
import { shape, object } from 'prop-types';
import { View } from 'react-native';
import defaultStyles from './styles';

const Divider = ({ styles: customStyles }) => {
  const styles = {
    root: [defaultStyles.root, customStyles.root],
  };

  return <View style={styles.root}></View>;
};

Divider.propTypes = {
  styles: shape({
    root: object,
  }),
};

Divider.defaultProps = {
  styles: {},
};

export default Divider;
