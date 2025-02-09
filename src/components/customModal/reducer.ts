import {
    SHOW_OR_HIDE_ERROR_MODAL,
    SHOW_OR_HIDE_MEMEBER_MODAL,
    SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL,
} from '../../redux/types';

const initialState = {
    showModal: false,
    showModalError: false,
    errorMessage: '',
    supportLink: false,
    data: {
        title: '',
        subtitle: '',
        points: '',
        currencyCal: '',
        message: '',
        btnOkText: '',
        btnCancelText: '',
    },
    arrData: null,
    totalAmount: null,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_OR_HIDE_ERROR_MODAL:
            return {
                ...state,
                showModalError: !state.showModalError,
                errorMessage: action.errorMessage,
                supportLink: action.supportLink,
            };
        case SHOW_OR_HIDE_MEMEBER_MODAL:
            return {
                ...state,
                showModalError: !state.showModalError,
                errorMessage: action.errorMessage,
                memberMessage: action.memberMessage,
            };
        case SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                data: action.data
                    ? action.data
                    : {
                          title: '',
                          subtitle: '',
                          points: '',
                          currencyCal: '',
                          message: '',
                          btnOkText: '',
                          btnCancelText: '',
                      },
                arrData: action.arr,
                totalAmount: action.totalAmount,
            };
        default:
            return { ...state };
    }
};

export default modalReducer;
