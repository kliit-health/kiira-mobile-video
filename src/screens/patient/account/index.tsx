import React from 'react';
import { Screen, TextButton } from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { ScrollView, Text } from 'react-native';
import { app } from '~/utils/constants';
import { Profile, List, Plan } from './sections';
import { signOut } from '~/redux/reducers/account';
import styles, { modifiers } from './styles';
import { handleNavigation } from '~/utils/functions';

const Account = ({ navigation }) => {
    const dispatch = useDispatch();

    const subscription = useSelector((state: RootState) => state.subscription);
    const user = useSelector((state: RootState) => state.user.data);
    const lang = useSelector((state: RootState) => state.language);

    const handleSignOut = () => {
        dispatch(signOut({ navigation }));
    };

    return (
        <Screen test="Profile Screen">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Profile {...user} navigation={navigation} />
                {!!subscription.data.id && (
                    <Plan subscription={subscription} user={user} />
                )}
                <List onItemPress={handleNavigation} /> 
            </ScrollView>
        </Screen>
    );
};

export default Account;
