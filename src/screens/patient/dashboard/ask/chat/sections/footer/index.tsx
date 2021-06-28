import React, {Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Image from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {icons, colors} from '~/utils/constants';
import styles from './styles';

const Footer = ({
  message,
  onPickerPress,
  onPickerCancel,
  onChangeText,
  imageUri: uri,
  onSendPress,
  resolved,
}) => {
  const lang = useSelector(state => state.language);

  const insets = useSafeAreaInsets();
  const headerHeight = 50;

  const handleSend = () => {
    if (message || uri) {
      onSendPress();
    }
  };

  return (
    <Fragment>
      {resolved ? (
        <Text style={styles.resolvedText}>{lang.chat.resolved}</Text>
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={insets.top + headerHeight}>
          <View style={styles.mainContainer}>
            {uri ? (
              <View style={styles.importedImageContainer}>
                <TouchableOpacity onPress={onPickerCancel}>
                  <Image
                    style={styles.cancelIcon}
                    resizeMode="cover"
                    source={icons.cross}
                  />
                </TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.importedImage}
                  source={{uri}}
                />
              </View>
            ) : null}
            <View style={styles.inputContainer}>
              {/* {Platform.OS === 'ios' && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.cameraContainer}
                  onPress={onPickerPress}>
                  <Image
                    style={styles.cameraIcon}
                    resizeMode="contain"
                    source={icons.camera}
                  />
                </TouchableOpacity>
              )} */}
              <View style={styles.messageContainer}>
                <TextInput
                  maxHeight={100}
                  multiline={true}
                  autoCapitalize="sentences"
                  onChangeText={onChangeText}
                  placeholder={lang.chat.enterMessage}
                  value={message}
                  style={styles.messageInput}
                  placeholderTextColor={colors.lightGrey}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.sendContainer}
                  onPress={handleSend}>
                  <Image
                    style={styles.sendIcon}
                    resizeMode="contain"
                    source={icons.send}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Fragment>
  );
};

export default Footer;
