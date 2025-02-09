import {
    SHOW_OR_HIDE_ERROR_MODAL,
    SHOW_OR_HIDE_MEMEBER_MODAL,
    SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL,
} from '../../redux/types';

export const showOrHideModal = (errorMessage, supportLink = false) => ({
    type: SHOW_OR_HIDE_ERROR_MODAL,
    errorMessage,
    supportLink,
});

export const showMemberModal = errorMessage => ({
    type: SHOW_OR_HIDE_MEMEBER_MODAL,
    errorMessage,
    memberMessage: 'Email Support',
});

export const showOrHideDeductConfirmationModal = (data, arr, totalAmount) => ({
    type: SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL,
    data,
    arr,
    totalAmount,
});
