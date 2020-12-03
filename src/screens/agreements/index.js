import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Modal, TextButton, Header, Container } from '../../components';
import Logo from '../../svgs/penguin.svg';
import { setUserDetails } from '../../redux/actions';
import { getNested } from '../../utils/functions';
import styles, { modifiers } from './styles';

const Agreements = ({
  agreements,
  loading,
  error,
  userDetails,
  agreedToTerms,
  setUserDetails,
  navigation,
}) => {
  const initialAgreement = {
    title: '',
    description: '',
    action: 'Agree',
  };

  const [agreement, setAgreement] = useState(initialAgreement);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!agreedToTerms);
    setAgreement(agreements[0]);
  }, [agreedToTerms, agreements]);

  const handleAction = (action) => {
    if (agreement.index < agreements.length - 1) {
      setAgreement(agreements[agreement.index + 1]);
    }

    if (action === 'Finish') {
      setUserDetails({
        uid: userDetails.uid,
        agreements: {
          treatment: true,
        },
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
      visible={visible}
    >
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>error</Text>
      ) : (
        <Container styles={modifiers.container} unformatted>
          <Header onClose={handleCancel} />
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.content}>
            {agreement.title && (
              <Text style={styles.title}>{agreement.title}</Text>
            )}
            {agreement.description.length > 0 && (
              <Text style={styles.description}>{agreement.description}</Text>
            )}
          </View>
          <TextButton
            styles={modifiers.button}
            onPress={() => handleAction(agreement.action)}
          >
            {agreement.action}
          </TextButton>
        </Container>
      )}
    </Modal>
  );
};

const mapStateToProps = ({ agreements, userDetails }) => ({
  agreements: agreements.data,
  loading: agreements.loading,
  error: agreements.error,
  agreedToTerms: getNested(userDetails.data, 'agreements', 'treatment'),
  userDetails: userDetails.data,
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (details) => dispatch(setUserDetails(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agreements);
