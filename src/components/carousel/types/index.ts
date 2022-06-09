import { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';

export type CarouselProps = {
  pageSize: number;
  children: ReactNode;
  loop?: boolean;
  index?: number;
  autoplay?: boolean;
  autoplayTimeout?: number;
  slipFactor?: number;
  animation?: (
    animate: Animated.Value,
    toValue: number,
    useNativeDriver?: false,
  ) => Animated.CompositeAnimation;
  onPageChanged?: (index: number) => void;
  pageIndicator?: (props: PageIndicatorProps) => JSX.Element;
};

export type PagesProps = {
  children: ReactNode;
  loop: boolean;
  pageSize: number;
};

export type PageIndicatorProps = {
  pageCount: number;
  childrenNum: number;
  loop?: boolean;
  scrollValue: Animated.Value;
  offset?: number;
  styles?: {
    indicator?: ViewStyle;
    activeIndicator?: ViewStyle;
    indicatorContainer?: ViewStyle;
  };
};
