import React from 'react';
import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import CustomText from '~/components/customText';
import { Conditional } from '~/components';
import { Rating } from 'react-native-elements';
import styles from '../style';

const ExpertInfo = ({ expertData }) => {
    const lang = useSelector(state => state.language);

    return (
        <View>
            <View style={styles.expertInfoParentContainerStyle}>
                <View style={styles.expertImageContainer}>
                    <FastImage
                        style={styles.expertImage}
                        resizeMode="cover"
                        source={{ uri: expertData.profileInfo.profileImageUrl }}
                    />
                    <View>
                        <View style={styles.myRecentExpertContainerStyle}>
                            <View style={styles.expertName}>
                                <Text style={styles.expertNameTextStyle}>
                                    {`${expertData.profileInfo.firstName} ${expertData.profileInfo.lastName}`}
                                </Text>
                            </View>
                            <View style={styles.expertProfession}>
                                <CustomText
                                    style={styles.expertProfessionTextStyle}
                                >
                                    {
                                        expertData.profileInfo.profession
                                            .shortName
                                    }
                                </CustomText>

                                <Conditional if={expertData.isPrescriber}>
                                    <Image
                                        style={styles.expertPrescriberImage}
                                        source={require('../../../../../../../assets/rx.png')}
                                        resizeMode="contain"
                                    />
                                    <CustomText
                                        style={styles.expertPrescriberTextStyle}
                                    >
                                        {lang.expertProfile.prescriber}
                                    </CustomText>
                                </Conditional>
                            </View>
                            <View style={styles.expertIsPrescriber}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={parseFloat(
                                        expertData.rating / 2,
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ExpertInfo;
