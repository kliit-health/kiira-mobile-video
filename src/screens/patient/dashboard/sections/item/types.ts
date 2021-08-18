import { feature, route } from '~/utils/constants';

export type Item = {
    title: string;
    description: string;
    destination: route;
    icon: any;
    features: feature;
};
