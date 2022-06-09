import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import * as Kiira from '~/components';
import Agreements from '~/components/agreements';
import { RootState } from '~/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { setAppointmentDetails } from '~/redux/reducers/appointments';
import { handleBack } from '~/utils/functions/handleNavigation';
import { tabs, sections } from './model';
import { card } from '~/components/styles';
import { default as globalStyles, h3 } from '~/components/styles';
import Expandable from '~/components/expandable';
import { getAllDocumentsFromCollection } from '~/utils/firebase';

const {
  grey_br_t_md,
  grey_dark_br_t_md,
  hide_overflow,
  height_250,
  no_pad_h,
  no_pad_v,
  pad_b,
  pad_h,
  pad_v,
  sm_pad_t,
  width_10,
  zero_flex,
} = globalStyles;

const Book = ({ navigation }) => {
  const dispatch = useDispatch();
  const dimen = Dimensions.get('window');
  const { visit } = useSelector((state: RootState) => state.appointments);
  const [activeTab, setActiveTab] = useState('primaryCare');
  const [data, setData] = useState(null);
  const [cardHeight, setCardHeight] = useState(dimen.height > 800 ? 330 : 230);
  const [shrinkCard, setShrinkCard] = useState(true);
  const [selection, setSelection] = useState(null);
  const [catagories, setCatagories] = useState(null);
  const [appointmentTypes, setAppointmentTypes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const topics = await getAllDocumentsFromCollection(
        'appointmentCategories',
      );

      if (Array.isArray(topics)) {
        const reasons = topics.reduce((acc, item) => {
          acc[item.name] = item.reasons;
          return acc;
        }, {});

        setCatagories(reasons);
        setData(reasons[activeTab]);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const types = await getAllDocumentsFromCollection('appointmentTypes');

      if (Array.isArray(types)) {
        const result = types.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        setAppointmentTypes(result);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const types = await getAllDocumentsFromCollection('appointmentTypes');

      if (Array.isArray(types)) {
        const result = types.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        setAppointmentTypes(result);
      }
    })();
  }, []);

  const handleTabSelect = (label: string) => {
    setActiveTab(label);
    setData(catagories[label]);
  };

  const handleLinePress = () => {
    shrinkCard ? setCardHeight(50) : setCardHeight(330);
    setShrinkCard(!shrinkCard);
  };

  const handleSelection = item => {
    setLoading(true);
    setSelection(item);
    dispatch(
      setAppointmentDetails({
        reason: item.label,
        details: appointmentTypes[item.type],
      }),
    );
    setLoading(false);
  };

  return (
    <Kiira.Screen test="Book Screen">
      <Agreements navigation={navigation} />
      <Kiira.Header title="Book Visit" onBack={handleBack} />
      <Kiira.Heading>
        Please select the main reason for your visit:
      </Kiira.Heading>
      <Kiira.Column
        options={[card, hide_overflow, zero_flex, { height: cardHeight }]}>
        <Kiira.Tabs list={tabs} active setActive={handleTabSelect} />
        <Kiira.Column
          options={[
            zero_flex,
            dimen.height > 800 ? height_250 : { height: 150 },
            pad_v,
          ]}>
          <Kiira.RadioGroup onSelect={handleSelection} data={data} />
        </Kiira.Column>
      </Kiira.Column>
      <Kiira.Column options={[card, hide_overflow, no_pad_v, no_pad_h]}>
        <ScrollView>
          <Kiira.Line options={[pad_v, width_10, grey_dark_br_t_md]} />
          <Kiira.Column options={[pad_h]}>
            <Kiira.Conditional if={loading && selection}>
              <ActivityIndicator size="large" />
            </Kiira.Conditional>
            <Kiira.Conditional if={!loading && selection}>
              {visit && visit.details && (
                <Kiira.Heading options={[h3]}>
                  {`${visit.details.title}: ${visit.details.duration} min $${visit.details.price}`}
                </Kiira.Heading>
              )}
            </Kiira.Conditional>
          </Kiira.Column>
          <Expandable onPress={handleLinePress} list={sections} />
          <Kiira.Column options={[pad_h, pad_b, grey_br_t_md, zero_flex]}>
            <Kiira.Conditional if={selection}>
              <Kiira.Button
                testID="See Providers"
                onPress={() => navigation.navigate('SelectProvider')}
                style={{
                  container: [sm_pad_t],
                }}
                title="See Providers"
              />
            </Kiira.Conditional>
          </Kiira.Column>
        </ScrollView>
      </Kiira.Column>
    </Kiira.Screen>
  );
};

export default Book;
