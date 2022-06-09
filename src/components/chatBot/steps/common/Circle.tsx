import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Shape, Path } from '@react-native-community/art';

export default class Circle extends React.Component {
  public props: any;
  public radius: any;
  public rest: any;

  render() {
    const { radius, ...rest } = this.props;

    const circle = Path()
      .move(radius, 0)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius);

    return <Shape {...rest} d={circle} />;
  }
}
