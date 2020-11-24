import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';

const PatientProfile = (props) => {
  let params = props.navigation.state.params;
  let {navigation} = props;
  let {uid, visit, patientInfo} = params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              marginLeft: 15,
              width: 50,
              height: 50,
            }}
            source={require('../../../assets/goBack.png')}
            activeOpacity={0.7}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.headerText}>Patient Profile</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image
          defaultSource={require('../../../assets/profile_img_placeholder.png')}
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
          <Text style={styles.reason}>{`${visit.reason}`}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.infoContainer}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/HPI.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>HPI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/calendar.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>GYN History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/birthcontrol.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Contraceptive/Sexual History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/PMH.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>PMH</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/heart.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Pregnancy History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/heart.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Social History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/chart.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Surgical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/clock2.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Family History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OtherDetails')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/clock2.png')}
                activeOpacity={0.7}></Image>
              <Text style={styles.info}>Other Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientProfile;
