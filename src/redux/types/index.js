// Modal action type
export const SHOW_OR_HIDE_ERROR_MODAL = 'SHOW_OR_HIDE_ERROR_MODAL';
export const SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL =
  'SHOW_OR_HIDE_DEDUCT_CONFIRMATION_MODAL';

// Loader action types
export const SHOW_API_LOADER = 'SHOW_API_LOADER';
export const HIDE_API_LOADER = 'HIDE_API_LOADER';

// Toast action types
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

// Authloading action types
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_FCM_TOKEN = 'SET_FCM_TOKEN';
export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_APP_SCREEN = 'SET_APP_SCREEN';
export const GET_LICENSES = 'GET_LICENSES';
export const SET_LICENSES = 'SET_LICENSES';

// Forgot Password Types
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const RESET_FORGOT_PASSWORD_STATE = 'RESET_FORGOT_PASSWORD_STATE';

// Signup Types
export const CREATE_USER = 'CREATE_USER';
export const UPLOAD_USER_DETAIL_DATA = 'UPLOAD_USER_DETAIL_DATA';
export const AGREE_TO_TERMS = 'AGREE_TO_TERMS';
export const SEND_VERIFICATION_EMAIL = 'SEND_VERIFICATION_EMAIL';

// Login Types
export const LOGIN_FIREBASE_USER = 'LOGIN_FIREBASE_USER';
export const LOGIN_FIREBASE_API_HIT_FAILURE = 'LOGIN_FIREBASE_API_HIT_FAILURE';
export const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE';

// Account Types
export const SIGN_OUT_API_HIT = 'SIGN_OUT_API_HIT';

// Ask Types
export const CLEAR_ASK_STATE = 'CLEAR_ASK_STATE';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const GET_QUESTION_DATA = 'GET_QUESTION_DATA';
export const GET_QUESTION_DATA_SUCCESS = 'GET_QUESTION_DATA_SUCCESS';
export const GET_RECENT_EXPERTS_DATA_SUCCESS =
  'GET_RECENT_EXPERTS_DATA_SUCCESS';
export const GET_PREVIOUS_QUESTION_DATA_SUCCESS =
  'GET_PREVIOUS_QUESTION_DATA_SUCCESS';
export const CLEAR_QUESTION_VALUE = 'CLEAR_QUESTION_VALUE';
export const GET_EXPERT_QUESTION_DATA = 'GET_EXPERT_QUESTION_DATA';
export const GET_EXPERT_QUESTION_SUCCESS = 'GET_EXPERT_QUESTION_SUCCESS';
export const GET_EXPERT_RESOLVED_QUESTION_SUCCESS =
  'GET_EXPERT_RESOLVED_QUESTION_SUCCESS';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Expert Profile Types
export const GET_EXPERTS_DETAIL_DATA = 'GET_EXPERTS_DETAIL_DATA';
export const GET_EXPERTS_DETAIL_DATA_SUCCESS =
  'GET_EXPERTS_DETAIL_DATA_SUCCESS';
export const CLEAR_EXPERT_PROFILE_STATE = 'CLEAR_EXPERT_PROFILE_STATE';

// Expert Profile Types
export const GET_EXPERTS_DATA = 'GET_EXPERTS_DATA';
export const GET_EXPERTS_DATA_SUCCESS = 'GET_EXPERTS_DATA_SUCCESS';
export const CLEAR_CHOOSE_EXPERT_STATE = 'CLEAR_CHOOSE_EXPERT_STATE';
export const GET_PROFESSIONS_DATA_SUCCESS = 'GET_PROFESSIONS_DATA_SUCCESS';
export const GET_LANGUAGES_DATA_SUCCESS = 'GET_LANGUAGES_DATA_SUCCESS';

// Change Password Types
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

// Setting Screen Types
export const UPDATE_NEW_USER_DETAIL_DATA = 'UPDATE_NEW_USER_DETAIL_DATA';
export const UPDATE_USER_DETAIL_DATA = 'UPDATE_USER_DETAIL_DATA';
export const UPDATE_EXPERT_DETAIL_DATA = 'UPDATE_EXPERT_DETAIL_DATA';

// Update Availibility Types
export const UPDATE_EXPERT_HOURS_DATA = 'UPDATE_EXPERT_HOURS_DATA';

