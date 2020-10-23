export const types = {
	textInput: "textInput",
	picker: "picker",
	datePicker: "datePicker",
};

export const model = [
	{
		dataKey: "name",
		title: "Name",
		type: types.textInput,
		placeholder: "Name",
		options: undefined,
	},
	{
		dataKey: "dateOfBirth",
		title: "Date of Birth",
		type: types.datePicker,
		placeholder: "Date of Birth",
		options: undefined,
	},
	{
		dataKey: "sex",
		title: "Sex",
		type: types.picker,
		placeholder: "Sex",
		options: ["Male", "Female"],
	},
];
