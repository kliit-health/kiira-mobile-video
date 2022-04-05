import { cloneElement, Children } from 'react';

export const cloneChild = ({ children = [], name, data = {} }) => {
    if (children.length === 0) return;
    return Children.map(children, child => {
        if (child.type.displayName === name) {
            return cloneElement(child, data);
        }
    });
};
