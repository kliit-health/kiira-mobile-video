import React from 'react';
import { View, Animated } from 'react-native';
import { PageIndicatorProps } from '../../types';
import defaultStyles from './styles';

const PageIndicator = ({
  childrenNum,
  pageCount,
  loop,
  scrollValue,
  offset,
  styles,
}: PageIndicatorProps) => (
  <View style={[defaultStyles.indicatorContainer, styles.indicatorContainer]}>
    {Array.from({ length: pageCount }).map((_, index) => (
      <View key={index} style={[defaultStyles.indicator, styles.indicator]} />
    ))}
    <Animated.View
      style={[
        defaultStyles.indicator,
        defaultStyles.activeIndicator,
        styles.activeIndicator,
        {
          left: scrollValue.interpolate({
            inputRange:
              pageCount === 1
                ? [0, 1]
                : !loop
                ? [0, 1]
                : [0, 1, 2, childrenNum - 2, childrenNum - 1],
            outputRange:
              pageCount === 1
                ? [0, 0]
                : !loop
                ? [0, offset]
                : [
                    0,
                    0,
                    offset,
                    offset * (childrenNum - 3),
                    offset * (childrenNum - 3),
                  ],
          }),
        },
      ]}
    />
  </View>
);

PageIndicator.defaultProps = {
  offset: 16,
  styles: {
    indicator: {},
    activeIndicator: {},
    indicatorContainer: {},
  },
};

export default PageIndicator;
