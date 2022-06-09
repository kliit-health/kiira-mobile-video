import React from 'react';
import { ScrollView } from 'react-native';
import { Screen, Header, Heading, Column, Row, Text } from '~/components';
import FastImage from 'react-native-fast-image';
import { handleBack } from '~/utils/functions/handleNavigation';
import moment from 'moment';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';

const VisitOverView = ({ navigation }) => {
  const { expert, time, reason } = navigation.state.params.visit;

  const {
    pad,
    pad_h,
    pad_v,
    white_bg,
    xLarge,
    xxLarge,
    large,
    medium,
    regular,
    grey_br_b_md,
    grey_br_t_md,
    justify_fs,
  } = globalStyles;

  return (
    <Screen>
      <Header title="Visit Summary" onBack={handleBack} />
      <Column options={[justify_fs]}>
        <Row options={[white_bg, grey_br_b_md, grey_br_t_md]}>
          <FastImage
            style={[styles.expertImage, pad_h, pad_v]}
            resizeMode={'contain'}
            source={{
              uri: expert.imageUrl,
              priority: FastImage.priority.normal,
            }}
          />
          <Column options={[pad_h, white_bg, pad_v]}>
            <Text
              options={[
                xxLarge,
                regular,
              ]}>{`${expert.firstName} ${expert.lastName}`}</Text>
            <Text options={[large, medium]}>{`Seen on ${moment(time).format(
              'll',
            )}`}</Text>
          </Column>
        </Row>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Heading>Reason for visit:</Heading>
          <Column options={[justify_fs, grey_br_b_md]}>
            <Text options={[white_bg, pad, xLarge]}>
              {reason.sessionType.title}
            </Text>
          </Column>
          <Heading>Action Items:</Heading>
          <Column options={[justify_fs, grey_br_b_md]}>
            <Row options={[white_bg]}>
              <FastImage
                style={[styles.expertImage, pad_h, pad_v]}
                resizeMode={'contain'}
                source={{
                  uri: expert.imageUrl,
                  priority: FastImage.priority.normal,
                }}
              />
              <Column options={[pad_h, white_bg, pad_v]}>
                <Text
                  options={[
                    xxLarge,
                    regular,
                  ]}>{`${expert.firstName} ${expert.lastName}`}</Text>
                <Text options={[large, medium]}>{`Seen on ${moment(time).format(
                  'll',
                )}`}</Text>
              </Column>
            </Row>
          </Column>
          <Heading>Provider Notes:</Heading>
          <Column options={[justify_fs, grey_br_b_md]}>
            <Text options={[white_bg, pad, xLarge]}>
              This is a placeholder for the rest of the page on the visit
              summary screen inside the past appointments
            </Text>
          </Column>
        </ScrollView>
      </Column>
    </Screen>
  );
};

export default VisitOverView;