// Chat Types
export const CHAT_MESSAGE_LOADING = 'CHAT_MESSAGE_LOADING';
export const CHAT_MESSAGE_SUCCESS = 'CHAT_MESSAGE_SUCCESS';
export const CHAT_MESSAGE_ERROR = 'CHAT_MESSAGE_ERROR';
export const CHAT_MESSAGE_UPDATE = 'CHAT_MESSAGE_UPDATE';
export const CHAT_LOAD_MESSAGES_SUCCESS = 'CHAT_LOAD_MESSAGES_SUCCESS';
export const CHAT_MESSAGE_SENDING = 'CHAT_MESSAGE_SENDING';
export const CHAT_IMAGE_UPLOAD = 'CHAT_IMAGE_UPLOAD';
export const CHAT_LOAD_MESSAGES_ERROR = 'CHAT_LOAD_MESSAGES_ERROR';
export const SET_QUESTION = 'SET_QUESTION';
export const CLEAR_CHAT_STATE = 'CLEAR_CHAT_STATE';
export const SET_QUESTION_ID = 'SET_QUESTION_ID';
export const SET_EXPERT_RATING = 'SET_EXPERT_RATING';
export const CHECK_EXPERT_STATUS = 'CHECK_EXPERT_STATUS';
export const CHECK_EXPERT_STATUS_SUCCESS = 'CHECK_EXPERT_STATUS_SUCCESS';
export const CHECK_QUESTION_STATUS_SUCCESS = 'CHECK_QUESTION_STATUS_SUCCESS';
export const TOGGLE_USER_STATUS = 'TOGGLE_USER_STATUS';
export const STOP_OBSERVER_CHAT = 'STOP_OBSERVER_CHAT';

export const CHAT_MESSAGE_EXPERT_LOADING = 'CHAT_MESSAGE_EXPERT_LOADING';
export const CHAT_LOAD_MESSAGES_EXPERT_SUCCESS =
  'CHAT_LOAD_MESSAGES_EXPERT_SUCCESS';
export const CHAT_LOAD_MESSAGES_EXPERT_ERROR =
  'CHAT_LOAD_MESSAGES_EXPERT_ERROR';
export const CHAT_IMAGE_EXPERT_UPLOAD = 'CHAT_IMAGE_EXPERT_UPLOAD';
export const CLEAR_CHAT_EXPERT_STATE = 'CLEAR_CHAT_EXPERT_STATE';
export const CHAT_MESSAGE_EXPERT_SUCCESS = 'CHAT_MESSAGE_EXPERT_SUCCESS';
export const CHAT_MESSAGE_EXPERT_ERROR = 'CHAT_MESSAGE_EXPERT_ERROR';
export const SET_QUESTION_EXPERT_DATA = 'SET_QUESTION_EXPERT_DATA';
export const CHAT_MESSAGE_EXPERT_SENDING = 'CHAT_MESSAGE_EXPERT_SENDING';
export const CHECK_QUESTION_EXPERT_STATUS_SUCCESS =
  'CHECK_QUESTION_EXPERT_STATUS_SUCCESS';
export const CHECK_USER_STATUS = 'CHECK_USER_STATUS';
export const CHECK_USER_STATUS_SUCCESS = 'CHECK_USER_STATUS_SUCCESS';
export const TOGGLE_EXPERT_STATUS = 'TOGGLE_EXPERT_STATUS';
export const RESOLVE_QUESTION = 'RESOLVE_QUESTION';

export const CREATE_PAYMENT_CARD = 'CREATE_PAYMENT_CARD';
export const GET_CREDIT_AMOUNT_OPTIONS = 'GET_CREDIT_AMOUNT_OPTIONS';
export const SET_CREDIT_AMOUNT_OPTIONS = 'SET_CREDIT_AMOUNT_OPTIONS';
export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS';
export const SET_PAYMENT_METHODS = 'SET_PAYMENT_METHODS';
export const BUY_CREDITS_WITH_CARD = 'BUY_CREDITS_WITH_CARD';
export const BUY_CREDITS_WITH_TOKEN = 'BUY_CREDITS_WITH_TOKEN';
export const BUY_CREDITS_WITH_PAYPAL = 'BUY_CREDITS_WITH_PAYPAL';
export const SET_ORDER_DATA = 'SET_ORDER_DATA';
export const CAPTURE_PAYMENT = 'CAPTURE_PAYMENT';
export const SET_NATIVE_PAY_SUPPORT = 'SET_NATIVE_PAY_SUPPORT';

// Health History Types
export const GET_HEALTH_HISTORY_ASYNC = 'GET_HEALTH_HISTORY_ASYNC';
export const GET_HEALTH_HISTORY = 'GET_HEALTH_HISTORY';

export const UPDATE_HEALTH_HISTORY_ASYNC = 'UPDATE_HEALTH_HISTORY_ASYNC';
export const UPDATE_HEALTH_HISTORY = 'UPDATE_HEALTH_HISTORY';

export const UPDATE_BASIC_INFO = 'UPDATE_BASIC_INFO';
export const UPDATE_PREGNANCY_HISTORY = 'UPDATE_PREGNANCY_HISTORY';
export const UPDATE_ALLERGIES = 'UPDATE_ALLERGIES';
export const UPDATE_MEDICATIONS = 'UPDATE_MEDICATIONS';
export const UPDATE_MEDICAL_HISTORY = 'UPDATE_MEDICAL_HISTORY';
export const UPDATE_INSURANCE = 'UPDATE_INSURANCE';

