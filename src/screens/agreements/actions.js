import { GET_AGREEMENTS } from '../../redux/types';

export const getAgreements = (data) => ({
  type: GET_AGREEMENTS,
  data,
});
