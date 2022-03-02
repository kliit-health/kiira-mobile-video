import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { switchCase, insertAtIndex } from '~/utils/functions';
import { Container, Header, FooterNavigation, Screen, ListItem } from '~/components';
import { View } from 'react-native-animatable';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';


const Diagnosis = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const lang = useSelector(state => state.language);


    // const handleChange = (dataKey, value) => {
    //     setAllergies({ ...allergies, [dataKey]: value });
  

    const handleBackPress = () => {
        navigation.goBack();
    };


    return (
        <Container><Header title={'Diagnosis'} onBack={handleBackPress} /></Container>
    );
        
       
    
};

export default Diagnosis;

