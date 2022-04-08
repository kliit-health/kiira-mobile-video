import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { Header, ListItem, Container } from '~/components';
import model from './model';
import styles from './styles';

const Pregnancy = ({ navigation }) => {
    const lang = useSelector((state: any) => state.language);

    return (
        <Container unformatted>
            <Header
                title={lang.pregnancy.title}
                onBack={() => navigation.goBack()}
            />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {model.map(({ title, destination }) => (
                    <ListItem
                        displayChevron
                        key={title}
                        title={title}
                        onPress={() => navigation.navigate(destination)}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </ListItem>
                ))}
            </ScrollView>
        </Container>
    );
};

export default Pregnancy;
