import { cloneElement, Children } from 'react';

export const cloneChildren = ({ children = [], blacklist = [], data = {} }) => {
    if (children.length == 0) return;
    return Children.map(children, child => {
        if (blacklist.length > 0) {
            if (!blacklist.includes(child.type.displayName)) {
                return cloneElement(child, data);
            }
        }
    });
};
