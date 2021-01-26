import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import style from "./style";
import PropTypes from "prop-types";

const Review = (props) => {
  const [currentState, setState] = useState({
    first_name: "",
    last_name: "",
    pronouns: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    const { steps } = props;
    const { first_name, last_name, pronouns, dob, state, gender } = steps;
    setState({
      first_name,
      last_name,
      pronouns,
      dob,
      state: state.value,
      gender,
    });
  }, [props]);

  const { first_name, last_name, pronouns, dob, gender } = currentState;
  let state;
  if (props.steps.state.value) {
    state = props.steps.state;
  }

  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={style.title}>Summary</Text>
      </View>

      <View style={style.rowContainer}>
        <View style={{ width: 100 }}>
          <Text style={style.category}>First Name:</Text>
          <Text style={style.value}>{first_name.value}</Text>
        </View>

        <View style={{ width: 100 }}>
          <Text style={style.category}>Last Name:</Text>
          <Text style={style.value}>{last_name.value}</Text>
        </View>

        <View style={{ width: 100 }}>
          <Text style={style.category}>State:</Text>

          {typeof state === null || !state ? (
            <Text> </Text>
          ) : (
            <Text style={style.value}>{state.value.value || ""}</Text>
          )}
        </View>

        <View style={{ width: 100 }}>
          <Text style={style.category}>Date of Birth:</Text>
          <Text style={style.value}>{dob.value}</Text>
        </View>

        <View style={{ width: 100 }}>
          <Text style={style.category}>Pronouns:</Text>
          <Text style={style.value}>{pronouns.value}</Text>
        </View>

        <View style={{ width: 100 }}>
          <Text style={style.category}>Gender:</Text>
          <Text style={style.value}>{gender.value}</Text>
        </View>
      </View>
    </View>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
