import React from 'react';
import { View, Text } from 'react-native';
import Modal from '../modal';
import TextButton from '../textButton';
import { styles } from './styles';

const ModalConfirm = ({
    onClose,
    message,
    onConfirm,
    onCancel,
    visible,
    ...rest
}) => (
    <Modal
        visible={visible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        styles={styles.modal}
        {...rest}
    >
        <View style={styles.message.card}>
            <Text style={styles.message.text}>{message}</Text>
            <View style={styles.message.buttonsContainer}>
                <TextButton onPress={onCancel} outlined>
                    No
                </TextButton>
                <View style={styles.message.divider} />
                <TextButton onPress={onConfirm}>Yes</TextButton>
            </View>
        </View>
    </Modal>
);

export default ModalConfirm;
