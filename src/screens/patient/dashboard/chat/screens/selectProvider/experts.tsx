import React, { useState } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Platform,
    Image,
} from 'react-native';
import { Text, Avatar } from '~/components';
import ProfileModal from './profileModal';
import { withNavigation } from 'react-navigation';
import { colors, screenNames, icons } from '~/utils/constants';
import { default as globalStyles } from '~/components/styles';
import styles from './styles';

const { xLarge, medium, gray_dark, blue } = globalStyles;

const Experts = ({ experts, navigation }) => {
    const [showProfile, setShowProfile] = useState(false);
    const [profile, setProfile] = useState(null);
    const showProfileModal = expert => {
        setProfile(expert);
        setShowProfile(true);
    };

    return (
        <View style={styles.expertsContainer}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
                keyboardShouldPersistTaps={
                    Platform.OS === 'ios' ? 'never' : 'always'
                }
                data={experts}
                renderItem={({ item }) => {
                    const {
                        profileInfo: {
                            profileImageUrl,
                            firstName,
                            lastName,
                            profession,
                        },
                    } = item;
                    return (
                        <View style={styles.expertInfoContainer}>
                            <Avatar
                                border
                                styles={{
                                    image: styles.expertProfile,
                                }}
                                source={profileImageUrl}
                            />

                            <View
                                style={
                                    item.isOnline
                                        ? styles.onlineStatus
                                        : [
                                              styles.onlineStatus,
                                              {
                                                  backgroundColor: colors.gray,
                                              },
                                          ]
                                }
                            />

                            <View style={styles.expertInfo}>
                                <Text options={[xLarge]}>
                                    {`${firstName} ${lastName}`}
                                </Text>
                                <Text options={[medium, gray_dark]}>
                                    {profession.fullName}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => showProfileModal(item)}
                                >
                                    <Text options={[medium, blue]}>
                                        Profile
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(screenNames.Messages, {
                                        expertDetails: item,
                                    });
                                }}
                            >
                                <Image
                                    resizeMode="contain"
                                    source={icons.chatIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
            {showProfile && (
                <ProfileModal
                    expert={profile}
                    showProfile={showProfile}
                    toggleProfile={setShowProfile}
                />
            )}
        </View>
    );
};

export default withNavigation(Experts);
