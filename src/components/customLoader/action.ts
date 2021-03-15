import { SHOW_API_LOADER, HIDE_API_LOADER } from '../../redux/types';

export const showApiLoader = () => ({
  type: SHOW_API_LOADER,
});

export const hideApiLoader = () => ({
  type: HIDE_API_LOADER,
});
