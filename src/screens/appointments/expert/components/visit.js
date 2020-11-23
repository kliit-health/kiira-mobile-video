import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../../../components/customButton';
import CustomText from '../../../../components/customText';
import styles from '../style';
import {useDispatch} from 'react-redux';
import {cancelAppointment} from '../action';
import {getUserData} from '../../../../utils/firebase';
import Constant from '../../../../utils/constants';
import moment from 'moment';

const Visit = ({visit, date, navigation}) => {
  const dispatch = useDispatch();
  const [patientInfo, setPatientInfo] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const patient = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
  };

  useEffect(() => {
    try {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid: patient.uid,
      };
      getUserData(
        obj,
        (querySnapshot) => {
          const data = querySnapshot.data();
          setPatientInfo(data);
        },
        (error) => {
          console.log(error);
        },
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (patientInfo) {
      setProfilePic(patientInfo.profileInfo.profileImageUrl);
    }
  }, [patientInfo]);

  return (
    <View style={styles.resolveContainer}>
      <View style={styles.recentChatParentContainerStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ExpertLoginScreen', {
              uid: visit.expert.uid,
              visit,
              patientInfo,
            });
          }}>
          <View style={styles.recentChatContainerStyle}>
            <Image
              containerStyle={{alignSelf: 'center'}}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
              source={
                profilePic
                  ? {
                      uri: profilePic,
                    }
                  : require('../../../../../assets/profile_img_placeholder.png')
              }
              activeOpacity={0.7}
            />
            {/* <CustomButton
            buttonStyle={styles.noContainerStyle}
            textStyle={styles.noTextStyle}
            onPress={() => dispatch(cancelAppointment(patient))}
            text="Cancel"
          /> */}
            <View style={styles.userInfoContainerStyle}>
              <View style={{flexDirection: 'row'}}>
                <CustomText style={styles.userInfoTextBoldStyle}>
                  {`${visit.firstName} ${visit.lastName}`}
                </CustomText>
                <View style={styles.timeContainer}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                    resizeMode="contain"
                    defaultSource={require('../../../../../assets/clock.png')}
                    source={require('../../../../../assets/clock.png')}
                  />
                  <CustomText style={styles.userInfoTextStyle}>
                    {moment(visit.time).format('hh:mm A')}
                  </CustomText>
                </View>
              </View>
              <CustomText>{visit.reason}</CustomText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Visit;
