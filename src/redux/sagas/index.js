import {all} from 'redux-saga/effects';
import accountSaga from '../../screens/patient/account/saga';
import addProfileSaga from '../../screens/patient/account/settings/addProfileData/saga';
import agreeToTermsSaga from '../../screens/auth/newUser/saga';
import appointmentsSaga from '../../screens/patient/dashboard/appointments/saga';
// import askExpertSaga from '../../screens/ask/expert/saga';
import askSaga from '../../screens/patient/dashboard/ask/saga';
import authLoadingSaga from '../../screens/auth/authLoading/saga';
import bookVisitSaga from '../../screens/patient/dashboard/getTreatment/bookVisit/saga';
import changePasswordSaga from '../../screens/patient/account/settings/changePassword/saga';
import chatSaga from '../../screens/patient/dashboard/ask/chat/saga';
// import chatExpertSaga from '../../screens/chat/expert/saga';
import chooseExpertSaga from '../../screens/patient/dashboard/ask/chooseExpert/saga';
// import expertAppointmentsSaga from '../../screens/appointments/expert/saga';
// import expertPatientsSaga from '../../screens/patients/saga';
// import expertProfileSaga from '../../screens/expertProfile/saga';
import expertScheduleSaga from '../../screens/patient/dashboard/getTreatment/expertSchedule/saga';
import forgotPasswordSaga from '../../screens/auth/forgotPassword/saga';
import healthHistorySaga from '../../screens/patient/dashboard/healthHistory/saga';
import loginSaga from '../../screens/auth/login/saga';
import newUserSaga from '../../screens/auth/newUser/saga';
import paymentSaga from '../../screens/patient/dashboard/getTreatment/payment/saga';
import privacySaga from '../../screens/common/privacyPolicy/saga';
import rescheduleSaga from '../../screens/patient/dashboard/appointments/rescheduleVisit/saga';
// import settingExpertSaga from '../../screens/setting/expert/saga';
import settingsSaga from '../../screens/patient/account/settings/saga';
import signupSaga from '../../screens/auth/signUp/saga';
import termsSaga from '../../screens/common/termsAndConditions/saga';
import verificationSaga from '../../screens/auth/verify/saga';
import careSquadSaga from '../../screens/patient/dashboard/careSquad/saga';
import treatmentHistorySaga from '../../screens/patient/dashboard/careSquad/treatmentHistory/saga';
// import updateExpertSaga from '../../screens/updateAvailablity/saga';
import agreementsSaga from '../../screens/patient/dashboard/getTreatment/agreements/saga';
import userDetailsSaga from './userDetails';
// import patientDetails from '../../screens/patientProfile/saga';
import clientMedicalHistory from './medicalHistory';
import visitSaga from '../../screens/patient/dashboard/appointments/visit/saga';

export default function* rootSaga() {
  yield all([
    accountSaga(),
    addProfileSaga(),
    agreeToTermsSaga(),
    appointmentsSaga(),
    // askExpertSaga(),
    askSaga(),
    authLoadingSaga(),
    bookVisitSaga(),
    changePasswordSaga(),
    chatSaga(),
    // chatExpertSaga(),
    chooseExpertSaga(),
    // expertAppointmentsSaga(),
    // expertPatientsSaga(),
    // expertProfileSaga(),
    expertScheduleSaga(),
    forgotPasswordSaga(),
    healthHistorySaga(),
    loginSaga(),
    newUserSaga(),
    paymentSaga(),
    privacySaga(),
    rescheduleSaga(),
    // settingExpertSaga(),
    settingsSaga(),
    signupSaga(),
    termsSaga(),
    verificationSaga(),
    careSquadSaga(),
    treatmentHistorySaga(),
    // updateExpertSaga(),
    agreementsSaga(),
    userDetailsSaga(),
    // patientDetails(),
    clientMedicalHistory(),
    visitSaga(),
  ]);
}
