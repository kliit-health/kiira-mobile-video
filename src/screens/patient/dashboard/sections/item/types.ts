import { features, routes } from '~/utils/constants';

export type Item = {
  title: string;
  description: string;
  destination: routes;
  icon: any;
  features: features;
};
