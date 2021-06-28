import {SEND_VERIFICATION_EMAIL} from '~/redux/types';

export const sendVerification = (data) => {
  console.log('SEND VERIFICATION ACTION', data);
  return {
    type: SEND_VERIFICATION_EMAIL,
    data,
  };
};
