import React from 'react';
import {shape, node, object, string, func, bool} from 'prop-types';
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
    label: mergeStyles([
      defaultStyles.label,
      [modifiers.outlined.label, outlined],
      customStyles.label,
    ]),
    textInput: mergeStyles([defaultStyles.textInput, customStyles.textInput]),
    chevronContainer: mergeStyles([
      defaultStyles.chevronContainer,
      [modifiers.outlined.chevronContainer, outlined],
      customStyles.chevronContainer,
    ]),
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        style={styles.root}>
        <Input
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
  value: string,
  chevron: bool,
  placeholder: string,
  multiline: bool,
  outlined: bool,
  label: string,
  defaultValue: string,
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
};

export default TextInput;
