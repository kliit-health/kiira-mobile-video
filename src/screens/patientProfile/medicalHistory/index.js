import React from 'react';
import {View, ScrollView, FlatList, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../components/section';
import sections from './model';
import styles from './style';

const MedicalHistory = ({navigation}) => {
  const medicalHistory = useSelector((state) => state.medicalHistory);
  const {
    appointment: {visit, patientInfo},
  } = medicalHistory;

  return (
    <View style={styles.container}>
      <ExpertHeader title="Patient Profile " />
      <View style={styles.profileContainer}>
        <Image
          defaultSource={require('../../../../assets/profile_img_placeholder.png')}
          containerStyle={{alignSelf: 'center'}}
          style={{
            marginLeft: 5,
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
          source={{uri: patientInfo.profileInfo.profileImageUrl}}
          activeOpacity={0.7}
        />
        <View>
          <Text style={styles.name}>
            {`${visit.firstName} ${visit.lastName}`}
          </Text>
          <Text style={styles.reason}>Chief Complaint:</Text>
          <Text style={styles.reason}>{`${visit.reason}`}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <FlatList
            data={sections}
            keyExtractor={(section) => section.title}
            renderItem={({item}) => (
              <Section
                navigation={navigation}
                title={item.title}
                image={item.image}
                screen={item.screen}
                complete={
                  item.complete ? medicalHistory[item.complete].complete : false
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicalHistory;
