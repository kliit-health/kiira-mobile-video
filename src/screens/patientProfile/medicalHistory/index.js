import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../components/section';
import styles from './style';

const MedicalHistory = (props) => {
  let params = props.navigation.state.params;
  let {navigation} = props;
  let {uid, visit, patientInfo} = params;

  return (
    <View style={styles.container}>
      <ExpertHeader title="Patient Profile " />
      <ScrollView>
        <View style={styles.infoContainer}>
          {/* <Section title="HPI" image="../../../../../assets/HPI.png" /> */}
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/pregnancy.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Pregnancy History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GynHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/heart_arrow.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>GYN History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalMedicalHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/HPI.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Past Medical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SurgicalHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/chart.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Surgical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MedicationsHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/medication.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Medications</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllergiesHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/allergies.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Allergies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SocialHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/social.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Social History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FamilyHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/family.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Family History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OtherDetails')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/lock.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Confirm and Lock Patient Info </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicalHistory;
