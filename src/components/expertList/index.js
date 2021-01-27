import React from 'react';
import {useSelector} from 'react-redux';
import {View, TouchableOpacity, FlatList, Platform, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import CustomText from '../../components/customText';
import styles from './style';
import Constant from '../../utils/constants';

const ExpertList = ({navigation, experts}) => {
  const {staticImages} = Constant.App;

  const lang = useSelector((state) => state.language);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
      keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
      data={experts}
      decelerationRate={'fast'}
      renderItem={({item, index}) => {
        item = item.data();
        console.log(item);
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Constant.App.screenNames.ExpertSchedule, {
                uid: item.uid,
                calendarID: item.calendarID,
              });
            }}>
            <View style={styles.expertImageContainer}>
              <Image
                style={styles.expertImage}
                defaultSource={staticImages.profilePlaceholderImg}
                source={{uri: item.profileInfo.profileImageUrl}}
                activeOpacity={0.7}
              />
              {item.isOnline ? (
                <View style={styles.expertIsOnline} />
              ) : (
                <View style={styles.expertIsOffline} />
              )}
            </View>
            <View style={styles.expertDetailsCard}>
              <View style={styles.myRecentExpertContainerStyle}>
                <View style={styles.expertName}>
                  <CustomText style={styles.expertNameTextStyle}>
                    {`${item.profileInfo.firstName} ${item.profileInfo.lastName}`}
                  </CustomText>
                  <CustomText>
                    <Image
                      style={styles.expertRatingImage}
                      source={require('../../../assets/yellow_star.png')}
                      resizeMode="contain"
                    />
                  </CustomText>
                </View>
                <View style={styles.expertProfession}>
                  <CustomText style={styles.expertProfessionTextStyle}>
                    {item.profileInfo.profession.fullName}
                  </CustomText>
                  <CustomText style={styles.expertRatingTextStyle}>
                    {(item.rating / 2).toFixed(1)}
                  </CustomText>
                </View>
                <View style={styles.expertIsPrescriber}>
                  <View>
                    <Image
                      style={styles.expertPrescriberImage}
                      source={require('../../../assets/rx.png')}
                      resizeMode="contain"
                    />
                  </View>

                  <CustomText style={styles.expertPrescriberTextStyle}>
                    {lang.expertProfile.prescriber}
                  </CustomText>
                </View>
                <View style={styles.firstAvaliableContainer}></View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(index) => index.data().uid}
    />
  );
};

export default withNavigation(ExpertList);
