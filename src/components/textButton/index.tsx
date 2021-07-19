import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {shape, node, object, bool, func, string, any, number} from 'prop-types';
import {
  TouchableOpacity,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import {colors} from '../../utils/constants';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';

export type TextButtonProps = {
  styles?: any;
  children: ReactNode;
  outlined?: boolean;
  id?: string;
  disabled?: boolean;
  hidden?: boolean;
  secondary?: boolean;
  link?: boolean;
  icon?: any;
  iconColor?: string;
  activeOpacity?: number;
  onPress?: (id: string) => void;
};

const TextButton = ({
  styles: customStyles,
  children,
  id,
  outlined,
  onPress,
  disabled,
  hidden,
  secondary,
  link,
  icon: Icon,
  iconColor,
  activeOpacity,
  ...rest
}: TextButtonProps) => {
  const handlePress = (event: GestureResponderEvent): void => {
    onPress(id);
  };

  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.hidden.root, hidden],
      [modifiers.disabled.root, disabled],
      [modifiers.secondary.root, secondary],
      [modifiers.link.root, link],
      customStyles.root,
    ]),
    touchable: mergeStyles([
      defaultStyles.touchable,
      [modifiers.outlined.touchable, outlined],
      [modifiers.secondary.touchable, secondary],
      [modifiers.link.touchable, link],
      customStyles.touchable,
    ]),
    text: mergeStyles([
      defaultStyles.text,
      [modifiers.outlined.text, outlined],
      [modifiers.secondary.text, secondary],
      [modifiers.link.text, link],
      customStyles.text,
    ]),
    icon: [defaultStyles.icon],
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={link ? ['transparent'] : ['#0089FF', '#0253E2']}
      style={styles.root}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled || hidden}
        style={styles.touchable}
        onPress={handlePress}
        {...rest}>
        {Icon && (
          <View style={styles.icon}>
            <Icon color={iconColor} />
          </View>
        )}
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

TextButton.displayName = 'TextButton';

TextButton.propTypes = {
  onPress: func,
  outlined: bool,
  children: node,
  disabled: bool,
  secondary: bool,
  hidden: bool,
  activeOpacity: number,
  id: string,
  icon: any,
  iconColor: string,
  link: bool,
  styles: shape({
    root: object,
    touchable: object,
    text: object,
  }),
};

TextButton.defaultProps = {
  onPress: () => {},
  outlined: false,
  disabled: false,
  secondary: false,
  activeOpacity: 0.8,
  icon: undefined,
  iconColor: colors.blueGrey,
  hidden: false,
  link: false,
  styles: {},
};

export default TextButton;
