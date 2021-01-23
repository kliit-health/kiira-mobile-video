import {combineReducers} from 'redux';
import accountReducer from '../../screens/account/reducer';
import agreeToTermsReducer from '../../screens/newUser/reducer';
import addProfileReducer from '../../screens/addProfileData/reducer';
import addNewProfileReducer from '../../screens/chatBot/reducer';
import appointmentsReducer from '../../screens/appointments/reducer';
import askReducer from '../../screens/ask/reducer';
import askExpertReducer from '../../screens/ask/expert/reducer';
import authLoadingReducer from '../../screens/authLoading/reducer';
import bookVisitReducer from '../../screens/bookVisit/reducer';
import changePasswordReducer from '../../screens/changePassword/reducer';
import chat from '../../screens/chat/reducer';
import chatExpertReducer from '../../screens/chat/expert/reducer';
import chooseExpertReducer from '../../screens/chooseExpert/reducer';
import expertAppointmentsReducer from '../../screens/appointments/expert/reducer';
import expertPatientsReducer from '../../screens/patients/reducer';
import expertProfileReducer from '../../screens/expertProfile/reducer';
import expertScheduleReducer from '../../screens/expertSchedule/reducer';
import forgotPasswordReducer from '../../screens/forgotPassword/reducer';
import loaderReducer from '../../components/customLoader/reducer';
import loginReducer from '../../screens/login/reducer';
import modalReducer from '../../components/customModal/reducer';
import paymentReducer from '../../screens/payment/reducer';
import rescheduleReducer from '../../screens/rescheduleVisit/reducer';
import settingExpertReducer from '../../screens/setting/expert/reducer';
import settingReducer from '../../screens/setting/reducer';
import signupReducer from '../../screens/signUp/reducer';
import toastReducer from '../../components/customToast/reducer';
import verifyReducer from '../../screens/verify/reducer';
import navigator from './navigator';
import treatmentHistory from '../../screens/treatmentHistory/reducer';
import updateExpertReducer from '../../screens/updateAvailablity/reducer';
import agreements from './agreements';
import user from './user';
import clientMedicalHistory from './medicalHistory';
import visitReducer from '../../screens/visit/reducer';
import medicalHistory from '../../screens/patientProfile/reducer';
import plan from './plan';
import subscription from './subscription';
import termsAndConditions from './termsAndConditions';
import privacyPolicy from './privacyPolicy';
import licenses from './licenses';
import healthHistory from './healthHistory';
import plans from './plans';
import experts from './experts';
import questions from './questions';
import favoriteExperts from './favoriteExperts';

export default combineReducers({
  accountReducer,
  agreeToTermsReducer,
  addProfileReducer,
  addNewProfileReducer,
  appointmentsReducer,
  askReducer,
  askExpertReducer,
  authLoadingReducer,
  bookVisitReducer,
  changePasswordReducer,
  chat,
  chatExpertReducer,
  chooseExpertReducer,
  expertAppointmentsReducer,
  expertPatientsReducer,
  expertProfileReducer,
  expertScheduleReducer,
  forgotPasswordReducer,
  healthHistory,
  loaderReducer,
  loginReducer,
  modalReducer,
  paymentReducer,
  rescheduleReducer,
  settingExpertReducer,
  settingReducer,
  signupReducer,
  toastReducer,
  verifyReducer,
  navigator,
  treatmentHistory,
  updateExpertReducer,
  agreements,
  user,
  visitReducer,
  medicalHistory,
  clientMedicalHistory,
  plan,
  termsAndConditions,
  privacyPolicy,
  licenses,
  subscription,
  plans,
  experts,
  questions,
  favoriteExperts,
});
