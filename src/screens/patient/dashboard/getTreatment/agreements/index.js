import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Modal, TextButton, Header, Container} from '../../../../../components';
import Logo from '../../../../../svgs/penguin.svg';
import {updateUser} from '../../../../../redux/actions';
import styles, {modifiers} from './styles';

const Agreements = ({
  agreements,
  loading,
  error,
  user,
  acceptedTerms,
  updateUser,
  navigation,
  currentRoute,
}) => {
  const initialState = {
    title: '',
    description: '',
    action: 'Agree',
  };

  const [agreement, setAgreement] = useState(initialState);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentRoute === 'RequestVisit') {
      setVisible(!acceptedTerms);
      setAgreement(agreements[0]);
    }
  }, [acceptedTerms, agreements, currentRoute]);

  const handleAction = (action) => {
    if (agreement.index < agreements.length - 1) {
      setAgreement(agreements[agreement.index + 1]);
    } else if (action === 'Finish') {
      const consentAgreements = agreements
        .filter((agreement) => agreement.document)
        .map((agreement) => ({
          id: agreement.id,
          title: agreement.title,
          updatedAt: Date.now(),
        }));
      updateUser({
        uid: user.uid,
        consentAgreements,
      });
    }
  };

  const handleCancel = () => {
    setVisible(false);
    navigation.goBack();
  };

  return (
    <Modal
      styles={modifiers.modal}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      visible={visible}>
      {loading ? (
        <ActivityIndicator color="#008AFC" />
      ) : error ? (
        <Text>error</Text>
      ) : (
        <Container styles={modifiers.container} unformatted modal>
          <Header onClose={handleCancel} />
          <ScrollView
            style={styles.contents}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <View style={styles.body}>
              {agreement.title && (
                <Text style={styles.title}>{agreement.title}</Text>
              )}
              {agreement.description.length > 0 && (
                <Text style={styles.description}>{agreement.description}</Text>
              )}
            </View>
          </ScrollView>
          <TextButton
            styles={modifiers.button}
            onPress={() => handleAction(agreement.action)}>
            {agreement.action}
          </TextButton>
        </Container>
      )}
    </Modal>
  );
};

const getTreatmentConsentStatus = (user) => user.consentAgreements.length;

const mapStateToProps = ({agreements, user, navigator}) => ({
  agreements: agreements.data,
  loading: agreements.loading,
  error: agreements.error,
  acceptedTerms: getTreatmentConsentStatus(user.data),
  user: user.data,
  currentRoute: navigator.currentRoute,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (details) => dispatch(updateUser(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agreements);
