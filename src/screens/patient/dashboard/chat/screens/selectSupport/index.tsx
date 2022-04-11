import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import { Header, Text, Screen } from '~/components';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { withNavigation } from 'react-navigation';
import SupportStaff from './supportStaff';
import { h2 } from '~/components/styles';
import { firebaseFetch } from '~/utils/firebase';

const SelectSupport = ({ navigation }) => {
    const [staff, setStaff] = useState(null);

    useEffect(() => {
        getStaff();
    }, []);

    const getStaff = async () => {
        const condition = [{ key: 'role', operator: '==', value: 'Expert' }];
        var staffs:any = await firebaseFetch('users', condition);
        staffs = staffs.filter(staff => {
            return staff.displayName == "Kiira"
        })
        setStaff(staffs);
    };

    return (
        <Screen test="Select Chat Support">
            <View>
                <Header title="Support" onBack={() => navigation.goBack()} />
                <Text options={[h2]}>{`Availible Staff`}</Text>
                {staff && <SupportStaff staff={staff} />}
            </View>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </Screen>
    );
};

export default withNavigation(SelectSupport);
