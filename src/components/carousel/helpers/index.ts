import React, { Children, ReactNode } from 'react';
import { PanResponderGestureState } from 'react-native';

export const getChildrenLength = (children: React.ReactNode) => {
    return Children.toArray(children).length;
};

export const calculatePanOffset = (
    gestureState: PanResponderGestureState,
    pageSize: number,
    slipFactor: number,
) => {
    let offset = -gestureState.dx / (pageSize / slipFactor);

    if (Math.abs(offset) > 1) {
        offset = offset > 1 ? 1 : -1;
    }
    return offset;
};

export const getChildrenCount = (
    children: ReactNode,
    loop: boolean,
): number => {
    const childrenLength = Children.toArray(children).length;
    return childrenLength < 2 ? 1 : loop ? childrenLength + 2 : childrenLength;
};
