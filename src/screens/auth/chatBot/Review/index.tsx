import React, { Fragment, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
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
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title}>Summary</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={{ width: 100 }}>
                    <Text style={styles.category}>First Name:</Text>
                    <Text style={styles.value}>{first_name.value}</Text>
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Last Name:</Text>
                    <Text style={styles.value}>{last_name.value}</Text>
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>State:</Text>

                    {typeof state === null || !state ? (
                        <Text> </Text>
                    ) : (
                        <Text style={styles.value}>{state.value || ''}</Text>
                    )}
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Date of Birth:</Text>
                    <Text style={styles.value}>{dob.value}</Text>
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Pronouns:</Text>
                    <Text style={styles.value}>{pronouns.value}</Text>
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Gender:</Text>
                    <Text style={styles.value}>{gender.value}</Text>
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Sexuality:</Text>

                    {typeof sexuality === null || !sexuality ? (
                        <Text> </Text>
                    ) : (
                        <Text style={styles.value}>
                            {sexuality.value || ''}
                        </Text>
                    )}
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Insurance:</Text>
                    {typeof insurance === null || !insurance ? (
                        <Text> </Text>
                    ) : (
                        <Text style={styles.value}>
                            {insurance.value || ''}
                        </Text>
                    )}
                </View>

                <View style={{ width: 100 }}>
                    <Text style={styles.category}>Plan:</Text>
                    {typeof plan === null || !plan ? (
                        <Text> </Text>
                    ) : (
                        <Text style={styles.plan}>{plan.value || ''}</Text>
                    )}
                </View>

                {custom && (
                    <Fragment>
                        <View style={{ width: 100 }}>
                            <Text style={styles.category}>Zip Code:</Text>
                            {typeof zipcode === null || !zipcode ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
                                    {zipcode.value || ''}
                                </Text>
                            )}
                        </View>

                        <View style={{ width: 100 }}>
                            <Text style={styles.category}>Home Secure:</Text>
                            {typeof housingSecure === null || !housingSecure ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
                                    {housingSecure.message || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={styles.category}>Food Secure:</Text>
                            {typeof foodSecure === null || !foodSecure ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
                                    {foodSecure.message || ''}
                                </Text>
                            )}
                        </View>

                        <View style={{ width: 100 }}>
                            <Text style={styles.category}>Enrollment:</Text>
                            {typeof enrollment === null || !enrollment ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
                                    {enrollment.value || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={styles.category}>
                                Household Income:
                            </Text>
                            {typeof income === null || !income ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
                                    {income.value || ''}
                                </Text>
                            )}
                        </View>

                        <View>
                            <Text style={styles.category}>
                                Race / Ethnicity:
                            </Text>
                            {typeof ethnicity === null || !ethnicity ? (
                                <Text> </Text>
                            ) : (
                                <Text style={styles.plan}>
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
