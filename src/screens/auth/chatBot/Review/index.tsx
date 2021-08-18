import React, { Fragment, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Review = props => {
    const [currentState, setState] = useState({
        first_name: '',
        last_name: '',
        pronouns: '',
        gender: '',
        dob: '',
        zipcode: '',
        income: '',
        enrollment: '',
    });

    const { steps, custom } = props;

    useEffect(() => {
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
            zipcode,
            income,
            enrollment,
            housingSecure,
            foodSecure,
            ethnicity,
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
            zipcode: zipcode ? zipcode : '',
            income: income && income.value ? income.value : '',
            enrollment: enrollment ? enrollment : '',
            housingSecure,
            foodSecure,
            ethnicity: ethnicity && ethnicity.value ? ethnicity.value : '',
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
        zipcode,
        enrollment,
        housingSecure,
        foodSecure,
    } = currentState;

    let state =
        props.steps['update-state'] && props.steps['update-state'].value
            ? props.steps['update-state'].value
            : props.steps.state.value;
    let sexuality =
        props.steps['update-sexuality'] && props.steps['update-sexuality'].value
            ? props.steps['update-sexuality'].value
            : props.steps.sexuality.value;
    let income;
    if (props.steps.income) {
        income =
            props.steps['update-income'] && props.steps['update-income'].value
                ? props.steps['update-income'].value
                : props.steps.income.value;
    }
    let ethnicity;
    if (props.steps.ethnicity) {
        ethnicity =
            props.steps['update-ethnicity'] &&
            props.steps['update-ethnicity'].value
                ? props.steps['update-ethnicity'].value
                : props.steps.ethnicity.value;
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
                        <Text style={style.value}>{state.value || ''}</Text>
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

                <View style={{ width: 100 }}>
                    <Text style={style.category}>Sexuality:</Text>

                    {typeof sexuality === null || !sexuality ? (
                        <Text> </Text>
                    ) : (
                        <Text style={style.value}>{sexuality.value || ''}</Text>
                    )}
                </View>

                <View style={{ width: 100 }}>
                    <Text style={style.category}>Insurance:</Text>
                    {typeof insurance === null || !insurance ? (
                        <Text> </Text>
                    ) : (
                        <Text style={style.value}>{insurance.value || ''}</Text>
                    )}
                </View>

                <View style={{ width: 100 }}>
                    <Text style={style.category}>Plan:</Text>
                    {typeof plan === null || !plan ? (
                        <Text> </Text>
                    ) : (
                        <Text style={style.plan}>{plan.value || ''}</Text>
                    )}
                </View>

                {custom && (
                    <Fragment>
                        <View style={{ width: 100 }}>
                            <Text style={style.category}>Zip Code:</Text>
                            {typeof zipcode === null || !zipcode ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {zipcode.value || ''}
                                </Text>
                            )}
                        </View>

                        <View style={{ width: 100 }}>
                            <Text style={style.category}>Home Secure:</Text>
                            {typeof housingSecure === null || !housingSecure ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {housingSecure.message || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={style.category}>Food Secure:</Text>
                            {typeof foodSecure === null || !foodSecure ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {foodSecure.message || ''}
                                </Text>
                            )}
                        </View>

                        <View style={{ width: 100 }}>
                            <Text style={style.category}>Enrollment:</Text>
                            {typeof enrollment === null || !enrollment ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {enrollment.value || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={style.category}>
                                Household Income:
                            </Text>
                            {typeof income === null || !income ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {income.value || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={style.category}>
                                Race / Ethnicity:
                            </Text>
                            {typeof ethnicity === null || !ethnicity ? (
                                <Text> </Text>
                            ) : (
                                <Text style={style.plan}>
                                    {ethnicity.value || ''}
                                </Text>
                            )}
                        </View>
                    </Fragment>
                )}
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
