import {combineReducers} from 'redux';

import accountReducer from '../../screens/patient/account/reducer';
import agreeToTermsReducer from '../../screens/auth/newUser/reducer';
import addProfileReducer from '../../screens/patient/account/settings/addProfileData/reducer';
import addNewProfileReducer from '../../screens/auth/chatBot/reducer';
import appointmentsReducer from '../../screens/patient/dashboard/appointments/reducer';
import askReducer from '../../screens/patient/dashboard/ask/reducer';
// import askExpertReducer from '../../screens/ask/expert/reducer';
import authLoadingReducer from '../../screens/auth/authLoading/reducer';
import bookVisitReducer from '../../screens/patient/dashboard/getTreatment/bookVisit/reducer';
import changePasswordReducer from '../../screens/patient/account/settings/changePassword/reducer';
import chat from '../../screens/patient/dashboard/ask/chat/reducer';
// import chatExpertReducer from '../../screens/chat/expert/reducer';
import chooseExpertReducer from '../../screens/patient/dashboard/ask/chooseExpert/reducer';
// import expertAppointmentsReducer from '../../screens/appointments/expert/reducer';
// import expertPatientsReducer from '../../screens/patients/reducer';
import expertProfileReducer from '../../screens/patient/dashboard/appointments/reducer';
import expertScheduleReducer from '../../screens/patient/dashboard/getTreatment/expertSchedule/reducer';
import forgotPasswordReducer from '../../screens/auth/forgotPassword/reducer';
import loaderReducer from '../../components/customLoader/reducer';
import loginReducer from '../../screens/auth/login/reducer';
import modalReducer from '../../components/customModal/reducer';
import paymentReducer from '../../screens/patient/dashboard/getTreatment/payment/reducer';
import privacyReducer from '../../screens/common/privacyPolicy/reducer';
import rescheduleReducer from '../../screens/patient/dashboard/appointments/rescheduleVisit/reducer';
// import settingExpertReducer from '../../screens/setting/expert/reducer';
import settingReducer from '../../screens/patient/account/settings/reducer';
import signupReducer from '../../screens/auth/signUp/reducer';
import termsReducer from '../../screens/common/termsAndConditions/reducer';
import toastReducer from '../../components/customToast/reducer';
import verifyReducer from '../../screens/auth/verify/reducer';
import healthHistory from '../../screens/patient/dashboard/healthHistory/reducer';
import careSquad from '../../screens/patient/dashboard/careSquad/reducer';
import navigator from './navigator';
import treatmentHistory from '../../screens/patient/dashboard/careSquad/treatmentHistory/reducer';
// import updateExpertReducer from '../../screens/updateAvailablity/reducer';
import agreements from '../../screens/patient/dashboard/getTreatment/agreements/reducer';
import userDetails from './userDetails';
import clientMedicalHistory from './medicalHistory';
import visitReducer from '../../screens/patient/dashboard/appointments/visit/reducer';
// import medicalHistory from '../../screens/patientProfile/reducer';

export default combineReducers({
  accountReducer,
  agreeToTermsReducer,
  addProfileReducer,
  addNewProfileReducer,
  appointmentsReducer,
  askReducer,
  // askExpertReducer,
  authLoadingReducer,
  bookVisitReducer,
  changePasswordReducer,
  chat,
  // chatExpertReducer,
  chooseExpertReducer,
  // expertAppointmentsReducer,
  // expertPatientsReducer,
  expertProfileReducer,
  expertScheduleReducer,
  forgotPasswordReducer,
  healthHistory,
  loaderReducer,
  loginReducer,
  modalReducer,
  paymentReducer,
  privacyReducer,
  rescheduleReducer,
  // settingExpertReducer,
  settingReducer,
  signupReducer,
  termsReducer,
  toastReducer,
  verifyReducer,
  careSquad,
  navigator,
  treatmentHistory,
  // updateExpertReducer,
  agreements,
  userDetails,
  visitReducer,
  // medicalHistory,
  clientMedicalHistory,
});
