import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import ExpertList from '../../components/expertList';
import {Header} from '../../components';
import styles from './style';
import Constant from '../../utils/constants';
import {withNavigation} from 'react-navigation';

const SelectExpert = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [experts, setExperts] = useState(null);
  const recentExpertData = useSelector(
    (state) => state.askReducer.recentExpertData,
  );

  const userData = useSelector((state) => state.authLoadingReducer.userData);

  useEffect(() => {});

  useEffect(() => {
    if (recentExpertData && userData) {
      const filteredExperts = recentExpertData.filter((item) => {
        const expert = item.data();
        return (
          expert.profileInfo.state.value === userData.profileInfo.state.value
        );
      });

      setExperts(filteredExperts);
    }
  }, [recentExpertData]);

  const getFirstAppointment = async (calendarID) => {
    const response = await fetch(
      `http://localhost:5000/availability/times?calendarID=${calendarID}&date=${today}`,
    )
      .then((res) => res.json())
      .then((data) => data);
    return response;
  };

  return (
    <View style={styles.container}>
      <Header title="Request a visit" onBack={() => navigation.goBack()} />
      {experts && experts.length ? (
        <ExpertList getFirst={getFirstAppointment} experts={experts} />
      ) : (
        <View style={styles.parentContainerStyle}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 20,
            }}
            resizeMode="contain"
            source={require('../../../assets/bell.png')}
          />
          <Text style={styles.title}>No Providers found</Text>
          <Text style={styles.subtitle}>
            We'll notifiy you when providers are available in your state
          </Text>
          <CustomButton
            buttonStyle={styles.yesContainerStyle}
            textStyle={styles.yesTextStyle}
            onPress={() => {
              props.navigation.navigate(Constant.App.screenNames.BottomTab);
            }}
            text="Go Home"
          />
        </View>
      )}
    </View>
  );
};

export default withNavigation(SelectExpert);
