import {combineReducers} from 'redux';
import account from '../../screens/patient/account/reducer';
import agreeToTerms from '../../screens/auth/newUser/reducer';
import agreements from './agreements';
import addProfile from '../../screens/patient/account/settings/addProfileData/reducer';
import addNewProfile from '../../screens/auth/chatBot/reducer';
import appointments from '../../screens/patient/dashboard/appointments/reducer';
import ask from '../../screens/patient/dashboard/ask/reducer';
import askExpert from '../../screens/provider/ask/reducer';
import authLoading from '../../screens/auth/authLoading/reducer';
import bookVisit from '../../screens/patient/dashboard/getTreatment/bookVisit/reducer';
import changePassword from '../../screens/patient/account/settings/changePassword/reducer';
import chat from '../../screens/patient/dashboard/ask/chat/reducer';
import chatExpert from '../../screens/provider/ask/chat/reducer';
import chooseExpert from '../../screens/patient/dashboard/ask/chooseExpert/reducer';
import clientMedicalHistory from './medicalHistory';
import expertAppointments from '../../screens/provider/appointments/reducer';
import expertPatients from '../../screens/provider/patients/reducer';
import expertProfile from '../../screens/common/expertProfile/reducer';
import expertSchedule from '../../screens/patient/dashboard/getTreatment/expertSchedule/reducer';
import experts from './experts';
import favoriteExperts from './favoriteExperts';
import forgotPassword from '../../screens/auth/forgotPassword/reducer';
import healthHistory from './healthHistory';
import licenses from './licenses';
import loader from '../../components/customLoader/reducer';
import login from '../../screens/auth/login/reducer';
import medicalHistory from '../../screens/provider/appointments/patientProfile/reducer';
import messaging from './messaging';
import modal from '../../components/customModal/reducer';
import payment from '../../screens/patient/dashboard/getTreatment/payment/reducer';
import plan from './plan';
import plans from './plans';
import privacyPolicy from './privacyPolicy';
import questions from './questions';
import reschedule from '../../screens/patient/dashboard/appointments/rescheduleVisit/reducer';
import settings from '../../screens/patient/account/settings/reducer';
import settingsExpert from '../../screens/provider/account/settings/reducer';
import signup from '../../screens/auth/signUp/reducer';
import subscription from './subscription';
import termsAndConditions from './termsAndConditions';
import toast from '../../components/customToast/reducer';
import verify from '../../screens/auth/verify/reducer';
import navigator from './navigator';
import treatmentHistory from '../../screens/patient/dashboard/careSquad/treatmentHistory/reducer';
import user from './user';
import updateExpert from '../../screens/provider/account/updateAvailablity/reducer';
import visit from '../../screens/patient/dashboard/appointments/visit/reducer';

export default combineReducers({
  account,
  agreeToTerms,
  addProfile,
  addNewProfile,
  agreements,
  appointments,
  ask,
  askExpert,
  authLoading,
  bookVisit,
  changePassword,
  chat,
  chatExpert,
  chooseExpert,
  clientMedicalHistory,
  expertAppointments,
  expertPatients,
  expertProfile,
  expertSchedule,
  experts,
  favoriteExperts,
  forgotPassword,
  healthHistory,
  licenses,
  loader,
  login,
  medicalHistory,
  messaging,
  modal,
  navigator,
  payment,
  plan,
  plans,
  privacyPolicy,
  questions,
  reschedule,
  settings,
  settingsExpert,
  signup,
  subscription,
  termsAndConditions,
  treatmentHistory,
  toast,
  updateExpert,
  user,
  verify,
  visit,
});
