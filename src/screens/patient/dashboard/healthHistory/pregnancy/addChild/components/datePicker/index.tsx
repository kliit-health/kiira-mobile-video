import React, { Fragment, useState } from 'react';
import moment from 'moment';
import { TextInput, ModalDatePicker } from '~/components';

const DatePicker = ({ value, title, onSave, placeholder }) => {
    const [visible, setVisible] = useState(false);

    const handlePress = () => {
        setVisible(true);
    };

    const handleBackPress = () => {
        setVisible(false);
    };

    const handleSave = item => {
        setVisible(false);
        onSave(item);
    };

    return (
        <Fragment>
            <TextInput
                editable={false}
                placeholder={placeholder}
                chevron
                value={value ? moment(value).format('MM/DD/YYYY') : undefined}
                onPress={handlePress} 
                styles={{}} 
                children={undefined}
                onChange={() => {}}
                multiline={false} 
                id={undefined} 
                outlined={false} 
                label={undefined} 
                defaultValue={undefined}   
            />
            <ModalDatePicker
                onBackdropPress={handleBackPress}
                title={title}
                onSave={handleSave}
                visible={visible}
            />
        </Fragment>
    );
};

export default DatePicker;
