import React, {Component} from 'react';
import ChatBot from '../../components/chatBot';
import Review from './Review';
import StateModal from './statesModal';
import Header from './Header';
import moment from 'moment';
import {connect} from 'react-redux';
import {updateUserDataToFirebase} from './action';
import {showOrHideModal} from '../../components/customModal/action';
import Constant from '../../utils/constants';

class TreatmentBotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelected: '',
    };
  }

  setSelectedState = (state) => {
    this.setState({stateSelected: state.value});
  };

  leave = () => {
    this.props.navigation.goBack();
  };

  book = () => {
    this.props.navigation.navigate(Constant.App.screenNames.RequestVisit);
  };

  render() {
    const {userData, navigation} = this.props;

    return (
      <ChatBot
        handleEnd={({steps}) => {
          this.book();
        }}
        headerComponent={<Header />}
        steps={[
          {
            id: 'intro',
            message:
              "Sorry to hear you aren't feeling 100%. If you're experiencing an emergency, please exit our chat and call 911. \n \n Is this an emergency?",
            trigger: '0',
            color: 'green',
          },
          {
            id: '0',
            options: [
              {
                value: "No, this isn't an emergency",
                label: "No, this isn't an emergency",
                trigger: '1',
              },
              {
                value: 'Exit',
                label: 'Exit',
                trigger: this.leave,
              },
            ],
          },
          {
            id: '1',
            message: 'Do you know what kind of treatment you need?',
            trigger: 'treatment',
          },
          {
            id: 'treatment',
            options: [
              {
                value: 'Yes',
                label: 'Yes',
                trigger: '3',
              },
              {
                value: 'No',
                label: 'No',
                trigger: '5',
              },
            ],
          },
          {
            id: '3',
            message: "Alright let's book a visit.",
            trigger: 'book_visit',
          },
          {
            id: 'book_visit',
            options: [
              {
                value: 'Book Visit',
                label: 'Book Visit',
                end: true,
              },
              {
                value: 'Exit',
                label: 'Exit',
                trigger: this.leave,
              },
            ],
          },
          {
            id: '5',
            message:
              'We can help with a variety of conditions: \n \n Fertility \n \n Birth Control \n \n Injury or Pain \n \n Urinary or Yeast Infection \n \n Prenatal Health \n \n Postpartum \n \n Sex Therapy \n \n Therapy \n \n STI or STD',
            trigger: '7',
          },

          {
            id: '7',
            message: 'Would you like to book a visit?',
            trigger: 'check_book',
          },
          {
            id: 'check_book',
            options: [
              {value: 'Yes', label: 'Yes', end: true},
              {value: 'No', label: 'No', trigger: this.leave},
            ],
          },
        ]}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoadingReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (value) => dispatch(updateUserDataToFirebase(value)),
  showHideErrorModal: (value) => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentBotScreen);
