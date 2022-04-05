import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Kiira from '~/components';
import { select_provider } from '~/components/styles';

const {
    medium,
    xLarge,
    image_lg,
    white_bg,
    sm_pad_v,
    sm_pad_h,
    grey_br_b_md,
    white_br,
    pad_h,
    light,
    justify_fs,
    center,
    blue_bg,
    pad,
    pad_sm,
    radius_sm,
    hide_overflow,
    no_pad_v,
    pad_v,
} = select_provider;

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
            style={[pad_h, image_lg, white_br, center, { marginTop: -50 }]}
            source={{
                uri: expert.profileInfo.profileImageUrl,
                priority: FastImage.priority.normal,
            }}
        />
        <Kiira.Column options={[white_bg, justify_fs, sm_pad_v]}>
            <Kiira.Text options={[pad_h, xLarge, center]}>
                {expert.expertName}
            </Kiira.Text>
            <Kiira.Text options={[pad_h, medium, light, center, sm_pad_v]}>
                {expert.profileInfo.profession.fullName}
            </Kiira.Text>
            <Kiira.Line options={[grey_br_b_md]} />
            <Kiira.Text options={[pad_h, xLarge]}>Specialities</Kiira.Text>
            <Kiira.Row options={[no_pad_v, { height: 60 }]}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    data={expert.profileInfo.profession.specialities}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <Kiira.Text
                                options={[
                                    sm_pad_h,
                                    sm_pad_v,
                                    blue_bg,
                                    { height: 40 },
                                    pad_sm,
                                    radius_sm,
                                    hide_overflow,
                                ]}
                            >
                                {item}
                            </Kiira.Text>
                        );
                    }}
                />
            </Kiira.Row>
            <ScrollView>
                <Kiira.Text options={[pad_h, xLarge]}>Bio</Kiira.Text>
                <Kiira.Text options={[pad]}>
                    {expert.profileInfo.bio}
                </Kiira.Text>
                <Kiira.Text options={[pad_h, xLarge]}>Languages</Kiira.Text>
                <Kiira.Row options={[pad]}>
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
                style={{ container: [pad_h, pad_v] }}
                title="Close Profile"
            />
        </Kiira.Column>
    </Kiira.Modal>
);

export default ProfileModal;
