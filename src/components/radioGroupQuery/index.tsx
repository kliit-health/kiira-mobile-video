import React, { useState, useEffect } from 'react';
import {
  shape,
  object,
  bool,
  string,
  number,
  func,
  arrayOf,
  oneOfType,
  any,
} from 'prop-types';
import { FlatList, View } from 'react-native';
import RadioButton from '../radioButton';
import { isEqual } from 'lodash';
import { mergeStyles } from '../../utils/functions';
import defaultStyles, { modifiers } from './styles';
import { text, colors, controlType } from '../../utils/constants';
import { Column, CheckBox } from '~/components';

/**
 * @desc - Radio Group Component
 * @param { object } styles - A nested styles object, see propTypes for shape.
 * @param { string[] } data - An array of strings to be listed. can be an array of objects too.
 * @param { object[] } data - An array of objects to be listed. can be an array of strings too.
 * @param { string } data[].label - The label string to be displayed. The label string of the selected item will be returned.
 * @param { any } data[].value - Any value. The value of the selected item will be returned.
 * @param { object } initialValue - The initial selected value passed as object or string. Must follow the provied data item format. The index of the initial selected item can be passed instead.
 * @param { number } initialIndex - The initial selected value passed as an index. Must follow the provied data item format. The data item of the initial selected item can be passed instead.
 * @param { function } onChange - A function that will be triggered if a selected item changed. Returns the selected item as the first argument and the second as the index.
 * @param { boolean } boxed - Determines if each radio button will be wrapped on a box. Not available on horizontal mode. Default is true.
 * @param { boolean } horizontal - If true displays the radio group in horizontal. Default is false.
 */

const RadioGroupQuery = ({
  styles: customStyles,
  data,
  type,
  initialValue,
  initialIndex,
  onChange,
  boxed,
  horizontal,
  scrollPaddingBottom = 0,
  onSelect = null,
}) => {
  const [selected, setSelected] = useState(undefined);
  const [index, setIndex] = useState(undefined);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    if (initialValue) {
      setSelected(initialValue);
    }
    setSelectedArray([]);
  }, [initialValue]);

  useEffect(() => {
    if (initialIndex) {
      setSelected(data[initialIndex]);
    }
  }, [initialIndex]);

  useEffect(() => {
    onChange(selected, index);
  }, [selected, index]);

  const handlePress = (item, index) => {
    setSelected(item);
    setIndex(index);

    if (onSelect) {
      onSelect(item);
    }
  };

  const handleChkPress = (item, index) => {
    const arrSelect = [];
    var existItem = false;
    for (let ni = 0; ni < selectedArray.length; ni++) {
      if (!compare(selectedArray[ni], item)) {
        arrSelect.push(selectedArray[ni]);
      } else {
        existItem = true;
      }
    }

    if (!existItem) {
      arrSelect.push(item);
    }

    setSelectedArray(arrSelect);
    onSelect(arrSelect);
  };

  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.horizontal.root, horizontal],
      customStyles.root,
    ]),
    button: {
      root: mergeStyles([
        defaultStyles.button,
        [modifiers.boxed.button, boxed],
        [modifiers.horizontal.button, horizontal],
      ]),
      label: mergeStyles([{ color: colors.black }]),
    },
    chkButton: {
      root: mergeStyles([
        defaultStyles.chkButton,
        [modifiers.boxed.chkButton, boxed],
        [modifiers.horizontal.button, horizontal],
      ]),
      label: mergeStyles([{ color: colors.black }]),
    },
    barLineStyle: {
      width: 1,
      height: 40,
      backgroundColor: '#DDE0E7',
      alignItems: 'center',
      marginHorizontal: 22,
      marginTop: -29,
    },
  };

  const compare = (first, second) => {
    return typeof first === 'object'
      ? isEqual(first, second)
      : first === second;
  };

  const compareChk = (first, arrayGroup) => {
    return arrayGroup.includes(first);
    // for(var ni = 0; ni < arrayGroup.length; ni++){
    //     if(first === arrayGroup[ni]){
    //         return true;
    //     }
    // }
    // return false;
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      contentContainerStyle={{ paddingBottom: scrollPaddingBottom }}
      keyExtractor={(item, index) => 'group' + index}
      renderItem={({ item, index }) =>
        type == controlType.RadioType ? (
          <Column>
            <RadioButton
              key={item + index}
              label={typeof item === 'object' ? item.label : item}
              selected={compare(item, selected)}
              onPress={() => handlePress(item, index)}
              boxed={horizontal ? false : boxed}
              styles={styles.button}
            />
            {index < data.length - 1 && <View style={styles.barLineStyle} />}
          </Column>
        ) : (
          <Column>
            <CheckBox
              key={item + index}
              label={typeof item === 'object' ? item.label : item}
              onPress={() => handleChkPress(item, index)}
              checked={compareChk(item, selectedArray)}
              styles={styles.chkButton}
            />
          </Column>
        )
      }
    />
  );
};

RadioGroupQuery.propTypes = {
  styles: shape({
    root: object,
    radio: shape({
      root: object,
      ring: object,
      circle: object,
      label: object,
    }),
  }),
  initialIndex: number,
  initialValue: oneOfType([
    string,
    shape({
      label: string,
      value: any,
    }),
  ]),
  data: arrayOf(
    oneOfType([
      string,
      shape({
        label: string,
        value: any,
      }),
    ]),
  ),
  onChange: func,
  boxed: bool,
  horizontal: bool,
};

RadioGroupQuery.defaultProps = {
  styles: {},
  initialIndex: undefined,
  initialValue: undefined,
  data: [],
  onChange: () => {},
  boxed: true,
  horizontal: false,
};

export default RadioGroupQuery;
