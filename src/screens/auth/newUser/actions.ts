import { AGREE_TO_TERMS } from '~/redux/types';

export const agreeToTerms = data => ({
    type: AGREE_TO_TERMS,
    payload: data,
});
