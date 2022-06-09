import { route, feature } from '~/utils/constants';
import { Camera, Chat, Calendar, Urgent } from '~/svgs';

export type Item = {
  title: string;
  description: string;
  destination: route | undefined;
  icon: any;
  features: feature | undefined;
};

const model: Item[] = [
  {
    title: 'dashboard.book',
    description: 'dashboard.talk',
    destination: route.book,
    icon: Camera,
    features: feature.video,
  },
  {
    title: 'dashboard.chatExpert',
    description: 'dashboard.getHelp',
    destination: route.chat,
    icon: Chat,
    features: undefined,
  },
  {
    title: 'dashboard.appointments',
    description: 'dashboard.seeUpcoming',
    destination: route.appointments,
    icon: Calendar,
    features: feature.video,
  },
  {
    title: 'dashboard.sos',
    description: 'dashboard.urgent',
    destination: undefined,
    icon: Urgent,
    features: feature.urgent,
  },
];

export default model;
