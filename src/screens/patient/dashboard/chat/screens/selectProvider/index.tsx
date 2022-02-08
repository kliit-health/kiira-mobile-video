import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Platform } from 'react-native';
import { Header, Text, Screen } from '~/components';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { withNavigation } from 'react-navigation';
import Experts from './experts';
import Favorites from './favorites';
import FilterModal from './filterModal';
import { h3 } from '~/components/styles';
import { colors } from '~/utils/constants';

const SelectChatProvider = ({ navigation }) => {
    const { expertData } = useSelector(state => state.chooseExpert);
    const favorites = useSelector((state: any) => state.favoriteExperts.data);
    const lang = useSelector(state => state.language);
    const [experts, setExperts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const serviceType = navigation.state.params.type;

    useEffect(() => {
        setInitialExperts();
    }, []);

    const setInitialExperts = () => {
        let filtered = expertData.filter(expert => {
            if (expert.chatTypes) {
                return expert.chatTypes.includes(serviceType);
            }
        });
        setExperts(filtered);
    };

    const filterExperts = (gender, languages) => {
        setInitialExperts();
        let experts = expertData.filter(expert =>
            expert.chatTypes.includes(serviceType),
        );

        let filtered = experts;
        if (gender.length) {
            filtered = filtered.filter(
                expert => expert.profileInfo.gender === gender,
            );
        }

        if (languages.length) {
            filtered = filtered.filter(expert => {
                let expertLangs = [];
                expert.profileInfo.languages.forEach(lang =>
                    expertLangs.push(lang.value),
                );
                return languages.some(lang => expertLangs.includes(lang));
            });
        }

        setExperts(filtered);
    };
    const getFavoriteExperts = (favorites, experts) => {
        if (favorites.length > 0 && experts.length > 0) {
            const fav = experts.filter(experts =>
                favorites.some(uid => experts.uid === uid),
            );
            return fav;
        }
        return [];
    };

    const getNonFavoriteExperts = (favorites, experts) => {
        const fav = experts.filter(
            experts => !favorites.some(uid => experts.uid === uid),
        );
        return fav;

        return [];
    };
    return (
        <Screen test="Select Chat Expert">
            <View>
                <Header
                    title="Providers"
                    onBack={() => navigation.goBack()}
                    onFilterPress={() => setShowFilter(true)}
                />
                {getFavoriteExperts(favorites, experts).length > 0 ? (
                    <Text
                        options={[h3, { color: colors.greyDark }]}
                    >{`Your Squad`}</Text>
                ) : null}
                {expertData ? (
                    <Favorites
                        experts={getFavoriteExperts(favorites, experts)}
                    />
                ) : null}
                {getNonFavoriteExperts(favorites, experts).length > 0 ? (
                    <Text
                        options={[h3, { color: colors.greyDark }]}
                    >{`All Providers`}</Text>
                ) : null}
                {expertData ? (
                    <Experts
                        experts={getNonFavoriteExperts(favorites, experts)}
                    />
                ) : null}
                {showFilter && (
                    <FilterModal
                        show={showFilter}
                        lang={lang}
                        toggleModal={setShowFilter}
                        filterExperts={filterExperts}
                        count={experts.length}
                    />
                )}
            </View>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </Screen>
    );
};

export default withNavigation(SelectChatProvider);
