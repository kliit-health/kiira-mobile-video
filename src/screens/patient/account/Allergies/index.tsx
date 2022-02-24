import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { switchCase, insertAtIndex } from '~/utils/functions';
import { Container, Header, FooterNavigation } from '~/components';


const Allergies = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const lang = useSelector(state => state.language);
   
   
    const [allergies, setAllergies] = useState({
        medicationAllergic: null,
        medicationAllergies: [],
        foodAllergic: null,
        foodAllergies: [],
    });

  

    // const handleChange = (dataKey, value) => {
    //     setAllergies({ ...allergies, [dataKey]: value });
  

    const handleBackPress = () => {
        navigation.goBack();
    };

console.log(user.intakeData)

    return (
        <Container>
            <Header title={lang.allergies.title} onBack={handleBackPress} />
            <Text >{user.intakeData[14].name}</Text>
            {/* <FooterNavigation
                leftButtonTitle={lang.allergies.previous}
                hideLeftButton={index === 0}
                onLeftButtonPress={handlePreviousPress}
                rightButtonTitle={
                    finish ? lang.allergies.finish : lang.allergies.next
                }
                disableRightButton={disabled}
                onRightButotonPress={finish ? handleSave : handleNextPress}
            /> */}
        </Container>
    );
};

export default Allergies;