import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Header } from '~/components';
import { View } from 'react-native-animatable';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';

const Allergies = ({ navigation }) => {
    const user = useSelector(state => state.user.data);
    const lang = useSelector(state => state.language);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const NoAllergiesScreen = () => {
        return (
            <Container>
                <Header title={lang.allergies.title} onBack={handleBackPress} />
                <Text style={styles.noAllergiesText}>
                    {lang.allergies.noAllergies}
                </Text>
            </Container>
        );
    };
    const AllergiesScreen = () => {
        const allergiesList = user.intakeData[14].name.trim().split(/[ ,]+/);
        return (
            <View style={styles.container}>
                <Header title={lang.allergies.title} onBack={handleBackPress} />
                <View style={{ backgroundColor: colors.babyBlue }}>
                    <Text style={styles.allergiesTitle}>
                        {lang.allergies.header}
                    </Text>
                </View>
                {allergiesList.map(title => (
                    <TouchableOpacity style={styles.allergiesListContainer}>
                        <View>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                <View
                    style={{
                        borderBottomColor: colors.greyAccent,
                        borderBottomWidth: 1,
                    }}
                ></View>
            </View>
        );
    };
    return user &&
        user.intakeData &&
        user.intakeData[14] &&
        user.intakeData[14].name !== '' ? (
        <AllergiesScreen />
    ) : (
        <NoAllergiesScreen />
    );
};

export default Allergies;
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
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    allergiesListContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    allergiesTitle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '400',
        margin: 10,
    },
    noAllergiesText: {
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        color: colors.greyDark,
        margin: '10%',
        textAlign: 'center',
    },
});