//Medical History Types
export const GET_MEDICAL_HISTORY_ASYNC = 'GET_MEDICAL_HISTORY_ASYNC';
export const GET_MEDICAL_HISTORY = 'GET_MEDICAL_HISTORY';

export const SET_MEDICAL_HISTORY = 'SET_MEDICAL_HISTORY';

export const UPDATE_MEDICAL_HISTORY_ASYNC = 'UPDATE_MEDICAL_HISTORY_ASYNC';
export const UPDATE_MEDICAL_HISTORY_EXPERT = 'UPDATE_MEDICAL_HISTORY_EXPERT';

export const UPDATE_SURGICAL_HISTORY = 'UPDATE_SURGICAL_HISTORY';
export const LOCK_VISIT = 'LOCK_VISIT';

// Terms and Conditions Types

export const GET_TERMS = 'GET_TERMS';
export const SET_TERMS = 'SET_TERMS';

// Privacy Policy

export const GET_POLICY = 'GET_POLICY';
export const SET_POLICY = 'SET_POLICY';

// Expert Schedule

export const NEEDS_PRESCRIPTION = 'NEEDS_PRESCRIPTION';
export const REASON_FOR_VISIT = 'REASON_FOR_VISIT';
export const SET_APPOINTMENT_DAY = 'SET_APPOINTMENT_DAY';
export const SET_APPOINTMENT_TIME = 'SET_APPOINTMENT_TIME';
export const SET_CALENDAR_ID = 'SET_CALENDAR_ID';
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const GET_EXPERT_APPOINTMENTS = 'GET_EXPERT_APPOINTMENTS';
export const GET_PATIENTS_LIST = 'GET_PATIENTS_APPOINTMENTS';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const MAKE_APPOINTMENT = 'MAKE_APPOINTMENT';
export const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
export const FETCH_EXPERT_APPOINTMENTS = 'FETCH_EXPERT_APPOINTMENTS';
export const CANCEL_APPOINTMENT = 'CANCEL_APPOINTMENT';
export const EXPERT_CANCEL_APPOINTMENT = 'EXPERT_CANCEL_APPOINTMENT';
export const GET_APPOINTMENTS_BY_DAY = 'GET_APPOINTMENTS_BY_DAY';
export const SET_TIMES = 'SET_TIMES';
export const GET_APPOINTMENT_DATES = 'GET_APPOINTMENT_DATES';
export const SET_APPOINTMENT_DATES = 'SET_APPOINTMENT_DATES';
export const GET_APPOINTMENTS_FOR_TODAY = 'GET_APPOINTMENTS_FOR_TODAY';
export const SET_APPOINTMENTS_FOR_TODAY = 'SET_APPOINTMENTS_FOR_TODAY';
export const RATE_VISIT = 'RATE_VISIT';
export const SET_PREPAID = 'SET_PREPAID';
export const PAITENT_CANCEL_APPOINTMENT = 'PAITENT_CANCEL_APPOINTMENT';
export const FETCH_PAITENT_APPOINTMENTS = 'FETCH_PAITENT_APPOINTMENTS';

export const GET_EXPERTS_DETAILS = 'GET_EXPERTS_DETAILS';
export const GET_EXPERTS_DETAILS_ASYNC = 'GET_EXPERTS_DETAILS_ASYNC';
export const UPDATE_FAVORITE_EXPERTS_ASYNC = 'UPDATE_FAVORITE_EXPERTS_ASYNC';
export const UPDATE_FAVORITE_EXPERTS = 'UPDATE_FAVORITE_EXPERTS';
export const GET_FAVORITE_EXPERTS = 'GET_FAVORITE_EXPERTS';
export const GET_FAVORITE_EXPERTS_ASYNC = 'GET_FAVORITE_EXPERTS_ASYNC';

export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';
export const SET_PREVIOUS_ROUTE = 'SET_PREVIOUS_ROUTE';

export const GET_CHAT_HISTORY = 'GET_CHAT_HISTORY';
export const GET_CHAT_HISTORY_ASYNC = 'GET_CHAT_HISTORY_ASYNC';

export const GET_VIDEO_HISTORY = 'GET_VIDEO_HISTORY';
export const GET_VIDEO_HISTORY_ASYNC = 'GET_VIDEO_HISTORY_ASYNC';

export const GET_AGREEMENTS = 'GET_AGREEMENTS';
export const GET_AGREEMENTS_PENDING = 'GET_AGREEMENTS_PENDING';
export const GET_AGREEMENTS_FULFILLED = 'GET_AGREEMENTS_FULFILLED';
export const GET_AGREEMENTS_REJECTED = 'GET_AGREEMENTS_REJECTED';

