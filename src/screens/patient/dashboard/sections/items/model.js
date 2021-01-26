import intl from '../../../../../utils/localization';
import {screenNames, icons} from '../../../../../utils/constants';

export default [
  {
    title: intl.en.dashboard.getTreatment,
    destination: screenNames.requestVisit,
    icon: icons.bandAid,
    features: 'video',
  },
  {
    title: intl.en.dashboard.mySquad,
    destination: screenNames.careSquad,
    icon: icons.squad,
    features: '',
  },
  {
    title: intl.en.dashboard.chatExpert,
    destination: screenNames.ask,
    icon: icons.chat,
    features: 'chat',
  },
  {
    title: intl.en.dashboard.myHistory,
    destination: screenNames.healthHistory,
    icon: icons.clipboard,
    features: '',
  },
  {
    title: intl.en.dashboard.reminders,
    destination: screenNames.appointments,
    icon: icons.reminders,
    features: 'video',
  },
  {
    title: intl.en.dashboard.sos,
    destination: screenNames.sos,
    icon: icons.sos,
    features: '',
  },
];
