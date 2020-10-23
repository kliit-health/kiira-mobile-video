import React, { Component } from "react";
import ChatBot from "../../components/chatBot";
import Review from "./Review";
import StateModal from "./statesModal";
import Header from "./Header";
import moment from "moment";
import { connect } from "react-redux";
import { updateUserDataToFirebase } from "./action";
import { showOrHideModal } from "../../components/customModal/action";

class ChatBotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateSelected: "",
    };
  }

  setSelectedState = (state) => {
    this.setState({ stateSelected: state.value });
  };

  handleSubmit = (userInfo) => {
    const { navigation, updateUserData } = this.props;
    const { userData } = this.props.navigation.state.params;
    const { first_name, last_name, dob, gender, pronouns, state } = userInfo;
    if (!first_name.value.trim()) {
      showHideErrorModal(lang.addProfileData.emptyFirstNameMsg);
    } else if (!last_name.value.trim()) {
      showHideErrorModal(lang.addProfileData.emptyLastNameMsg);
    } else if (!state.value) {
      showHideErrorModal(lang.addProfileData.emptyStateSelectionMsg);
    } else if (!pronouns.value) {
      showHideErrorModal(lang.addProfileData.emptyPronounsMsg);
    } else {
      const payloadData = {
        userParams: {
          firstName: first_name.value.trim(),
          lastName: last_name.value.trim(),
          dob: dob.value ? dob.value : "",
          email: userData.email,
          gender: gender.value.trim(),
          pronouns: pronouns.value,
          state: state.value,
          signUpDate: new Date(),
          credits: 0,
        },
        navigation,
      };

      updateUserData(payloadData);
    }
  };

  leave = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { userData } = navigation.state.params;
    return (
      <ChatBot
        handleEnd={({ steps }) => {
          this.handleSubmit(steps);
        }}
        headerComponent={<Header />}
        steps={[
          {
            id: "intro",
            message:
              "Hi, I'm Kiira, your personal health assistant. I'm here to help you navigate your health. \n \n Let's get to know each other shall we?",
            trigger: "0",
            color: "green",
          },
          {
            id: "0",
            options: [
              { value: "Let's do it!", label: "Let's do it!", trigger: "1" },
              {
                value: "Go Back",
                label: "Go Back",
                trigger: this.leave,
              },
            ],
          },
          {
            id: "1",
            message: `Awesome, ${
              userData.displayName
            }! At least... that's \n what I think your name is. What should I call you?`,
            trigger: "first_name",
          },
          {
            id: "first_name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "What is your last name?",
            trigger: "last_name",
          },
          {
            id: "last_name",
            user: true,
            trigger: "5",
          },
          {
            id: "5",
            message: "What is your preferred Pronouns?",
            trigger: "pronouns",
          },
          {
            id: "pronouns",
            options: [
              { value: "She/Her", label: "She/Her", trigger: "7" },
              { value: "He/Him", label: "He/Him", trigger: "7" },
              { value: "They/Them", label: "They/Them", trigger: "7" },
            ],
          },
          {
            id: "7",
            message: "When were you born? \n \nFormat should be MM/DD/YYYY",
            trigger: "dob",
          },
          {
            id: "dob",
            user: true,
            trigger: "22",
            validator: (value) => {
              if (moment(value, "MM/DD/YYYY", true).isValid()) {
                return true;
              } else {
                return "Invalid Format";
              }
            },
          },
          {
            id: "20",
            message: "What state are you located in?",
            trigger: "21",
          },
          {
            id: "21",
            options: [
              {
                value: "Select State",
                label: "Select State",
                trigger: "state",
              },
            ],
          },
          {
            id: "state",
            component: <StateModal />,
          },
          {
            id: "22",
            message: "What is your gender?",
            trigger: "gender",
          },
          {
            id: "gender",
            user: true,
            trigger: "20",
          },
          {
            id: "9",
            message: "Great! Check out your summary",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            trigger: "update",
          },
          {
            id: "update",
            message: "Would you like to update something?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              {
                value: "first_name",
                label: "First Name",
                trigger: "update-first-name",
              },
              {
                value: "last_name",
                label: "Last Name",
                trigger: "update-last-name",
              },
              {
                value: "pronouns",
                label: "Pronouns",
                trigger: "update-pronouns",
              },
              { value: "dob", label: "DOB", trigger: "update-dob" },
              { value: "gender", label: "Gender", trigger: "update-gender" },
              { value: "state", label: "State", trigger: "state" },
            ],
          },
          {
            id: "update-first-name",
            update: "first_name",
            trigger: "9",
          },
          {
            id: "update-last-name",
            update: "last_name",
            trigger: "9",
          },
          {
            id: "update-pronouns",
            update: "pronouns",
            trigger: "9",
          },
          {
            id: "update-dob",
            update: "age",
            trigger: "9",
          },
          {
            id: "update-gender",
            update: "gender",
            trigger: "9",
          },
          {
            id: "update-state",
            update: "state",
            trigger: "9",
          },
          {
            id: "end-message",
            message: "Thanks and welcome to Kiira!",
            end: true,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBotScreen);
