import {screenNames, icons} from 'utils/constants';

export default [
  {
    title: `dashboard.getTreatment`,
    destination: screenNames.requestVisit,
    icon: icons.bandAid,
    features: 'video',
  },
  {
    title: `dashboard.mySquad`,
    destination: screenNames.careSquad,
    icon: icons.squad,
    features: '',
  },
  {
    title: `dashboard.chatExpert`,
    destination: screenNames.ask,
    icon: icons.chat,
    features: 'chat',
  },
  {
    title: `dashboard.myHistory`,
    destination: screenNames.healthHistory,
    icon: icons.clipboard,
    features: '',
  },
  {
    title: `dashboard.reminders`,
    destination: screenNames.appointments,
    icon: icons.reminders,
    features: 'video',
  },
  {
    title: `dashboard.sos`,
    destination: screenNames.sos,
    icon: icons.sos,
    features: '',
  },
];
