import {all} from 'redux-saga/effects';
import accountSaga from '../../screens/account/saga';
import addProfileSaga from '../../screens/addProfileData/saga';
import agreeToTermsSaga from '../../screens/newUser/sagas';
import appointmentsSaga from '../../screens/appointments/saga';
import askExpertSaga from '../../screens/ask/expert/saga';
import askSaga from '../../screens/ask/saga';
import bookVisitSaga from '../../screens/bookVisit/saga';
import changePasswordSaga from '../../screens/changePassword/saga';
import chatSaga from '../../screens/chat/saga';
import chatExpertSaga from '../../screens/chat/expert/saga';
import chooseExpertSaga from '../../screens/chooseExpert/saga';
import expertAppointmentsSaga from '../../screens/appointments/expert/saga';
import expertPatientsSaga from '../../screens/patients/saga';
import expertProfileSaga from '../../screens/expertProfile/saga';
import expertScheduleSaga from '../../screens/expertSchedule/saga';
import forgotPasswordSaga from '../../screens/forgotPassword/saga';
import loginSaga from '../../screens/login/saga';
import newUserSaga from '../../screens/chatBot/saga';
import paymentSaga from '../../screens/payment/saga';
import rescheduleSaga from '../../screens/rescheduleVisit/saga';
import settingExpertSaga from '../../screens/setting/expert/saga';
import settingSaga from '../../screens/setting/saga';
import signupSaga from '../../screens/signUp/saga';
import verificationSaga from '../../screens/verify/saga';
import treatmentHistorySaga from '../../screens/treatmentHistory/saga';
import updateExpertSaga from '../../screens/updateAvailablity/saga';
import agreements from './agreements';
import user from './user';
import patientDetails from '../../screens/patientProfile/saga';
import clientMedicalHistory from './medicalHistory';
import visitSaga from '../../screens/visit/saga';
import subscription from './subscription';
import termsAndConditions from './termsAndConditions';
import privacyPolicy from './privacyPolicy';
import licenses from './licenses';
import healthHistory from './healthHistory';
import plans from './plans';
import plan from './plan';
import experts from './experts';
import questions from './questions';
import favoriteExperts from './favoriteExperts';
import messaging from './messaging';

export default function* rootSaga() {
  yield all([
    accountSaga(),
    addProfileSaga(),
    agreeToTermsSaga(),
    appointmentsSaga(),
    askExpertSaga(),
    askSaga(),
    bookVisitSaga(),
    changePasswordSaga(),
    chatSaga(),
    chatExpertSaga(),
    chooseExpertSaga(),
    expertAppointmentsSaga(),
    expertPatientsSaga(),
    expertProfileSaga(),
    expertScheduleSaga(),
    forgotPasswordSaga(),
    loginSaga(),
    newUserSaga(),
    paymentSaga(),
    rescheduleSaga(),
    settingExpertSaga(),
    settingSaga(),
    signupSaga(),
    verificationSaga(),
    treatmentHistorySaga(),
    updateExpertSaga(),
    agreements(),
    user(),
    patientDetails(),
    clientMedicalHistory(),
    visitSaga(),
    subscription(),
    termsAndConditions(),
    privacyPolicy(),
    licenses(),
    healthHistory(),
    plan(),
    plans(),
    experts(),
    questions(),
    favoriteExperts(),
    messaging(),
  ]);
}
