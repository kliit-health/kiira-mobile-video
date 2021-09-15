import { NavigationService as navigation } from '~/navigation';

export const handleNavigation = (destination: string, params?: object) => {
    navigation.navigate(destination, { ...params });
};

export const handleBack = () => {
    navigation.goBack();
};
