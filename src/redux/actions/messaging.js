import {SHOW_MESSAGE, HIDE_MESSAGE} from '../types';

export const showMessage = (data) => ({
  type: SHOW_MESSAGE,
  data,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
});
