import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../../components/customButton';
import styles from '../style';
import {useDispatch} from 'react-redux';
import {cancelAppointment} from '../action';
import {getUserData} from '../../../utils/firebase';
import Constant from '../../../utils/constants';

const Visit = ({visit, date, navigation}) => {
  const dispatch = useDispatch();
  const [patientInfo, setPatientInfo] = useState(null);
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

  return (
    <View style={{alignSelf: 'center', paddingBottom: 50}}>
      <View style={styles.myRecentExpertContainerStyle}>
        <Text style={{alignSelf: 'center', margin: 15, fontSize: 20}}>
          {`${visit.firstName} ${visit.lastName}`}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.expertImageContainer}>
            <Image
              style={styles.expertImage}
              source={
                patientInfo
                  ? {
                      uri: patientInfo.profileInfo.profileImageUrl,
                    }
                  : require('../../../../assets/profile_img_placeholder.png')
              }
              activeOpacity={0.7}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              {date.dow}
            </Text>
            <Text>{`${date.month} ${date.day}`}</Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              {date.hour.time}
            </Text>
            <Text>{date.hour.am_pm}</Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>30</Text>
            <Text>MIN</Text>
          </View>
        </View>
        <CustomButton
          buttonStyle={styles.yesContainerStyle}
          textStyle={styles.yesTextStyle}
          onPress={() => {
            navigation.navigate('ExpertLoginScreen', {
              uid: visit.expert.uid,
              visit,
              patientInfo,
            });
          }}
          text="Join"
        />

        <CustomButton
          buttonStyle={styles.noContainerStyle}
          textStyle={styles.noTextStyle}
          onPress={() => dispatch(cancelAppointment(patient))}
          text="Cancel"
        />
      </View>
    </View>
  );
};

export default Visit;
