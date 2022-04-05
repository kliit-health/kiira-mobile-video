import { route, feature } from '~/utils/constants';
import { Camera, Chat, Squad, Sheet, Calendar, Urgent } from '~/svgs';

export type Item = {
    title: string;
    description: string;
    destination: route | undefined;
    icon: any;
    features: feature | undefined;
};

const model: Item[] = [
    {
        title: 'dashboard.getTreatment',
        description: 'dashboard.talk',
        destination: route.requestVisit,
        icon: Camera,
        features: feature.video,
    },
    {
        title: 'dashboard.chatExpert',
        description: 'dashboard.getHelp',
        destination: route.ask,
        icon: Chat,
        features: undefined,
    },
    {
        title: 'dashboard.mySquad',
        description: 'dashboard.buildTeam',
        destination: route.careSquad,
        icon: Squad,
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
        title: 'dashboard.myHistory',
        description: 'dashboard.provideInformation',
        destination: route.healthHistory,
        icon: Sheet,
        features: undefined,
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
