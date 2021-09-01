import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';
import Tab from '../tab';

import { default as globalStyles } from '../styles';

const {
    active,
    blue_br_b,
    bottom,
    inactive,
    none,
    pad_bottom,
    regular,
    small,
    tiny,
    width_auto,
} = globalStyles;

const Tabs = ({ list, setPastSelected, pastSelected }) => {
    const [selected, setSelected] = useState(list[0].title);

    const line = [none, small, width_auto];
    const text = [inactive, pad_bottom, tiny, regular];

    const lineSelected = [bottom, blue_br_b, small, width_auto];
    const textSelected = [active, pad_bottom, tiny, regular];

    const handlePress = title => {
        setSelected(title);
        setPastSelected(!pastSelected);
    };

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={styles.listContainer}
                data={list}
                keyExtractor={({ title }) => title}
                extraData={selected}
                horizontal
                renderItem={({ item: { title } }) => (
                    <Tab
                        text={title}
                        textOptions={title === selected ? textSelected : text}
                        lineOptions={title === selected ? lineSelected : line}
                        handlePress={() => handlePress(title)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greyAccent,
        height: 40,
        borderBottomColor: colors.greyDark,
        borderBottomWidth: 1,
    },

    listContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default Tabs;
