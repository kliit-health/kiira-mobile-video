import React, {Fragment} from 'react';
import ExpertHeader from '../../../../../components/expertHeader';
import {ScrollView, View} from 'react-native';
import Pregnancy from './components/pregnancy';
import GYN from './components/gyn';
import PMH from './components/pmh';
import Surgical from './components/surgical';
import Medications from './components/medications';
import Allergies from './components/allergies';
import Social from './components/social';
import Family from './components/family';
import Physical from './components/physical';
import Plan from './components/plan';
import Summary from './components/summary';
import styles from './style';

const Recap = (props) => {
  const {
    navigation: {
      state: {
        params: {item, short, title},
      },
    },
  } = props;

  const {
    social,
    allergies,
    medications,
    family,
    gyn,
    surgical,
    pmh,
    summary,
    pregnancy,
    plan,
    physical,
  } = item;

  return (
    <View style={styles.container}>
      <ExpertHeader title={title} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.document}>
        <Plan plan={plan} />
        <Summary summary={summary} />
        {!short && (
          <Fragment>
            <Pregnancy pregnancy={pregnancy} />
            <GYN gyn={gyn} />
            <PMH pmh={pmh} />
            <Surgical surgical={surgical} />
            <Medications medications={medications} />
            <Allergies allergies={allergies} />
            <Social social={social} />
            <Family family={family} />
            <Physical physical={physical} />
          </Fragment>
        )}
      </ScrollView>
    </View>
  );
};

export default Recap;
