import {screenNames} from '~/utils/constants';
import * as SVG from '~/svgs';

export default [
  {
    title: `dashboard.getTreatment`,
    destination: screenNames.requestVisit,
    Icon: SVG.Camera,
    features: 'video',
  },
  {
    title: `dashboard.mySquad`,
    destination: screenNames.careSquad,
    Icon: SVG.Squad,
    features: '',
  },
  {
    title: `dashboard.chatExpert`,
    destination: screenNames.ask,
    Icon: SVG.Chat,
    features: 'chat',
  },
  {
    title: `dashboard.myHistory`,
    destination: screenNames.healthHistory,
    Icon: SVG.ClockBack,
    features: '',
  },
  {
    title: `dashboard.reminders`,
    destination: screenNames.appointments,
    Icon: SVG.Calendar,
    features: 'video',
  },
  {
    title: `dashboard.sos`,
    destination: screenNames.sos,
    Icon: SVG.Caution,
    features: '',
  },
];
