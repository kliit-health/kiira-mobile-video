import { GET_FAVORITE_EXPERTS, UPDATE_FAVORITE_EXPERTS } from '../types';

export const getFavoriteExperts = data => ({
  type: GET_FAVORITE_EXPERTS,
  data,
});

export const updateFavoriteExperts = data => ({
  type: UPDATE_FAVORITE_EXPERTS,
  data,
});
