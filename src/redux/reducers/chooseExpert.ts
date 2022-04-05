import { switchCase } from '~/utils/functions';
import {
    GET_EXPERTS_DATA_SUCCESS,
    CLEAR_CHOOSE_EXPERT_STATE,
    GET_PROFESSIONS_DATA_SUCCESS,
    GET_LANGUAGES_DATA_SUCCESS,
} from '~/redux/types';

const initialState = {
    expertData: null,
    professionData: null,
    languagesData: null,
};

export const chooseExpert = (state = initialState, action) => {
    const { data, type } = action;
    return switchCase({
        [GET_EXPERTS_DATA_SUCCESS]: () => {
            const expertData = data.map(item => item.data());

            return {
                ...state,
                expertData,
            };
        },
        [CLEAR_CHOOSE_EXPERT_STATE]: {
            ...state,
            expertData: null,
            professionData: null,
            languagesData: null,
        },
        [GET_PROFESSIONS_DATA_SUCCESS]: {
            ...state,
            professionData: data,
        },
        [GET_LANGUAGES_DATA_SUCCESS]: {
            ...state,
            languagesData: data,
        },
    })(state)(type);
};

export default chooseExpert;
