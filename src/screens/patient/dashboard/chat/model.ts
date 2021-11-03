import { route } from '~/utils/constants';
import { MedCross, Femme, Happy, MobilePhone } from '~/svgs';

export type Item = {
    title: string;
    description: string;
    destination: route | undefined;
    icon: any;
};

export type Tab = {
    title: string;
};

export const navItems: Item[] = [
    {
        title: 'chat.primaryCare.title',
        description: 'chat.primaryCare.description',
        destination: route.ask,
        icon: MedCross,
    },
    {
        title: 'chat.womensHealth.title',
        description: 'chat.womensHealth.description',
        destination: route.ask,
        icon: Femme,
    },
    {
        title: 'chat.mentalHealth.title',
        description: 'chat.mentalHealth.description',
        destination: route.ask,
        icon: Happy,
    },
    {
        title: 'chat.techSupport.title',
        description: 'chat.techSupport.description',
        destination: undefined,
        icon: MobilePhone,
    },
];

export const chatTabs: Tab[] = [
    {
        title: 'OPEN CHATS',
    },
    {
        title: 'RESOLVED',
    },
];
