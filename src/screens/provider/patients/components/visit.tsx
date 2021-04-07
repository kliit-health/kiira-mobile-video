import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from 'components/customButton';
import CancelModal from './cancelModal';
import styles from '../style';

const Visit = ({visit, date}) => {
  let [visible, setVisible] = useState(false);

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
