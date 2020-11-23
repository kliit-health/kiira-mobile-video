import {UPDATE_NEW_USER_DETAIL_DATA} from '../../redux/types';

export const updateUserDataToFirebase = (data) => ({
  type: UPDATE_NEW_USER_DETAIL_DATA,
  data,
});
