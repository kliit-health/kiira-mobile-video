import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, FlatList } from 'react-native';
import moment from 'moment';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TimeDisplay } from '~/components';
import { screenNames } from '~/utils/constants';
import BlueDot from '../../../../../svgs/blue_dot.svg';
import styles from './styles';

const ResolvedQuestions = ({ data, navigation, visible }) => {
    const handleItemPress = questionData => {
        navigation.navigate(screenNames.expertChat, { questionData });
    }; 
    return visible ? (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item.uid} ${index}`}
            contentContainerStyle={styles.list.listContainer}
            ListEmptyComponent={() => <Fallback />}
            showsVerticalScrollIndicator={false}
            style={styles.list.mainContainer}
            renderItem={({ item }) => (
                <ListItem {...item} onPress={handleItemPress} />
            )}
        />
    ) : (
        <View />
    );
};

const ListItem = props => {
    useEffect(() => {
        (async () => {
            await Image.prefetch(profileImageUrl);
            setLoading(false); 
        })(); 
    }, []); 

    const [loading, setLoading] = useState(true);  
    const { userInfo, lastMessage, modifiedDate, onPress } = props;
    const { firstName, lastName, profileImageUrl } = userInfo.profileInfo;
    const lang = useSelector(state => state.language);
    const handlePress = () => {
        if (onPress) {
            onPress(props);
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.item.card, {borderBottomWidth:1}]}
            onPress={handlePress}
        >
            
            <View style={styles.item.imageContainer}> 
                <BlueDot/>
                <Image
                    style={styles.item.image}
                    source={
                        loading
                            ? require('../../../../../../assets/profile_img_placeholder.png')
                            : { uri: profileImageUrl }
                    }
                    resizeMode={'contain'}
                />
            </View>
            <View style={styles.item.outerContainer}>
                <View> 
                    <Text
                        style={styles.item.subtitle}
                    >{`${firstName} ${lastName}`}</Text>
                </View>
                <View style={styles.item.innerContainer}> 
                    <Text numberOfLines={1} style={styles.item.title}>
                        {lastMessage}
                    </Text>
                </View>
            </View> 
            <Text  style={styles.item.time}>{moment(modifiedDate).format('hh:mm A')}</Text>
        </TouchableOpacity>
    );
};

const Fallback = () => {
    const lang = useSelector(state => state.language);
    return (
        <View style={styles.fallBack.container}>
            <Text style={styles.fallBack.text}>
                {lang.expertChats.noQuestions}
            </Text>
        </View>
    );
};

export default ResolvedQuestions;
