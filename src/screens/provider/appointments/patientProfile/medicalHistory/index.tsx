import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import ExpertHeader from '~/components/expertHeader';
import PatientCard from '../components/patientCard';
import Section from '../components/section';
import sections from './model';
import styles from './style';

const MedicalHistory = ({ navigation }) => {
    const { visit, patientInfo } = navigation.state.params;
    const medicalHistory = useSelector(state => state.medicalHistory);

    return (
        <View style={styles.container}>
            <ExpertHeader title="Patient Profile" />
            <PatientCard visit={visit} patientInfo={patientInfo} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.infoContainer}>
                    <FlatList
                        data={sections}
                        keyExtractor={section => section.title}
                        renderItem={({ item }) => (
                            <Section
                                visit={visit}
                                navigation={navigation}
                                title={item.title}
                                image={item.image}
                                screen={item.screen}
                                complete={
                                    item.complete
                                        ? medicalHistory[item.complete].complete
                                        : false
                                }
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default withNavigation(MedicalHistory);
