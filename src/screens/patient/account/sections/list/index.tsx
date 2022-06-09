import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { get } from 'lodash';
import model from './model';
import { ListItem } from '~/components';
import styles from './styles';

export default ({ onItemPress }) => {
  const language = useSelector(state => state.language, shallowEqual);
  const user = useSelector(state => state.user.data);
  return (
    <View>
      {model.map(({ title, destination, content, icon, pane, noBorder }) => (
        <ListItem
          key={title}
          id={destination}
          onPress={onItemPress}
          displayChevron={!pane}
          displayBorder={!noBorder}>
          <View style={styles.listContainer}>
            {icon && (
              <Image style={styles.icon} resizeMode="contain" source={icon} />
            )}
            <View style={styles.titleContainer}>
              <Text style={pane ? styles.paneTitle : styles.title}>
                {get(language, title)}
              </Text>
              {content == 'Add Insurance' && (
                <Text style={styles.content}>
                  {user.profileInfo && user.profileInfo.insurance
                    ? user.profileInfo.insurance
                    : content}
                </Text>
              )}
              {content == 'Please Select' && (
                <Text style={styles.content}>
                  {user.profileInfo && user.profileInfo.pharmacy
                    ? user.profileInfo.pharmacy
                    : content}
                </Text>
              )}
              {content == 'Please Add a Contact' && (
                <Text style={styles.content}>
                  {user.profileInfo &&
                  user.profileInfo.emergencyContactInfo &&
                  user.profileInfo.emergencyContactInfo.relationship
                    ? user.profileInfo.emergencyContactInfo.relationship
                    : content}
                </Text>
              )}
            </View>
          </View>
        </ListItem>
      ))}
    </View>
  );
};
