import React, { Fragment, useState } from "react";
import moment from "moment";
import { TextInput, ModalDatePicker } from "../../../../components";

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
				placeholder={placeholder}
				chevron
				value={value ? moment(value).format("MM/DD/YYYY") : undefined}
				onPress={handlePress}
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
