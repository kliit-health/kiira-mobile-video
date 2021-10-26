import { all } from 'redux-saga/effects';
import account from '../../screens/patient/account/saga';
import addProfile from '../../screens/patient/account/settings/addProfileData/saga';
import agreements from './agreements';
import agreeToTerms from '../../screens/auth/newUser/saga';
import appointments from '../../screens/patient/dashboard/appointments/saga';
import ask from '../../screens/patient/dashboard/ask/saga';
import askExpert from '../../screens/provider/ask/saga';
import assessment from './assessment';
import bookVisit from '../../screens/patient/dashboard/getTreatment/bookVisit/saga';
import changePassword from '../../screens/patient/account/settings/changePassword/saga';
import chat from '../../screens/patient/dashboard/ask/chat/saga';
import chatExpert from '../../screens/provider/ask/chat/saga';
import chooseExpert from '../../screens/patient/dashboard/ask/chooseExpert/saga';
import clientMedicalHistory from './medicalHistory';
import expertAppointments from '../../screens/provider/appointments/saga';
import expertPatients from '../../screens/provider/patients/saga';
import expertProfile from '../../screens/common/expertProfile/saga';
import expertSchedule from '../../screens/patient/dashboard/getTreatment/expertSchedule/saga';
import experts from './experts';
import favoriteExperts from './favoriteExperts';
import forgotPassword from '../../screens/auth/forgotPassword/saga';
import healthHistory from './healthHistory';
import licenses from './licenses';
import login from '../../screens/auth/login/saga';
import messaging from './messaging';
import newUser from '../../screens/auth/chatBot/saga';
import patientDetails from '../../screens/provider/appointments/patientProfile/saga';
import payment from '../../screens/patient/dashboard/getTreatment/payment/saga';
import plan from './plan';
import plans from './plans';
import privacyPolicy from './privacyPolicy';
import questions from './questions';
import reschedule from '../../screens/patient/dashboard/appointments/rescheduleVisit/saga';
import setting from '../../screens/patient/account/settings/saga';
import settingExpert from '../../screens/provider/account/settings/saga';
import subscription from './subscription';
import verification from '../../screens/auth/verify/saga';
import termsAndConditions from './termsAndConditions';
import treatmentHistory from '../../screens/patient/dashboard/careSquad/treatmentHistory/saga';
import twillio from './twillio';
import user from './user';
import updateExpert from '../../screens/provider/account/updateAvailablity/saga';

export default function* rootSaga() {
  yield all([
    account(),
    addProfile(),
    agreements(),
    agreeToTerms(),
    appointments(),
    askExpert(),
    ask(),
    assessment(),
    bookVisit(),
    changePassword(),
    chat(),
    chatExpert(),
    chooseExpert(),
    clientMedicalHistory(),
    expertAppointments(),
    expertPatients(),
    expertProfile(),
    expertSchedule(),
    experts(),
    favoriteExperts(),
    forgotPassword(),
    healthHistory(),
    licenses(),
    login(),
    messaging(),
    newUser(),
    patientDetails(),
    payment(),
    plan(),
    plans(),
    privacyPolicy(),
    questions(),
    reschedule(),
    settingExpert(),
    setting(),
    subscription(),
    termsAndConditions(),
    twillio(),
    verification(),
    treatmentHistory(),
    updateExpert(),
    user(),
  ]);
}
