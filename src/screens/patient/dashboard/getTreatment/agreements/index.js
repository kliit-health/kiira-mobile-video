import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {screenNames} from '../../../../../utils/constants';
import {Modal, TextButton, Header, Container} from '../../../../../components';
import Logo from '../../../../../svgs/penguin.svg';
import {updateUser} from '../../../../../redux/actions';
import styles, {modifiers} from './styles';

const Agreements = ({navigation}) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [agreement, setAgreement] = useState({
    title: '',
    description: '',
    action: 'Agree',
  });

  const user = useSelector((state) => state.user.data);
  const currentRoute = useSelector((state) => state.navigator.currentRoute);
  const agreements = useSelector((state) => state.agreements.data);
  const loading = useSelector((state) => state.agreements.loading);
  const error = useSelector((state) => state.agreements.error);

  useEffect(() => {
    if (currentRoute === screenNames.requestVisit) {
      const agreed = user.consentAgreements.length > 0;
      setVisible(!agreed);
      setAgreement(agreements[0]);
    }
  }, [currentRoute, user]);

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

      dispatch(
        updateUser({
          uid: user.uid,
          consentAgreements,
        }),
      );
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

export default Agreements;
