import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';
import { Header } from '~/components';

const Diagnosis = ({ navigation }) => {
    const lang = useSelector((state: any) => state.language);
    const title = navigation.state.params;

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header title={'Diagnosis'} onBack={handleBackPress} />
            <Text style={styles.diagnosisTitle}>{title.title}</Text>
        </View>
    );
};

export default Diagnosis;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? '3%' : '9%',
    },
    diagnosisTitle: {
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '400',
        margin: '7%',
    },
});
