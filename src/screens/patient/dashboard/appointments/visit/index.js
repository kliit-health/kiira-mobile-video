import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Header} from '../../../../../components';
import {withNavigation} from 'react-navigation';
import {ExpertInfo, VisitDetails} from './components';
import {getExpertsData} from '../../getTreatment/expertSchedule/action';
import {setVisit} from './actions';
import ErrorBoundary from 'react-native-error-boundary';
import Constant from '../../../../../utils/constants';
import styles from './styles';

const Visit = (props) => {
  const dispatch = useDispatch();
  const {navigation} = props;

  const {uid, visit} = props.navigation.state.params;
  const expertData = useSelector(
    (state) => state.expertProfileReducer.expertData,
  );

  const params = {
    expertsParams: {
      tableName: Constant.App.firebaseTableNames.users,
      uid,
    },
  };

  useEffect(() => {
    dispatch(getExpertsData(params));
  }, []);

  useEffect(() => {
    dispatch(setVisit(visit));
  });

  const FallBack = () => <View></View>;

  return (
    <SafeAreaView style={styles.parentContainerStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {expertData && (
          <View>
            <ErrorBoundary
              FallbackComponent={FallBack}
              onError={() => navigation.goBack()}>
              <Header
                title="Appointment Details"
                onBack={() => navigation.goBack()}
              />
              <ExpertInfo expertData={expertData} visit={visit} />
              <VisitDetails visit={visit} />
            </ErrorBoundary>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNavigation(Visit);
