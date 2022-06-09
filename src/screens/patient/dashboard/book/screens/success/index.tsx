import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Screen, Header, Column, Text, Button } from '~/components';
import { withNavigation } from 'react-navigation';
import { h1, h2, h3, default as globalStyles } from '~/components/styles';
import { colors, icons, screenNames } from '~/utils/constants';

const { height_50, width_50, align_items_c, justify_c, sm_pad_v, white_bg } =
  globalStyles;

const Success = ({ navigation }) => {
  const { time } = navigation.state.params;
  return (
    <Screen>
      <Header title="Book" />
      <Column options={[align_items_c, justify_c]}>
        <Image
          resizeMode="contain"
          style={[height_50, width_50]}
          source={icons.kiiraLogo}
        />
        <Text options={[h1]}>You're all set!</Text>
      </Column>
      <Column options={[white_bg]}>
        <Text options={[h2]}>{time}</Text>
        <Text options={[h3, sm_pad_v]}>
          Please follow the appointments button in the dashboard 5 minutes
          before your visit in order to start your appointment.
        </Text>
        <Text options={[h3, sm_pad_v]}>
          Should you need to cancel, please do so at least 24 hours in advance.
        </Text>
        <Text options={[h3, sm_pad_v]}>
          Please fill out your health intake form prior to the session.
        </Text>
      </Column>
      <Column options={[styles.buttonContainer]}>
        <Button
          onPress={() => navigation.navigate(screenNames.Home)}
          title="Go Home"
          style={{
            container: styles.homeButton,
            title: styles.homeButtonTitle,
          }}
        />
        <Button
          onPress={() => navigation.navigate(screenNames.Home)}
          title="Complete Health Intake"
          style={{
            container: styles.healthIntake,
            title: styles.healthIntakeTitle,
          }}
        />
      </Column>
    </Screen>
  );
};

export default withNavigation(Success);

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 0,
    margin: 0,
    flex: 0,
    backgroundColor: colors.white,
    paddingBottom: 10,
  },

  homeButton: {
    borderRadius: 0,
    backgroundColor: colors.white,
  },

  homeButtonTitle: {
    color: colors.primaryBlue,
  },

  healthIntake: {
    marginHorizontal: 20,
    backgroundColor: colors.primaryBlue,
  },

  healthIntakeTitle: {
    color: colors.white,
  },
});
