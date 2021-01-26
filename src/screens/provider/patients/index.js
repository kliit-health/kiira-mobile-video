import React, {useState, useEffect} from 'react';
import {StatusBar, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles, {modifiers} from './style';
import {getPatientsList} from './action';
import {withNavigation} from 'react-navigation';
import Visit from './components/visit';
import {generateDateInfo} from '../../../utils/helper';
import moment from 'moment';
import _ from 'lodash';
import {Header, SearchBar, Container} from '../../../components';

import intl from '../../../utils/localization';

const Patients = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.authLoading.userData);
  const visitData = useSelector((state) => state.expertPatients.history);
  const [visits, setVisits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisits, setSearchVisits] = useState([]);

  useEffect(() => {
    dispatch(getPatientsList({uid: userData.uid}));
  }, []);

  useEffect(() => {
    let record = _.flatten(visitData);

    if (record.length > 1) {
      let filtered = record.filter((visit) =>
        moment(visit.time).isSameOrAfter(new Date()),
      );

      filtered = filtered.sort((a, b) => {
        return (
          parseInt(moment(a.time).format('x')) -
          parseInt(moment(b.time).format('x'))
        );
      });

      setVisits([...filtered]);
      setSearchVisits([...filtered]);
    } else {
      setVisits([...record]);
      setSearchVisits([...record]);
    }
  }, [visitData]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    let filtered = [...visits];

    if (term) {
      filtered = filtered.filter(({firstName, lastName, time}) => {
        const date = moment(time).format('llll');
        const fullName = `${firstName} ${lastName}`;
        if (fullName.includes(term) || date.includes(term)) {
          return true;
        }
      });
    }
    setSearchVisits([...filtered]);
  };

  return (
    <Container unformatted styles={modifiers.container} themed>
      <StatusBar barStyle="light-content" translucent={true} />
      <Header title={intl.en.expertAppointments.future} themed />
      <SearchBar
        onChange={handleSearch}
        value={searchTerm}
        placeholder={'Search by Name or Date'}
      />
      <View style={styles.container}>
        {visits.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
            keyboardShouldPersistTaps={
              Platform.OS === 'ios' ? 'never' : 'always'
            }
            data={searchVisits}
            decelerationRate={'fast'}
            renderItem={({item, index}) => {
              const date = generateDateInfo(item.time);
              return <Visit visit={item} date={date} navigation={navigation} />;
            }}
            keyExtractor={(index) => `${index.id}`}
          />
        )}
      </View>
    </Container>
  );
};

export default withNavigation(Patients);
