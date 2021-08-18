import React from 'react';
import { Container, TextButton } from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { ScrollView, Text } from 'react-native';
import { app } from '~/utils/constants';
import { Profile, List, Plan } from './sections';
import { signOut } from '~/redux/reducers/account';
import styles, { modifiers } from './styles';

const Account = ({ navigation }) => {
    const dispatch = useDispatch();

    const subscription = useSelector((state: RootState) => state.subscription);
    const user = useSelector((state: RootState) => state.user.data);
    const lang = useSelector((state: RootState) => state.language);

    const handleNavigation = destination => {
        navigation.navigate(destination);
    };

    const handleSignOut = () => {
        dispatch(signOut({ navigation }));
    };

    return (
        <Container
            styles={modifiers.container}
            barStyle="light-content"
            themed
            unformatted
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Profile {...user} />
                {!!subscription.data.id && (
                    <Plan subscription={subscription} user={user} />
                )}
                <List onItemPress={handleNavigation} />
                <Text style={styles.version}>{app.version}</Text>
                <TextButton
                    onPress={handleSignOut}
                    styles={modifiers.button}
                    link
                >
                    {lang.account.logout}
                </TextButton>
            </ScrollView>
        </Container>
    );
};

export default Account;
