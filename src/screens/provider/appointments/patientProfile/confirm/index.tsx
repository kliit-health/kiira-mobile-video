import React, { useState } from 'react';
import { View, Modal, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '~/components/customButton';
import Recap from '../recap';
import styles from './style';
import { lockVisit } from '../actions';
import { withNavigation } from 'react-navigation';

const Confirm = ({ navigation }) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const { visit } = navigation.state.params;
    const medicalHistory = useSelector(state => state.medicalHistory);

    const fakeNavigation = {
        state: {
            params: {
                item: medicalHistory,
                short: false,
                title: 'Confirm and Lock',
                visit,
            },
        },
    };

    const payload = {
        ...medicalHistory,
        lockTime: new Date(),
    };

    return (
        <View style={styles.container}>
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
                            Once confirmed you will be unable to edit this
                            record please carefully review before locking.
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
                                Cancel
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.lockButton}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                dispatch(lockVisit(payload, navigation));
                            }}
                        >
                            <Text style={styles.textStyle}>Lock</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Recap navigation={fakeNavigation} />
            <CustomButton
                buttonStyle={styles.buttonContainerStyle}
                textStyle={styles.buttonTextStyle}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                text="Confirm"
            />
        </View>
    );
};

export default withNavigation(Confirm);
