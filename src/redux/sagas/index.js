import {all} from 'redux-saga/effects';
import accountSaga from '../../screens/account/saga';
import addProfileSaga from '../../screens/addProfileData/saga';
import agreeToTermsSaga from '../../screens/newUser/sagas';
import appointmentsSaga from '../../screens/appointments/saga';
import askExpertSaga from '../../screens/ask/expert/saga';
import askSaga from '../../screens/ask/saga';
import authLoadingSaga from '../../screens/authLoading/saga';
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
import healthHistorySaga from '../../screens/healthHistory/saga';
import loginSaga from '../../screens/login/saga';
import newUserSaga from '../../screens/chatBot/saga';
import paymentSaga from '../../screens/payment/saga';
import privacySaga from '../../screens/privacyPolicy/saga';
import rescheduleSaga from '../../screens/rescheduleVisit/saga';
import settingExpertSaga from '../../screens/setting/expert/saga';
import settingSaga from '../../screens/setting/saga';
import signupSaga from '../../screens/signUp/saga';
import termsSaga from '../../screens/termsAndConditions/saga';
import verificationSaga from '../../screens/verify/saga';
import careSquadSaga from '../../screens/careSquad/saga';
import treatmentHistorySaga from '../../screens/treatmentHistory/saga';
import updateExpertSaga from '../../screens/updateAvailablity/saga';
import agreementsSaga from '../../screens/agreements/saga';
import userDetailsSaga from './userDetails';
import patientDetails from '../../screens/patientProfile/saga';
import clientMedicalHistory from './medicalHistory';
import visitSaga from '../../screens/visit/saga';
import changePlan from '../../screens/changePlan/saga';

export default function* rootSaga() {
  yield all([
    accountSaga(),
    addProfileSaga(),
    agreeToTermsSaga(),
    appointmentsSaga(),
    askExpertSaga(),
    askSaga(),
    authLoadingSaga(),
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
    healthHistorySaga(),
    loginSaga(),
    newUserSaga(),
    paymentSaga(),
    privacySaga(),
    rescheduleSaga(),
    settingExpertSaga(),
    settingSaga(),
    signupSaga(),
    termsSaga(),
    verificationSaga(),
    careSquadSaga(),
    treatmentHistorySaga(),
    updateExpertSaga(),
    agreementsSaga(),
    userDetailsSaga(),
    patientDetails(),
    clientMedicalHistory(),
    visitSaga(),
    changePlan(),
  ]);
}
