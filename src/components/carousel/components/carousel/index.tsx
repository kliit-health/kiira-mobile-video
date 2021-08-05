import React, { Fragment, useEffect, useRef } from 'react';
import {
    Animated,
    View,
    ScrollView,
    PanResponder,
    Dimensions,
    PanResponderGestureState,
    Platform,
} from 'react-native';
import {
    calculatePanOffset,
    getChildrenLength,
    getChildrenCount,
} from '../../helpers';
import Pages from '../pages';
import { CarouselProps } from '../../types';
import styles from './styles';

const Carousel = (props: CarouselProps) => {
    const {
        pageSize,
        children,
        slipFactor,
        index,
        loop,
        autoplay,
        autoplayTimeout,
        animation,
        onPageChanged,
        pageIndicator,
    } = props;

    const animatedValue = new Animated.Value(0);
    const scrollValue = useRef(animatedValue).current;
    const scrollViewRef = useRef<ScrollView>();

    let childrenLength: number = getChildrenLength(children);
    let childrenCount: number = getChildrenCount(children, loop);
    let autoPlayInterval: NodeJS.Timer | NodeJS.Timeout;
    let pageAnimation: Animated.CompositeAnimation;
    let currentIndex: number = 0;
    let panStartIndex: number = 0;
    let panOffsetFactor: number = 0;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => {
                startPanResponder();
                return true;
            },
            onMoveShouldSetPanResponder: (_, gestureState) => {
                if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
                    startPanResponder();
                    return true;
                }
                return false;
            },
            onPanResponderTerminationRequest: () => false,
            onPanResponderGrant: () => {
                startPanResponder();
            },
            onPanResponderStart: () => {
                startPanResponder();
            },
            onPanResponderMove: (_, gestureState) => {
                panOffsetFactor = calculatePanOffset(
                    gestureState,
                    pageSize,
                    slipFactor,
                );
                goToPage(panStartIndex + panOffsetFactor, false);
            },
            onPanResponderEnd: (_, gestureState) => {
                endPanResponder(gestureState);
                scrollViewRef.current.scrollTo({ x: 0, animated: false });
            },
        }),
    );

    useEffect(() => {
        goToPage(index + (loop ? 1 : 0), false);
    }, []);

    useEffect(() => {
        if (autoplay) {
            startAutoPlay();
        }
        return () => stopAutoPlay();
    }, [autoplay]);

    const startAutoPlay = () => {
        stopAutoPlay();

        if (!autoPlayInterval) {
            autoPlayInterval = setInterval(() => {
                goToNextPage();
            }, autoplayTimeout);
        }
    };

    const stopAutoPlay = () => {
        if (autoPlayInterval != undefined) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = undefined;
        }
    };

    const startPanResponder = () => {
        stopAutoPlay();
        panStartIndex = currentIndex;
        panOffsetFactor = 0;
        if (pageAnimation) {
            pageAnimation.stop();
            goToPage(currentIndex);
        }
    };

    const endPanResponder = (gestureState: PanResponderGestureState) => {
        if (autoplay) {
            startAutoPlay();
        }
        let newIndex = currentIndex;
        panOffsetFactor = calculatePanOffset(
            gestureState,
            pageSize,
            slipFactor,
        );
        if (
            panOffsetFactor > 0.5 ||
            (panOffsetFactor > 0 && gestureState.vx <= -0.1)
        ) {
            newIndex = Math.floor(currentIndex + 1);
        } else if (
            panOffsetFactor < -0.5 ||
            (panOffsetFactor < 0 && gestureState.vx >= 0.1)
        ) {
            newIndex = Math.ceil(currentIndex - 1);
        } else {
            newIndex = Math.round(currentIndex);
        }

        if (currentIndex === newIndex) return;

        goToPage(newIndex);
    };

    const goToNextPage = () => {
        if (!loop && currentIndex === childrenCount - 1) return;
        goToPage(Math.floor(currentIndex) + 1);
    };

    const goToPage = (
        index: number,
        animated: boolean = true,
        callback = () => {},
    ) => {
        if (childrenCount <= 1) {
            return callback();
        }

        if (index < 0) {
            index = 0;
        }

        if (index > childrenCount - 1) {
            index = childrenCount - 1;
        }

        const setIndex = (index: number) => {
            currentIndex = index;
            if (onPageChanged && Number.isInteger(currentIndex)) {
                onPageChanged(getCurrentPage());
            }
        };

        if (animated) {
            pageAnimation = animation(scrollValue, index);
            const animationId = scrollValue.addListener(
                (state: { value: number }) => {
                    setIndex(state.value);
                },
            );
            pageAnimation.start(() => {
                scrollValue.removeListener(animationId);
                setIndex(index);
                pageAnimation = null;
                loopJump();
                callback();
            });
        } else {
            scrollValue.setValue(index);
            setIndex(index);
            loopJump();
            callback();
        }
    };

    const getCurrentPage = () => {
        if (childrenCount <= 1) {
            return childrenCount;
        }

        const index = currentIndex;
        if (loop) {
            if (index < 0.5) {
                return index + childrenCount - 2 - 1;
            } else if (index > childrenCount - 2 + 0.5) {
                return index - childrenCount + 1;
            } else {
                return index - 1;
            }
        } else {
            return index;
        }
    };

    const loopJump = () => {
        if (!loop) return;
        if (childrenCount <= 1) return;

        if (currentIndex === 0) {
            goToPage(childrenCount - 2, false);
        } else if (currentIndex === childrenCount - 1) {
            goToPage(1, false);
        }
    };

    const translateX = scrollValue.interpolate({
        inputRange: [0, 1, childrenLength],
        outputRange: [0, -pageSize, -childrenLength * pageSize],
    });

    return (
        <Fragment>
            <ScrollView
                ref={scrollViewRef}
                style={{ width: pageSize }}
                contentContainerStyle={{ width: pageSize + 1 }}
                horizontal
                pagingEnabled
                directionalLockEnabled
                bounces={false}
                alwaysBounceHorizontal={false}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={Platform.OS === 'ios'}
            >
                <Animated.View
                    style={[
                        styles.animated,
                        {
                            width: pageSize * childrenLength,
                            transform: [{ translateX }],
                        },
                    ]}
                    {...panResponder.current.panHandlers}
                >
                    <Pages loop={loop} pageSize={pageSize}>
                        {children}
                    </Pages>
                </Animated.View>
            </ScrollView>
            {pageIndicator &&
                pageIndicator({
                    pageCount: childrenLength,
                    childrenNum: childrenCount,
                    scrollValue,
                    loop,
                })}
        </Fragment>
    );
};

Carousel.defaultProps = {
    pageSize: Dimensions.get('window').width,
    index: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    slipFactor: 1,
    animation: (animate: Animated.Value | Animated.ValueXY, toValue: any) =>
        Animated.spring(animate, {
            useNativeDriver: false,
            toValue: toValue,
            friction: 10,
            tension: 50,
        }),
};

export default Carousel;
