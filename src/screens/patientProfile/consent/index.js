import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../components/section';
import styles from './style';

const Consent = (props) => {
  let {navigation} = props;

  return (
    <View style={styles.container}>
      <ExpertHeader title="Consent agreements" />
      <ScrollView>
        <View style={styles.infoContainer}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/HPI.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Personal Information</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MedicalHistoryExpert')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/firstaid.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Medical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalMedicalHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/notes.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Patient Notes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SurgicalHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../../assets/agreement.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Consent Agreements</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Consent;
