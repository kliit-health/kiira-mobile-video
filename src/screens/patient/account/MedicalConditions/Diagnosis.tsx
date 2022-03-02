import React from 'react';;
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    Header,
} from '~/components';

const Diagnosis = ({ navigation }) => {

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <Header title={'Diagnosis'} onBack={handleBackPress} />
        </Container>
    );
};

export default Diagnosis;
