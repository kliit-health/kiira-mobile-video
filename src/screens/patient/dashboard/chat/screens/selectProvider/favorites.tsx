import React, {  useState } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Platform,
    Image,
} from 'react-native';
import { Text } from '~/components';
import ProfileModal from './profileModal';
import { withNavigation } from 'react-navigation';
import { colors, screenNames, icons } from '~/utils/constants';
import { default as globalStyles } from '~/components/styles';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteExperts } from '~/redux/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootState } from '~/redux/reducers';


const { xLarge, medium, gray_dark, blue } = globalStyles;

const Favorites = ({ experts, navigation }) => {
    const user = useSelector((state: any) => state.user.data);
    const favorites = useSelector((state: any) => state.favoriteExperts.data);
    const dispatch = useDispatch();
    const [showProfile, setShowProfile] = useState(false);
    const [profile, setProfile] = useState(null);
    const lang = useSelector((state:RootState) => state.language);
    const showProfileModal = expert => {
        setProfile(expert);
        setShowProfile(true);
    };
    const ifExists = fav => {
        if (favorites.filter(item => item === fav).length > 0) {
            return true;
        }
        return false;
    };

    const handleAddPress = uid => {
        dispatch(
            updateFavoriteExperts({
                uid: user.uid,
                favorites: [...favorites, uid],
            }),
        );
    };

    const handleDeletePress = expertuid => {
        dispatch(
            updateFavoriteExperts({
                uid: user.uid,
                favorites: favorites.filter(uid => uid !== expertuid),
            }),
        );
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
                           <Image
                                resizeMode="cover"
                                style={[styles.expertProfile, {borderWidth:2}]}
                                source={{
                                    uri: profileImageUrl ? profileImageUrl : '',
                                }}
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
                                       {lang.profileHeader.profile}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                               
                                <TouchableOpacity
                                    style={styles.heartIconView}
                                    onPress={() => {
                                        ifExists(item.uid)
                                            ? handleDeletePress(item.uid)
                                            : handleAddPress(item.uid);
                                    }}
                                >
                                     <Ionicons
                            style={styles.heartIcon}
                            name={ifExists(item.uid)? "heart" : "heart-outline"}
                            color={ifExists(item.uid)? "#EB5794" : colors.greyDark} 
                            size={25}
                        />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.chatIcon}
                                    onPress={() => {
                                        navigation.navigate(
                                            screenNames.Messages,
                                            {
                                                expertDetails: item,
                                            },
                                        );
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        source={icons.chatIcon}
                                    />
                                </TouchableOpacity>
                            </View>
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

export default withNavigation(Favorites);
