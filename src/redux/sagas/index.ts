import { all } from 'redux-saga/effects';
import account from './account';
import activate from './activate';
import agreements from './agreements';
import appointments from './appointments';
import ask from './ask';
import askExpert from '../../screens/provider/ask/saga';
import chat from './chat';
import chatExpert from '../../screens/provider/ask/chat/saga';
import chooseExpert from './chooseExpert';
import clientMedicalHistory from './medicalHistory';
import expertAppointments from '../../screens/provider/appointments/saga';
import expertPatients from '../../screens/provider/patients/saga';
import expertProfile from '../../screens/common/expertProfile/saga';
import experts from './experts';
import favoriteExperts from './favoriteExperts';
import forgotPassword from './forgotPassword';
import healthHistory from './healthHistory';
import licenses from './licenses';
import login from './login';
import messaging from './messaging';
import newUser from '../../screens/auth/chatBot/saga';
import patientDetails from '../../screens/provider/appointments/patientProfile/saga';
import plan from './plan';
import plans from './plans';
import privacyPolicy from './privacyPolicy';
import questions from './questions';
import settingExpert from '../../screens/provider/account/settings/saga';
import subscription from './subscription';
import termsAndConditions from './termsAndConditions';
import treatmentHistory from '../../screens/patient/dashboard/careSquad/treatmentHistory/saga';
import twillio from './twillio';
import user from './user';
import updateExpert from '../../screens/provider/account/updateAvailablity/saga';

export default function* rootSaga() {
    yield all([
        account(),
        activate(),
        agreements(),
        appointments(),
        askExpert(),
        ask(),
        chat(),
        chatExpert(),
        chooseExpert(),
        clientMedicalHistory(),
        expertAppointments(),
        expertPatients(),
        expertProfile(),
        experts(),
        favoriteExperts(),
        forgotPassword(),
        healthHistory(),
        licenses(),
        login(),
        messaging(),
        newUser(),
        patientDetails(),
        plan(),
        plans(),
        privacyPolicy(),
        questions(),
        settingExpert(),
        subscription(),
        termsAndConditions(),
        twillio(),
        treatmentHistory(),
        updateExpert(),
        user(),
    ]);
}
