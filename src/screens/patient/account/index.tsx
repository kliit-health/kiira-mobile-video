import React, { useState } from 'react';
import { CustomButton, CustomText, Screen, TextButton } from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { ScrollView, Text, View } from 'react-native';
import { screenNames } from '~/utils/constants';
import { Profile, List, Plan } from './sections';
import { signOut } from '~/redux/reducers/account';
import styles from './styles';
import { handleNavigation } from '~/utils/functions';
import NativeModal from 'react-native-modal';
import VersionCheck from 'react-native-version-check';

const Account = ({ navigation }) => {
  const dispatch = useDispatch();
  const subscription = useSelector((state: RootState) => state.subscription);
  const user = useSelector((state: RootState) => state.user.data);
  const lang = useSelector((state: RootState) => state.language);
  const [showModal, setShowModal] = useState(false);
  const handleSignOut = () => {
    dispatch(signOut({ navigation }));
  };
  const RenderModalView = () => {
    return (
      <NativeModal
        backdropColor={'rgba(0, 0, 0, 0.7)'}
        backdropOpacity={0.5}
        onBackdropPress={() => setShowModal(false)}
        isVisible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomText style={styles.modalText}>
              {
                'These records are currently empty because you have not filled out your health intake form.'
              }
            </CustomText>

            <CustomButton
              buttonStyle={styles.button}
              textStyle={styles.textStyle}
              text={'Complete Health Intake'}
              onPress={() => {
                setShowModal(false);
                navigation.navigate(screenNames.settings);
              }}
            />
          </View>
        </View>
      </NativeModal>
    );
  };
  return (
    <Screen test="Profile Screen">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile
          {...user}
          navigation={navigation}
          setShowModal={setShowModal}
        />
        {!!subscription.data.id && (
          <Plan subscription={subscription} user={user} />
        )}
        <List onItemPress={handleNavigation} />
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
          <Text
            style={{
              alignSelf: 'center',
            }}>{`v ${VersionCheck.getCurrentVersion()}`}</Text>
          <TextButton onPress={handleSignOut} link>
            {'Logout'}
          </TextButton>
        </View>
        <View style={showModal ? styles.ModalContainer : {}}>
          <RenderModalView />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Account;
