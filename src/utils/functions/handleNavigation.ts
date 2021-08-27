import navigationService from '~/navigation/navigationService';

export const handleNavigation = (destination: string) => {
    navigationService.navigate(destination);
};
