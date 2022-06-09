import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Header } from '~/components';
import { withNavigation } from 'react-navigation';
import { ExpertInfo, VisitDetails } from './components';
import { getExpertsData } from '~/redux/reducers/appointments';
import { setVisit } from './actions';
import ErrorBoundary from 'react-native-error-boundary';
import Constant, { tables } from '~/utils/constants';
import styles from './styles';

const Visit = props => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const { uid, visit } = props.navigation.state.params;

  const params = {
    expertsParams: {
      tableName: tables.users,
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
        <View>
          <ErrorBoundary
            FallbackComponent={FallBack}
            onError={() => navigation.goBack()}>
            <Header
              title="Appointment Details"
              onBack={() => navigation.goBack()}
            />
            <ExpertInfo visit={visit} />
            <VisitDetails visit={visit} />
          </ErrorBoundary>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNavigation(Visit);
