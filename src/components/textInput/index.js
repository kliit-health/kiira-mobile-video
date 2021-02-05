import React from 'react';
import {shape, node, object, string, func, bool, any} from 'prop-types';
import {TouchableOpacity, Text, TextInput as Input} from 'react-native';
import {mergeStyles} from '../../utils/functions';
import {colors} from '../../utils/constants';
import Chevron from '../../svgs/chevron.svg';
import defaultStyles, {modifiers} from './styles';
import {View} from 'react-native-animatable';

const TextInput = ({
  styles: customStyles,
  placeholder,
  chevron,
  children,
  onChange,
  onPress,
  multiline,
  value,
  id,
  outlined,
  label,
  defaultValue,
  editable,
  ...rest
}) => {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value, id);
    }
  };

  const handlePress = () => {
    if (onPress) {
      onPress(id);
    }
  };

  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.outlined.root, outlined],
      customStyles.root,
    ]),
    touchable: mergeStyles([
      defaultStyles.touchable,
      [modifiers.outlined.touchable, outlined],
      customStyles.touchable,
    ]),
    label: mergeStyles([
      defaultStyles.label,
      [modifiers.outlined.label, outlined],
      customStyles.label,
    ]),
    textInput: mergeStyles([
      defaultStyles.textInput,
      [modifiers.outlined.textInput, outlined],
      customStyles.textInput,
    ]),
    chevronContainer: mergeStyles([
      defaultStyles.chevronContainer,
      [modifiers.outlined.chevronContainer, outlined],
      customStyles.chevronContainer,
    ]),
  };

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        style={styles.touchable}>
        <Input
          editable={editable}
          pointerEvents={onPress ? 'none' : 'auto'}
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          style={styles.textInput}
          placeholderTextColor={colors.blueGrey}
          multiline={multiline}
          defaultValue={defaultValue}
          {...rest}
        />
        {chevron && (
          <View style={styles.chevronContainer}>
            <Chevron color={colors.gray} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

TextInput.propTypes = {
  onPress: func,
  onChange: func,
  children: node,
  value: any,
  chevron: bool,
  placeholder: string,
  multiline: bool,
  outlined: bool,
  label: string,
  defaultValue: string,
  editable: bool,
  styles: shape({
    root: object,
  }),
};

TextInput.defaultProps = {
  onChange: () => {},
  placeholder: undefined,
  value: undefined,
  chevron: false,
  multiline: false,
  outlined: false,
  styles: {},
  label: undefined,
  defaultValue: undefined,
  editable: true,
};

export default TextInput;
