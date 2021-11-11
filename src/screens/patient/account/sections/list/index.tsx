import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { get } from 'lodash';
import model from './model';
import { ListItem } from '~/components';
import styles from './styles';

export default ({ onItemPress }) => {
    const language = useSelector(state => state.language, shallowEqual);

    return (
        <View>
            {model.map(({ title, destination, content, icon }) => (
                <ListItem
                    key={title}
                    id={destination}
                    onPress={onItemPress}
                    displayChevron
                >
                    <View style={styles.listContainer}>
                    {icon && (
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={icon}
                        />
                    )}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{get(language, title)}</Text>
                        {content && ( 
                            <Text style={styles.content}>{content}</Text>
                        )}
                    </View>
                    </View>
                </ListItem>
            ))}
        </View>
    );
};
