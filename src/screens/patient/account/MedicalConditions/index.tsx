import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Header, ListItem } from '~/components';
import { View } from 'react-native-animatable';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';
import { handleNavigation } from '~/utils/functions';

const MedicalConditions = ({ navigation }) => {
    const user = useSelector((state: any) => state.user.data);
    const lang = useSelector((state: any) => state.language);

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
            <View style={styles.container}>
                <Header
                    title={lang.medicalConditions.title}
                    onBack={handleBackPress}
                />
                <View style={{ backgroundColor: colors.babyBlue }}>
                    <Text style={styles.conditionsTitle}>
                        {lang.medicalConditions.header}
                    </Text>
                </View>
                {user.intakeData[12].name.map(title => (
                    <ListItem
                        borderBottom
                        key={title}
                        displayChevron={true}
                        displayBorder={true}
                        onPress={() => handleNavigation('Diagnosis',{title: title.trim()})}
                    >
                        <View style={styles.listContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{title.trim()}</Text>
                            </View>
                        </View>
                    </ListItem>
                ))}
            </View>
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
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? '3%' : '9%',
    },
    title: {
        fontFamily: text.fontFamily.poppinsMedium,
        fontSize: text.size.regular,
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
        backgroundColor: colors.babyBlue,
    },
    noConditionsText: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        color: colors.greyDark,
        margin: '10%',
        textAlign: 'center',
    },
});
