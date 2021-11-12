import React from 'react';
import { View, Text } from 'react-native';
import { get } from 'lodash';
import { cardDetails } from './model';
import { Avatar, Icon, Header, Screen } from '~/components';
import styles, { modifiers } from './styles';

export default ({ profileInfo, navigation }) => {
    const { firstName, lastName, profileImageUrl } = profileInfo;

    const handleOnBackPress = () => {
         
    }; 

    const handleSetting = () => {
         
    }; 

    return (
        <Screen>
            <View style={styles.headerStyle}>
                <Header 
                    title="Profile" 
                    onBack={handleOnBackPress}
                    OnSettingPress={handleSetting}
                />
            </View>
            <Avatar
                source={profileImageUrl}
                size="large"
                styles={modifiers.avatar}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
            </View>
            <View style={styles.root}>
                {cardDetails.map(({ icon, value }) => (
                    <View style={styles.itemContainer}>
                        <Icon options={[styles.icon]} source={icon} />
                        <Text style={styles.itemTitle}>
                            {get(profileInfo, value)}
                        </Text>
                    </View>
                ))}
            </View>
        </Screen>
    );
};
