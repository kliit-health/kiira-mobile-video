import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable,
    Alert,
} from 'react-native';
import Image from 'react-native-fast-image';
import ExpertHeader from '~/components/expertHeader';
import PatientCard from './components/patientCard';
import { screenNames } from '~/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '~/redux/actions';
import { getPatientDetails } from './actions';
import { withNavigation } from 'react-navigation';
import styles from './style';

const PatientProfile = ({ navigation }) => {
    const { visit, patient } = navigation.state.params;
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const patientInfo = useSelector((state:any) => state.user.data);
    const appointment = useSelector((state:any) => state.medicalHistory.appointment);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        dispatch(
            getPatientDetails({
                uid: patient.uid,
            }),
        );
    }, []);

    const handleNavigation = destination => {
        navigation.push(destination, {
            visit: visit,
            patientInfo,
            uid: patient.uid,
        });
    };

    return (
        <View style={styles.container}>
            <ExpertHeader title="Patient Profile" />
            <PatientCard visit={visit} patientInfo={patientInfo} />
            <ScrollView>
                <View style={styles.infoContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            handleNavigation(screenNames.personalInformation)
                        }
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../../../../assets/HPI.png')}
                            />
                            <Text style={styles.info}>
                                Personal Information
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={appointment && appointment.visit.locked}
                        onPress={() => handleNavigation('MedicalHistoryExpert')}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../../../../assets/firstaid.png')}
                            />
                            <Text style={styles.info}>Medical History</Text>
                            <View style={styles.check}>
                                {appointment && appointment.visit.locked && (
                                    <Image
                                        resizeMode="contain"
                                        style={styles.icon}
                                        source={require('../../../../../assets/lock.png')}
                                    />
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleNavigation('PreviousVisits')}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../../../../assets/notes.png')}
                            />
                            <Text style={styles.info}>Previous Visits</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleNavigation(screenNames.consent)}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../../../../../assets/agreement.png')}
                            />
                            <Text style={styles.info}>Consent Agreements</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleNavigation('VisitExpert')}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                resizeMode="contain"
                                style={styles.icon}
                                source={require('../../../../../assets/phone.png')}
                            />
                            <Text style={styles.info}>Video Visit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Important !</Text>
                        <Text style={styles.subtitle}>
                            This record has been locked, please view paitent
                            notes for a detailed view of previous visits.
                        </Text>
                        <Pressable
                            style={styles.cancelButton}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textStyle,
                                    color: '#2196F3',
                                }}
                            >
                                Close
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default withNavigation(PatientProfile);
