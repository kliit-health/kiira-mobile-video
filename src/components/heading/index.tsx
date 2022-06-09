import React from 'react';
import Text from '../text';
import { h1 } from '../styles';

const Heading = ({ children, options = null }) => {
  return <Text options={options ? [h1, options] : [h1]}>{children}</Text>;
};

export default Heading;
