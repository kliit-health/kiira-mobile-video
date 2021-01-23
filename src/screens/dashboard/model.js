import intl from '../../utils/localization';
import {screenNames, icons} from '../../utils/constants';

export const model = {
  routes: [
    {
      title: intl.en.dashboard.getTreatment,
      destination: screenNames.requestVisit,
      icon: icons.bandAid,
    },
    {
      title: intl.en.dashboard.mySquad,
      destination: screenNames.careSquad,
      icon: icons.squad,
    },

    {
      title: intl.en.dashboard.myHistory,
      destination: screenNames.healthHistory,
      icon: icons.clipboard,
    },
    {
      title: intl.en.dashboard.chatExpert,
      destination: screenNames.ask,
      icon: icons.chat,
    },
    {
      title: intl.en.dashboard.reminders,
      destination: screenNames.appointments,
      icon: icons.reminders,
    },
    {
      title: intl.en.dashboard.sos,
      destination: screenNames.sos,
      icon: icons.sos,
    },
  ],
};
