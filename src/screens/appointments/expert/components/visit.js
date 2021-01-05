import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../../components/customText';
import styles from '../style';
import {useDispatch, useSelector} from 'react-redux';
import {cancelAppointment} from '../action';
import {getUserData} from '../../../../utils/firebase';
import Constant from '../../../../utils/constants';
import {updateMedicalHistoryExpert} from '../../../patientProfile/actions';
import moment from 'moment';

const {staticImages} = Constant.App;

const Visit = ({visit, navigation}) => {
  const dispatch = useDispatch();
  const medicalHistory = useSelector((state) => state.medicalHistory);
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
  }, []);

  useEffect(() => {
    if (patientInfo) {
      setProfilePic(patientInfo.profileInfo.profileImageUrl);
    }
  }, [patientInfo]);

  return (
    <View style={styles.recentChatParentContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          dispatch(updateMedicalHistoryExpert(payload));
          navigation.navigate('PatientProfile');
        }}>
        <View style={styles.recentChatContainerStyle}>
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
          <View style={styles.userInfoContainerStyle}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
              <CustomText
                style={
                  styles.userInfoTextBoldStyle
                }>{`${visit.firstName} ${visit.lastName}`}</CustomText>
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
            <CustomText>{'Chief Complaint:'}</CustomText>
            <CustomText>{visit.reason}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Visit;

//  <View style={styles.recentChatParentContainerStyle}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate(Constant.App.screenNames.ChatExpert, {
//                       questionData: item,
//                     });
//                   }}>
//                   <View style={styles.recentChatContainerStyle}>
//                     <Image
//                       containerStyle={{alignSelf: 'center'}}
//                       defaultSource={staticImages.profilePlaceholderImg}
//                       style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 50,
//                       }}
//                       source={{
//                         uri: item.userInfo.profileInfo.profileImageUrl,
//                       }}
//                       activeOpacity={0.7}
//                     />
//                     <View style={styles.userInfoContainerStyle}>
//                       <View style={{flexDirection: 'row'}}>
//                         <CustomText style={styles.userInfoTextStyle}>
//                           {`${item.userInfo.profileInfo.firstName} ${item.userInfo.profileInfo.lastName}`}
//                         </CustomText>
//                         <View style={styles.timeContainer}>
//                           <Image
//                             style={{
//                               width: 20,
//                               height: 20,
//                               padding: 5,
//                               flexDirection: 'row',
//                               justifyContent: 'flex-start',
//                             }}
//                             resizeMode="contain"
//                             defaultSource={require('../../../../assets/clock.png')}
//                             source={require('../../../../assets/clock.png')}
//                           />
//                           <CustomText style={styles.userInfoTextStyle}>
//                             {item.modifiedDate
//                               ? moment.unix(item.modifiedDate).fromNow(true)
//                               : moment.unix(item.createdAt).fromNow(true)}
//                           </CustomText>
//                         </View>
//                       </View>
//                       <CustomText numberOfLines={4}>
//                         {item.lastMessage ? item.lastMessage : item.question}
//                       </CustomText>
//                     </View>
//             </View>
//           </TouchableOpacity>
//         </View>
