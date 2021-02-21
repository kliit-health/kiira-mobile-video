import React from 'react';
import {View, Text} from 'react-native';
import CheckItem from './common/checkItem';
import {convertCamelCase} from '../../../../../../utils/helper';
import {gynModel} from './models';

import styles from '../style';

const GYN = ({gyn}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>GYN History</Text>
      </View>
      <Text style={styles.info}>{`Last Period: ${gyn.lastPeriod.notes}`}</Text>
      <Text style={styles.info}>{`Period Length: ${
        gyn.periodLength.lessThan ? '7 days or Less' : 'More than 7 Days'
      }`}</Text>
      <Text style={styles.info}>{`Cycle Length: ${
        gyn.cycleLength.lessThan
          ? 'Less than 21 days'
          : gyn.cycleLength.about
          ? 'About 21 - 42 days'
          : 'More than 42 days'
      }`}</Text>
      <Text
        style={styles.info}>{`Age of Menarche: ${gyn.menarche.notes}`}</Text>
      <Text style={styles.info}>{`Last PAP Smear: ${gyn.papDate.notes}`}</Text>

      <CheckItem
        checked={gyn.abnormalPap.history}
        title="Abnormal Pap"
        notes={gyn.abnormalPap.notes}
      />

      <Text style={styles.subheading}>STI/STD</Text>
      {Object.keys(gyn.sti).map((item, index) => {
        return (
          <CheckItem
            key={'STI' + index}
            checked={gyn.sti[item]}
            title={convertCamelCase(item)}
          />
        );
      })}

      <Text style={styles.subheading}>HIV Status</Text>
      <CheckItem
        key="HIV"
        checked={gyn.hiv.history}
        title="Positive"
        notes={gyn.hiv.notes}
      />

      <Text style={styles.subheading}>DES</Text>
      <CheckItem
        key="DES"
        checked={gyn.des.history}
        title="Used by mother"
        notes={gyn.des.notes}
      />

      <Text style={styles.subheading}>Sexual History</Text>
      {gynModel.sexualHistory.map((item) => {
        return (
          <CheckItem
            key={item.key}
            checked={gyn[item.key].history}
            title={item.title}
            notes={gyn[item.key].notes || null}
          />
        );
      })}

      <Text style={styles.subheading}>Past contraception methods</Text>
      {Object.keys(gyn.contraceptions).map((key) => {
        return (
          <CheckItem
            key={key}
            checked={gyn.contraceptions[key]}
            title={convertCamelCase(key)}
          />
        );
      })}

      <Text style={styles.subheading}>Current Status</Text>
      {gynModel.currentStatus.map((item) => {
        return (
          <CheckItem
            key={item.type ? item.type : item.key}
            checked={
              item.type
                ? parseInt(gyn[item.key][item.type].number) > 0
                : gyn[item.key].history
            }
            title={
              item.type
                ? `${item.title} ${parseInt(gyn[item.key][item.type].number)}`
                : item.title
            }
            notes={gyn[item.key].notes || null}
          />
        );
      })}
    </View>
  );
};

export default GYN;
