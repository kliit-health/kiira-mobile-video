import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Platform,
    Image,
} from 'react-native';
import { Text, Avatar } from '~/components';
import { withNavigation } from 'react-navigation';
import { colors, screenNames, icons } from '~/utils/constants';
import { default as globalStyles } from '~/components/styles';
import styles from './styles';

const { xLarge } = globalStyles;

const SupportStaff = ({ staff, navigation }) => {
    return (
        <View style={styles.expertsContainer}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
                keyboardShouldPersistTaps={
                    Platform.OS === 'ios' ? 'never' : 'always'
                }
                data={staff}
                renderItem={({ item }) => {
                    const {
                        profileInfo: { profileImageUrl, firstName, lastName },
                    } = item;
                    return (
                        <View style={styles.expertInfoContainer}>
                            <View style={styles.supportImageView}>
                                <Image
                                    resizeMode="contain"
                                    style={styles.expertProfile}
                                    source={{
                                        uri: profileImageUrl
                                            ? profileImageUrl
                                            : '',
                                    }}
                                />
                            </View>
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
        </View>
    );
};

export default withNavigation(SupportStaff);
