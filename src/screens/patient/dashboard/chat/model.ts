import { route } from '~/utils/constants';
import { MedCross, Femme, Happy, MobilePhone } from '~/svgs';

export type Item = {
    title: string;
    description: string;
    destination: route | undefined;
    type: string;
    icon: any;
};

export type Tab = {
    title: string;
    label: string,
};

export const navItems: Item[] = [
    {
        title: 'chat.primaryCare.title',
        description: 'chat.primaryCare.description',
        destination: route.chatProvider,
        type: 'Primary Care',
        icon: MedCross,
    },
    {
        title: 'chat.womensHealth.title',
        description: 'chat.womensHealth.description',
        destination: route.chatProvider,
        type: "Women's Care",
        icon: Femme,
    },
    {
        title: 'chat.mentalHealth.title',
        description: 'chat.mentalHealth.description',
        destination: route.chatProvider,
        type: 'Mental Health',
        icon: Happy,
    },
    {
        title: 'chat.techSupport.title',
        description: 'chat.techSupport.description',
        destination: route.chooseSupport,
        type: 'Tech Support',
        icon: MobilePhone,
    },
];

export const chatTabs: Tab[] = [
    {
        title: 'OPEN CHATS',
        label: '',
    },
    {
        title: 'RESOLVED',
        label: '',
    },
];
