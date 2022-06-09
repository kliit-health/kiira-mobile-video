import { icons } from '~/utils/constants';

export type Details = {
  icon: any;
  value: string;
};

export const cardDetails: Details[] = [
  {
    icon: icons.location,
    value: 'state.value',
  },
  {
    icon: icons.cake,
    value: 'dob',
  },
  {
    icon: icons.genders,
    value: 'pronouns',
  },
  {
    icon: icons.heart,
    value: 'sexuality.value',
  },
];
