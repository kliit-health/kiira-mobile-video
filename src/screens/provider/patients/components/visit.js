import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../../components/customButton';
import CancelModal from './cancelModal';
import styles from '../style';
import {useDispatch} from 'react-redux';
import {cancelAppointment} from '../action';
import {getUserData} from '../../../utils/firebase';
import Constant from '../../../utils/constants';

const Visit = ({visit, date, navigation}) => {
  const dispatch = useDispatch();
  let [visible, setVisible] = useState(false);
  // const [patientInfo, setPatientInfo] = useState(null);
  const patient = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
  };

  // useEffect(() => {
  //   try {
  //     const obj = {
  //       tableName: Constant.App.firebaseTableNames.users,
  //       uid: patient.uid,
  //     };
  //     getUserData(
  //       obj,
  //       (querySnapshot) => {
  //         const data = querySnapshot.data();
  //         setPatientInfo(data);
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return () => setPatientInfo(null);
  // }, []);

  return (
    <View style={{alignSelf: 'center'}}>
      <View style={styles.visitContainer}>
        <CancelModal visit={visit} visible={visible} setVisible={setVisible} />
        <Text style={styles.title}>
          {`${visit.firstName} ${visit.lastName}`}
        </Text>
        <Text style={styles.title}>{`CC: ${visit.reason}`}</Text>
        <View style={styles.detailContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailText}>{date.dow} </Text>
            <Text>{`${date.month} ${date.day}`}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>{date.hour.time} </Text>
            <Text>{date.hour.am_pm} </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>30 </Text>
            <Text>MIN </Text>
          </View>
        </View>
        <CustomButton
          buttonStyle={styles.cancelButton}
          textStyle={styles.cancelButtonText}
          onPress={() => setVisible(!visible)}
          text="Cancel"
        />
      </View>
    </View>
  );
};

export default Visit;
