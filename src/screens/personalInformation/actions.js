import {
  GET_PERSONAL_INFORMATION,
  UPDATE_PERSONAL_INFORMATION,
  SAVE_PERSONAL_INFORMATION,
} from '../../redux/types';

export const getPersonalInformation = (data) => ({
  type: GET_PERSONAL_INFORMATION,
  data,
});

export const updatePersonalInformation = (data) => ({
  type: UPDATE_PERSONAL_INFORMATION,
  data,
});

export const savePersonalInformation = (data) => ({
  type: SAVE_PERSONAL_INFORMATION,
  data,
});
