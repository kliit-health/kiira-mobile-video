export const types = {
  textInput: 'textInput',
  picker: 'picker',
  datePicker: 'datePicker',
};

export const model = [
  {
    dataKey: 'gender',
    title: 'Gender',
    type: 'textInput',
    placeholder: '',
  },
  {
    dataKey: 'dateOfBirth',
    title: 'Date of Birth',
    type: 'datePicker',
    placeholder: 'Date of Birth',
  },
  {
    dataKey: 'height',
    title: 'Height (ft)',
    type: 'picker',
    placeholder: 'Height',
  },
  {
    dataKey: 'weight',
    title: 'Weight (lbs)',
    type: 'picker',
    placeholder: 'Weight',
  },
];
