import {screenNames, icons} from '../../../../../utils/constants';
import {getReduxState} from '../../../../../utils/helper';

const {language} = getReduxState();

export default [
  {
    title: language.dashboard.getTreatment,
    destination: screenNames.requestVisit,
    icon: icons.bandAid,
    features: 'video',
  },
  {
    title: language.dashboard.mySquad,
    destination: screenNames.careSquad,
    icon: icons.squad,
    features: '',
  },
  {
    title: language.dashboard.chatExpert,
    destination: screenNames.ask,
    icon: icons.chat,
    features: 'chat',
  },
  {
    title: language.dashboard.myHistory,
    destination: screenNames.healthHistory,
    icon: icons.clipboard,
    features: '',
  },
  {
    title: language.dashboard.reminders,
    destination: screenNames.appointments,
    icon: icons.reminders,
    features: 'video',
  },
  {
    title: language.dashboard.sos,
    destination: screenNames.sos,
    icon: icons.sos,
    features: '',
  },
];
