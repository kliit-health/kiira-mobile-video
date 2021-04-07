import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from '../style';
import CustomText from 'components/customText';
import {Rating} from 'react-native-elements';

const ExpertInfo = ({expertData}) => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={{marginTop: 10}}>
      <View style={styles.expertInfoParentContainerStyle}>
        <View style={styles.expertImageContainer}>
          <FastImage
            style={styles.expertImage}
            resizeMode="cover"
            source={{uri: expertData.profileInfo.profileImageUrl}}
            activeOpacity={0.7}
          />
          <View>
            <View style={styles.myRecentExpertContainerStyle}>
              <View style={styles.expertName}>
                <Text style={styles.expertNameTextStyle}>
                  {`${expertData.profileInfo.firstName} ${expertData.profileInfo.lastName}`}
                </Text>
              </View>
              <View style={styles.expertProfession}>
                <CustomText style={styles.expertProfessionTextStyle}>
                  {expertData.profileInfo.profession.shortName}
                </CustomText>
                <Image
                  style={styles.expertPrescriberImage}
                  source={require('../../../../../../../assets/rx.png')}
                  resizeMode="contain"
                />
                <CustomText style={styles.expertPrescriberTextStyle}>
                  {lang.expertProfile.prescriber}
                </CustomText>
              </View>
              <View style={styles.expertIsPrescriber}>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={parseFloat(expertData.rating / 2)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpertInfo;
