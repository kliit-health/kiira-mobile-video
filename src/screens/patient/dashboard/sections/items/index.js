import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {screenNames, icons} from '../../../../../utils/constants';
import {useSelector} from 'react-redux';
import Image from 'react-native-fast-image';
import styles from './styles';

export default ({onPress}) => {
  const language = useSelector((state) => state.language);

  const model = [
    {
      title: language.dashboard.getTreatment,
      destination: screenNames.requestVisit,
      icon: icons.bandAid,
      features: 'video',
    },
    {
      title: language.dashboard.mySquad,
      destination: screenNames.careSquad,
      icon: icons.squad,
      features: '',
    },
    {
      title: language.dashboard.chatExpert,
      destination: screenNames.ask,
      icon: icons.chat,
      features: 'chat',
    },
    {
      title: language.dashboard.myHistory,
      destination: screenNames.healthHistory,
      icon: icons.clipboard,
      features: '',
    },
    {
      title: language.dashboard.reminders,
      destination: screenNames.appointments,
      icon: icons.reminders,
      features: 'video',
    },
    {
      title: language.dashboard.sos,
      destination: screenNames.sos,
      icon: icons.sos,
      features: '',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {model.map(({title, destination, icon, features}) => (
        <TouchableOpacity
          key={title}
          activeOpacity={0.8}
          onPress={() => onPress(destination, features)}
          style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.image} resizeMode="contain" source={icon} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
