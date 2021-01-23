import React from 'react';
import {
  Text,
  View,
  Platform,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header, Container, TextButton, Avatar} from '../../components';
import Image from 'react-native-fast-image';
import styles from './styles';
import intl from '../../utils/localization';

export const Dashboard = ({
  title,
  model,
  handleNavigation,
  displayName,
  profileImageUrl,
}) => {
  return (
    <Container styles={styles.container} unformatted>
      <Header title={title} />
      <ScrollView>
        <View style={styles.intro.container}>
          <Text
            style={
              styles.intro.title
            }>{`${intl.en.dashboard.helloName}${displayName}!`}</Text>
          <Avatar size="small" source={profileImageUrl} />
        </View>
        <View style={styles.item.mainContainer}>
          {model.routes.map(({title, destination, icon}) => (
            <TouchableOpacity
              key={title}
              activeOpacity={0.8}
              onPress={() => handleNavigation(destination)}
              style={styles.item.container}>
              <View style={styles.item.box}>
                <Image
                  style={styles.item.image}
                  resizeMode="contain"
                  source={icon}
                />
              </View>
              <Text style={styles.item.title}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};
