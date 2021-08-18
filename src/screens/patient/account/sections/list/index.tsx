import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { View, Text } from 'react-native';
import { get } from 'lodash';
import model from './model';
import { ListItem } from '~/components';
import styles from './styles';

export default ({ onItemPress }) => {
    const language = useSelector(state => state.language, shallowEqual);

    return (
        <View>
            {model.map(({ title, destination }) => (
                <ListItem
                    key={title}
                    id={destination}
                    onPress={onItemPress}
                    displayChevron
                >
                    <Text style={styles.title}>{get(language, title)}</Text>
                </ListItem>
            ))}
        </View>
    );
};
