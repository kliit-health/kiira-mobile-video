import { NavigationService as navigation } from '~/navigation';

export const handleNavigation = (destination: string) => {
    navigation.navigate(destination);
};

export const handleBack = () => {
    navigation.goBack();
};
