import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../../components/customText';
import styles from '../style';
import {useDispatch} from 'react-redux';
import {getUserData} from '../../../../utils/firebase';
import Constant from '../../../../utils/constants';
import {updateMedicalHistoryExpert} from '../../../patientProfile/actions';
import moment from 'moment';

const {staticImages} = Constant.App;

const Visit = ({visit, navigation}) => {
  const dispatch = useDispatch();
  const [patientInfo, setPatientInfo] = useState(null);
  const [profilePic, setProfilePic] = useState('');

  const payload = {
    appointment: {
      visit,
      patientInfo,
    },
  };

  useEffect(() => {
    try {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid: visit.uid,
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

    return () => setPatientInfo(null);
  }, []);

  useEffect(() => {
    if (patientInfo) {
      setProfilePic(patientInfo.profileInfo.profileImageUrl);
    }
  }, [patientInfo]);

  return (
    <View style={styles.visitParentContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          dispatch(updateMedicalHistoryExpert(payload));
          navigation.navigate('PatientProfile');
        }}>
        <View style={styles.visitContainerStyle}>
          <FastImage
            containerStyle={{alignSelf: 'center'}}
            defaultSource={staticImages.profilePlaceholderImg}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
            source={{
              uri: profilePic,
            }}
            activeOpacity={0.7}
          />
          <View style={styles.userInfo}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
              <CustomText style={styles.userInfoText}>
                {`${visit.firstName} ${visit.lastName}`}
              </CustomText>
              <View style={styles.timeContainer}>
                <Image
                  style={styles.timeImage}
                  resizeMode="contain"
                  defaultSource={require('../../../../../assets/clock.png')}
                  source={require('../../../../../assets/clock.png')}
                />
                <CustomText style={styles.timeTextStyle}>
                  {moment(visit.time).format('hh:mm A')}
                </CustomText>
              </View>
            </View>
            <CustomText>{'Chief Complaint:'}</CustomText>
            <CustomText>{visit.reason}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Visit;
