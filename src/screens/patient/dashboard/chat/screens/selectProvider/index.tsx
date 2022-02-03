import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Platform } from 'react-native';
import { Header, Text, Screen } from '~/components';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { withNavigation } from 'react-navigation';
import Experts from './experts';
import FilterModal from './filterModal';
import { h2 } from '~/components/styles';

const SelectChatProvider = ({ navigation }) => {
    const { expertData } = useSelector(state => state.chooseExpert);
    const lang = useSelector(state => state.language);
    const [experts, setExperts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const serviceType = navigation.state.params.type;

    useEffect(() => {
        setInitialExperts();
    }, []);

    const setInitialExperts = () => {
        let filtered = expertData.filter(expert =>
            expert.chatTypes.includes(serviceType),
        );
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

    return (
        <Screen test="Select Chat Expert">
            <View>
                <Header
                    title="Providers"
                    onBack={() => navigation.goBack()}
                    onFilterPress={() => setShowFilter(true)}
                />
                <Text options={[h2]}>{`Choose a ${serviceType} Expert`}</Text>
                {expertData && <Experts experts={experts} />}
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
