import { routes, features } from '~/utils/constants';
import { Camera, Chat, Squad, Sheet, Calendar } from '~/svgs';

export type Item = {
  title: string;
  description: string;
  destination: routes;
  icon: any;
  features: features | undefined;
};

const model: Item[] = [
  {
    title: 'dashboard.getTreatment',
    description: 'dashboard.talk',
    destination: routes.requestVisit,
    icon: Camera,
    features: features.video,
  },
  {
    title: 'dashboard.chatExpert',
    description: 'dashboard.getHelp',
    destination: routes.ask,
    icon: Chat,
    features: undefined,
  },
  {
    title: 'dashboard.mySquad',
    description: 'dashboard.buildTeam',
    destination: routes.careSquad,
    icon: Squad,
    features: undefined,
  },
  {
    title: 'dashboard.appointments',
    description: 'dashboard.seeUpcoming',
    destination: routes.appointments,
    icon: Calendar,
    features: features.video,
  },
  {
    title: 'dashboard.myHistory',
    description: 'dashboard.provideInformation',
    destination: routes.healthHistory,
    icon: Sheet,
    features: undefined,
  },
];

export default model;
