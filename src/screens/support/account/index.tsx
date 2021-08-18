import React from 'react';
import { Container, TextButton } from '~/components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { View, Text, StatusBar } from 'react-native';
import VersionCheck from 'react-native-version-check';
import { signOut } from '~/redux/reducers/account';
import styles, { modifiers } from './styles';

const AccountSupport = ({ navigation }) => {
    const language = useSelector(
        (state: RootState) => state.language,
        shallowEqual,
    );
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(signOut({ navigation }));
    };

    return (
        <Container themed unformatted>
            <StatusBar barStyle="light-content" translucent={true} />

            <View style={styles.logoutContainer}>
                <Text
                    style={{
                        alignSelf: 'center',
                    }}
                >{`v ${VersionCheck.getCurrentVersion()}`}</Text>
                <TextButton
                    onPress={handleSignOut}
                    // styles={modifiers.button}
                    link
                >
                    {language.expertAccount.logout}
                </TextButton>
            </View>
        </Container>
    );
};

export default AccountSupport;
