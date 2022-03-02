import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Header, Screen, ListItem } from '~/components';
import { View } from 'react-native-animatable';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';

const MedicalConditions = ({ navigation }) => {
    const user = useSelector(state => state.user.data);
    const lang = useSelector(state => state.language);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const NoConditionsScreen = () => {
        return (
            <Container>
                <Header
                    title={lang.medicalConditions.title}
                    onBack={handleBackPress}
                />
                <Text style={styles.noConditionsText}>
                    {lang.medicalConditions.noMedicalConditions}
                </Text>
            </Container>
        );
    };

    const ConditionsScreen = () => {
        return (
            <Screen>
                <Header
                    title={lang.medicalConditions.title}
                    onBack={handleBackPress}
                />
                <Text style={styles.conditionsTitle}>
                    {lang.medicalConditions.header}
                </Text>
                {user.intakeData[12].name.map(title => (
                    <ListItem
                        marginLeft={-10}
                        key={title}
                        displayChevron={true}
                        displayBorder={true}
                        onPress={() => navigation.navigate('Diagnosis')}
                    >
                        <View style={styles.listContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                        </View>
                    </ListItem>
                ))}
            </Screen>
        );
    };
    return user &&
        user.intakeData &&
        user.intakeData[12] &&
        user.intakeData[12].name.length !== 0 ? (
        <ConditionsScreen />
    ) : (
        <NoConditionsScreen />
    );
};

export default MedicalConditions;

const styles = StyleSheet.create({
    title: {
        fontFamily: text.fontFamily.poppinsMedium,
        fontSize: text.size.regular,
        marginHorizontal: '2%',
    },
    listContainer: {
        flexDirection: 'row',
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    conditionsTitle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '400',
        margin: 10,
    },
    noConditionsText: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        color: colors.greyDark,
        margin: '10%',
        textAlign: 'center',
    },
});
