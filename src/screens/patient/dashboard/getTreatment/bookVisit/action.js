import {
  GET_EXPERTS_DETAIL_DATA_SUCCESS,
  GET_EXPERTS_DETAIL_DATA,
  CLEAR_EXPERT_PROFILE_STATE,
  MAKE_APPOINTMENT,
  SET_PREPAID,
} from '../../redux/types';

export const getExpertsData = (data) => ({
  type: GET_EXPERTS_DETAIL_DATA,
  data,
});

export const getExpertsDataSuccess = (data) => ({
  type: GET_EXPERTS_DETAIL_DATA_SUCCESS,
  data,
});

export const clearExpertProfileState = (data) => ({
  type: CLEAR_EXPERT_PROFILE_STATE,
  data,
});

export const makeAppointment = (data) => ({
  type: MAKE_APPOINTMENT,
  data,
});

export const prepaidAppointment = () => ({
  type: SET_PREPAID,
});
