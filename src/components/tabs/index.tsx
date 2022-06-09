import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '~/utils/constants';
import { Tab as TabType } from '~/screens/patient/dashboard/book/model';
import Tab from '../tab';

import { default as globalStyles } from '../styles';

const {
  sm_pad_h,
  blue,
  blue_br_b,
  inactive,
  none,
  regular,
  small,
  tiny,
  width_auto,
  text_space,
} = globalStyles;

export type TabsType = {
  list: TabType[];
  setActive?: (label?: string, list?: TabType[]) => void;
  active?: boolean;
  options?: null | ViewStyle[];
};

const Tabs = ({ list, setActive, active, options = null }: TabsType) => {
  const [selected, setSelected] = useState(list[0].title);

  const line = [{ borderTopWidth: 0 }, sm_pad_h, none, small, width_auto];
  const text = [{ height: 20 }, inactive, tiny, regular, text_space];

  const lineSelected = [
    { borderTopWidth: 0 },
    sm_pad_h,
    blue_br_b,
    small,
    width_auto,
  ];
  const textSelected = [{ height: 20 }, blue, tiny, regular, text_space];

  const handlePress = (title: string, label: string, list) => {
    setSelected(title);
    if (setActive) {
      setActive(label, list);
    }
  };

  return (
    <View style={[styles.container, options]}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.listContainer}
        data={list}
        keyExtractor={({ title }) => title}
        extraData={selected}
        horizontal
        renderItem={({ item: { title, label } }) => (
          <Tab
            text={title}
            textOptions={title === selected ? textSelected : text}
            lineOptions={title === selected ? lineSelected : line}
            handlePress={() => handlePress(title, label, list)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.greyLight,
    borderBottomColor: colors.greyDark,
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
  },

  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
  },
});

export default Tabs;
