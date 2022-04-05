import { UPDATE_EXPERT_HOURS_DATA } from '~/redux/types';

export const updateExpertDataToFirebase = data => ({
    type: UPDATE_EXPERT_HOURS_DATA,
    data,
});
