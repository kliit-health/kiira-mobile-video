import { route, feature } from '~/utils/constants';
import { Camera, Chat, Squad, Sheet, Calendar } from '~/svgs';

export type Item = {
  title: string;
  description: string;
  destination: route;
  icon: any;
  feature: feature | undefined;
};

const model: Item[] = [
  {
    title: 'dashboard.getTreatment',
    description: 'dashboard.talk',
    destination: route.requestVisit,
    icon: Camera,
    feature: feature.video,
  },
  {
    title: 'dashboard.chatExpert',
    description: 'dashboard.getHelp',
    destination: route.ask,
    icon: Chat,
    feature: undefined,
  },
  {
    title: 'dashboard.mySquad',
    description: 'dashboard.buildTeam',
    destination: route.careSquad,
    icon: Squad,
    feature: undefined,
  },
  {
    title: 'dashboard.appointments',
    description: 'dashboard.seeUpcoming',
    destination: route.appointments,
    icon: Calendar,
    feature: feature.video,
  },
  {
    title: 'dashboard.myHistory',
    description: 'dashboard.provideInformation',
    destination: route.healthHistory,
    icon: Sheet,
    feature: undefined,
  },
];

export default model;
