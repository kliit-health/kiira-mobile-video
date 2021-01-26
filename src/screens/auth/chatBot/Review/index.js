import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Review = (props) => {
  const [currentState, setState] = useState({
    first_name: '',
    last_name: '',
    pronouns: '',
    gender: '',
    dob: '',
  });

  useEffect(() => {
    const {steps} = props;

    const {
      first_name,
      last_name,
      pronouns,
      dob,
      state,
      gender,
      sexuality,
      insurance,
      plan,
    } = steps;
    setState({
      first_name,
      last_name,
      pronouns,
      dob,
      state: state.value,
      gender,
      sexuality: sexuality.value,
      insurance,
      plan,
    });
  }, []);

  const {
    first_name,
    last_name,
    pronouns,
    dob,
    gender,
    insurance,
    plan,
  } = currentState;
  let state =
    props.steps['update-state'] && props.steps['update-state'].value
      ? props.steps['update-state'].value
      : props.steps.state.value;
  let sexuality =
    props.steps['update-sexuality'] && props.steps['update-sexuality'].value
      ? props.steps['update-sexuality'].value
      : props.steps.sexuality.value;

  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={style.title}>Summary</Text>
      </View>

      <View style={style.rowContainer}>
        <View style={{width: 100}}>
          <Text style={style.category}>First Name:</Text>
          <Text style={style.value}>{first_name.value}</Text>
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Last Name:</Text>
          <Text style={style.value}>{last_name.value}</Text>
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>State:</Text>

          {typeof state === null || !state ? (
            <Text> </Text>
          ) : (
            <Text style={style.value}>{state.value || ''}</Text>
          )}
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Date of Birth:</Text>
          <Text style={style.value}>{dob.value}</Text>
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Pronouns:</Text>
          <Text style={style.value}>{pronouns.value}</Text>
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Gender:</Text>
          <Text style={style.value}>{gender.value}</Text>
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Sexuality:</Text>

          {typeof sexuality === null || !sexuality ? (
            <Text> </Text>
          ) : (
            <Text style={style.value}>{sexuality.value || ''}</Text>
          )}
        </View>

        <View style={{width: 100}}>
          <Text style={style.category}>Insurance:</Text>
          {typeof insurance === null || !insurance ? (
            <Text> </Text>
          ) : (
            <Text style={style.value}>{insurance.value || ''}</Text>
          )}
        </View>

        <View>
          <Text style={{...style.category, alignSelf: 'center'}}>Plan:</Text>
          {typeof plan === null || !plan ? (
            <Text> </Text>
          ) : (
            <Text style={style.plan}>{plan.value || ''}</Text>
          )}
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
