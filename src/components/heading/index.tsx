import React from 'react';
import Text from '../text';
import { default as globalStyles } from '../styles';

const { xxLarge, pad_h, sm_pad_v } = globalStyles;

const Heading = ({ children, options = null }) => {
    return (
        <Text
            options={
                options
                    ? [xxLarge, pad_h, sm_pad_v, options]
                    : [xxLarge, pad_h, sm_pad_v]
            }
        >
            {children}
        </Text>
    );
};

export default Heading;
