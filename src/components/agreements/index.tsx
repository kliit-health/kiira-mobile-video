import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    Linking,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Markdown from 'react-native-markdown-package';
import { Modal, TextButton, Header, Container } from '~/components';
import Logo from '~/svgs/penguin.svg';
import { updateUser } from '~/redux/actions';
import styles, {
    markdownStyles,
    headerStyles,
    buttonStyles,
    modalStyles,
    containerStyles,
} from './styles';
import { screenNames } from '~/utils/constants';

const Agreements = ({ navigation }) => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const user = useSelector((state: any) => state.user.data);
    const currentRoute = useSelector((state: any) => state.navigator.currentRoute);
    const loading = useSelector((state: any) => state.agreements.loading);
    const error = useSelector((state: any) => state.agreements.error);
    const contract = useSelector((state: any) => state.agreements.data.contract);

    useEffect(() => {
        if (currentRoute === screenNames.Book) {
            setVisible(!user.acceptedTreatmentTerms);
        }
    }, [currentRoute, user]);

    const handleAction = () => {
        dispatch(
            updateUser({
                acceptedTreatmentTerms: true,
            }),
        );
    };

    const handleCancel = () => {
        setVisible(false);
        navigation.goBack();
    };

    return (
        <Modal
            styles={modalStyles}
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            visible={visible}
        >
            {loading ? (
                <ActivityIndicator color="#008AFC" />
            ) : error ? (
                <Text>error</Text>
            ) : (
                <Container styles={containerStyles} modal>
                    <Header styles={headerStyles} onClose={handleCancel} />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.logo}>
                            <Logo />
                        </View>
                        <View style={styles.content}>
                            <Markdown
                                styles={markdownStyles}
                                onLink={url => Linking.openURL(url)}
                            >
                                {contract.replace(/\\n/g, '\n')}
                            </Markdown>
                        </View>
                        <TextButton
                            styles={buttonStyles}
                            onPress={handleAction}
                        >
                            Agree
                        </TextButton>
                    </ScrollView>
                </Container>
            )}
        </Modal>
    );
};

export default Agreements;