export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_FULFILLED = 'GET_USER_DETAILS_FULFILLED';
export const GET_USER_DETAILS_PENDING = 'GET_USER_DETAILS_PENDING';
export const GET_USER_DETAILS_REJECTED = 'GET_USER_DETAILS_REJECTED';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_DETAILS_FULFILLED = 'SET_USER_DETAILS_FULFILLED';
export const SET_USER_DETAILS_PENDING = 'SET_USER_DETAILS_PENDING';
export const SET_USER_DETAILS_REJECTED = 'SET_USER_DETAILS_REJECTED';

export const GET_CONSENTS = 'GET_CONSENTS';
export const GET_CONSENTS_PENDING = 'GET_CONSENTS_PENDING';
export const GET_CONSENTS_FULFILLED = 'GET_CONSENTS_FULFILLED';
export const GET_CONSENTS_REJECTED = 'GET_CONSENTS_REJECTED';

export const GET_PATIENT_DETAILS = 'GET_PATIENT_DETAILS';
export const GET_PATIENT_DETAILS_PENDING = 'GET_PATIENT_DETAILS_PENDING';
export const GET_PATIENT_DETAILS_FULFILLED = 'GET_PATIENT_DETAILS_FULFILLED';
export const GET_PATIENT_DETAILS_REJECTED = 'GET_PATIENT_DETAILS_REJECTED';

export const UPDATE_PATIENT_DETAILS = 'UPDATE_PATIENT_DETAILS';
export const UPDATE_PATIENT_DETAILS_PENDING = 'UPDATE_PATIENT_DETAILS_PENDING';
export const UPDATE_PATIENT_DETAILS_FULFILLED =
  'UPDATE_PATIENT_DETAILS_FULFILLED';
export const UPDATE_PATIENT_DETAILS_REJECTED =
  'UPDATE_PATIENT_DETAILS_REJECTED';

export const GET_EXPERT_QUESTIONS = 'GET_EXPERT_QUESTIONS';
export const GET_EXPERT_QUESTIONS_PENDING = 'GET_EXPERT_QUESTIONS_PENDING';
export const GET_EXPERT_QUESTIONS_FULFILLED = 'GET_EXPERT_QUESTIONS_FULFILLED';
export const GET_EXPERT_QUESTIONS_REJECTED = 'GET_EXPERT_QUESTIONS_REJECTED';

export const GET_EXPERT_ACTIVE_QUESTIONS = 'GET_EXPERT_ACTIVE_QUESTIONS';
export const GET_EXPERT_ACTIVE_QUESTIONS_PENDING =
  'GET_EXPERT_ACTIVE_QUESTIONS_PENDING';
export const GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED =
  'GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED';
export const GET_EXPERT_ACTIVE_QUESTIONS_REJECTED =
  'GET_EXPERT_ACTIVE_QUESTIONS_REJECTED';

export const GET_EXPERT_RESOLVED_QUESTIONS = 'GET_EXPERT_RESOLVED_QUESTIONS';
export const GET_EXPERT_RESOLVED_QUESTIONS_PENDING =
  'GET_EXPERT_RESOLVED_QUESTIONS_PENDING';
export const GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED =
  'GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED';
export const GET_EXPERT_RESOLVED_QUESTIONS_REJECTED =
  'GET_EXPERT_RESOLVED_QUESTIONS_REJECTED';

export const SEARCH_EXPERT_ACTIVE_QUESTIONS = 'SEARCH_EXPERT_ACTIVE_QUESTIONS';
export const SEARCH_EXPERT_ACTIVE_QUESTIONS_FULFILLED =
  'SEARCH_EXPERT_ACTIVE_QUESTIONS_FULFILLED';
export const SEARCH_EXPERT_RESOLVED_QUESTIONS =
  'SEARCH_EXPERT_RESOLVED_QUESTIONS';
export const SEARCH_EXPERT_RESOLVED_QUESTIONS_FULFILLED =
  'SEARCH_EXPERT_RESOLVED_QUESTIONS_FULFILLED';

export const SEARCH_EXPERT_QUESTIONS = 'SEARCH_EXPERT_QUESTIONS';

export const GET_CLIENT_MEDICAL_HISTORY = 'GET_CLIENT_MEDICAL_HISTORY';
export const GET_CLIENT_MEDICAL_HISTORY_PENDING =
  'GET_CLIENT_MEDICAL_HISTORY_PENDING';
export const GET_CLIENT_MEDICAL_HISTORY_REJECTED =
  'GET_CLIENT_MEDICAL_HISTORY_REJECTED';

export const GET_CLIENT_MEDICAL_HISTORY_FULFILLED =
  'GET_CLIENT_MEDICAL_HISTORY_FULFILLED';

// VISIT TYPES
export const SET_VISIT = 'SET_VISIT';
