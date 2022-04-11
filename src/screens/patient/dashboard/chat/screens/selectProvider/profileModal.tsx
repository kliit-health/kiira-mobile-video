import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Kiira from '~/components';
import { select_provider } from '~/components/styles';

const ProfileModal = ({ expert, showProfile, toggleProfile }) => (
    <Kiira.Modal
        styles={{
            root: {
                marginTop: 150,
                marginHorizontal: 0,
            },
        }}
        visible={showProfile}
        onBackdropPress={toggleProfile}
    >
        <FastImage
            style={[select_provider.pad_h, select_provider.image_lg, select_provider.white_br, select_provider.center, { marginTop: -50 }]}
            source={{
                uri: expert.profileInfo.profileImageUrl,
                priority: FastImage.priority.normal,
            }}
        />
        <Kiira.Column options={[select_provider.white_bg, select_provider.justify_fs, select_provider.sm_pad_v]}>
            <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge, select_provider.center]}>
                {expert.expertName}
            </Kiira.Text>
            <Kiira.Text options={[select_provider.pad_h, select_provider.medium, select_provider.light, select_provider.center, select_provider.sm_pad_v]}>
                {expert.profileInfo.profession.fullName}
            </Kiira.Text>
            <Kiira.Line options={[select_provider.grey_br_b_md]} />
            <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Specialities</Kiira.Text>
            <Kiira.Row options={[select_provider.no_pad_v, { height: 60 }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    data={expert.profileInfo.profession.specialities}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <Kiira.Text
                                options={[
                                    select_provider.sm_pad_h,
                                    select_provider.sm_pad_v,
                                    select_provider.blue_bg,
                                    { height: 40 },
                                    select_provider.pad_sm,
                                    select_provider.radius_sm,
                                    select_provider.hide_overflow,
                                ]}
                            >
                                {item}
                            </Kiira.Text>
                        );
                    }}
                />
            </Kiira.Row>
            <ScrollView>
                <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Bio</Kiira.Text>
                <Kiira.Text options={[select_provider.pad]}>
                    {expert.profileInfo.bio}
                </Kiira.Text>
                <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Languages</Kiira.Text>
                <Kiira.Row options={[select_provider.pad]}>
                    {expert.profileInfo.languages.map(lang => (
                        <Kiira.Text
                            key={lang.value}
                        >{`${lang.value}  `}</Kiira.Text>
                    ))}
                </Kiira.Row>
            </ScrollView>
            <Kiira.Button
                testID="Close Profile"
                onPress={() => toggleProfile(false)}
                style={{ container: [select_provider.pad_h, select_provider.pad_v] }}
                title="Close Profile"
            />
        </Kiira.Column>
    </Kiira.Modal>
);

export default ProfileModal;
