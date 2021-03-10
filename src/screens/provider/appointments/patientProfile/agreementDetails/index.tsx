import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Text, ScrollView, ActivityIndicator, View} from 'react-native';
import {Header, Container} from '../../../../../components';
import {firebaseSingleFetch} from '../../../../../utils/firebase';
import {colors} from '../../../../../utils/constants';
import styles from './styles';

const AgreementDetails = ({navigation}) => {
  const id = navigation.state.params.id;

  const [details, setDetails] = useState(undefined);
  const lang = useSelector((state) => state.language);

  useEffect(() => {
    (async () => {
      const data = await firebaseSingleFetch('agreements', id);
      setDetails(data);
    })();
  }, [id]);

  return (
    <Container unformatted themed>
      <Header
        title={lang.agreementDetails.title}
        onBack={() => navigation.goBack()}
        themed
      />
      <View style={styles.container}>
        {details ? (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <Text style={styles.title}>{details.title}</Text>
            <Text style={styles.description}>{details.description}</Text>
          </ScrollView>
        ) : (
          <ActivityIndicator color={colors.azure} />
        )}
      </View>
    </Container>
  );
};

export default AgreementDetails;
