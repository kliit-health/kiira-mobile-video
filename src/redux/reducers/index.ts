import { combineReducers } from 'redux';
import account from './account';
import activate from './activate';
import agreeToTerms from '../../screens/auth/newUser/reducer';
import agreements from './agreements';
import addNewProfile from '../../screens/auth/chatBot/reducer';
import appointments from '../../screens/patient/dashboard/appointments/reducer';
import assessment from '../reducers/assessment';
import ask from '../../screens/patient/dashboard/ask/reducer';
import askExpert from '../../screens/provider/ask/reducer';
import bookVisit from '../../screens/patient/dashboard/getTreatment/bookVisit/reducer';
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
import forgotPassword from './forgotPassword';
import healthHistory from './healthHistory';
import language from './language';
import licenses from './licenses';
import loader from '../../components/customLoader/reducer';
import login from './login';
import medicalHistory from '../../screens/provider/appointments/patientProfile/reducer';
import messaging from './messaging';
import modal from '../../components/customModal/reducer';
import newUser from '../../screens/auth/newUser/reducer';
import payment from '../../screens/patient/dashboard/getTreatment/payment/reducer';
import plan from './plan';
import plans from './plans';
import privacyPolicy from './privacyPolicy';
import questions from './questions';
import reschedule from '../../screens/patient/dashboard/appointments/rescheduleVisit/reducer';
import settingsExpert from '../../screens/provider/account/settings/reducer';
import subscription from './subscription';
import termsAndConditions from './termsAndConditions';
import toast from '../../components/customToast/reducer';
import navigator from './navigator';
import treatmentHistory from '../../screens/patient/dashboard/careSquad/treatmentHistory/reducer';
import twillio from './twillio';
import user from './user';
import updateExpert from '../../screens/provider/account/updateAvailablity/reducer';
import visit from '../../screens/patient/dashboard/appointments/visit/reducer';

export const rootReducer = combineReducers({
    account,
    activate,
    agreeToTerms,
    addNewProfile,
    agreements,
    appointments,
    ask,
    askExpert,
    assessment,
    bookVisit,
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
    language,
    licenses,
    loader,
    login,
    medicalHistory,
    messaging,
    modal,
    navigator,
    newUser,
    payment,
    plan,
    plans,
    privacyPolicy,
    questions,
    reschedule,
    settingsExpert,
    subscription,
    termsAndConditions,
    treatmentHistory,
    twillio,
    toast,
    updateExpert,
    user,
    visit,
});

export type RootState = ReturnType<typeof rootReducer>;
