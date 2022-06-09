import React from 'react';
import { View, Linking, Text } from 'react-native';
import moment from 'moment';
import HTML from 'react-native-render-html';
import styles from './styles';
import Image from 'react-native-fast-image';
import { pure } from 'recompose';
import CustomText from '~/components/customText';
import { Conditional, Avatar } from '~/components';
import FastImage from 'react-native-fast-image';
import Constant from '~/utils/constants';
import metrices from '~/utils/metrices';
import IconButton from '~/components/iconButton';
const MessageListItem = ({
  item,
  index,
  textkey,
  lastIndex,
  expertProfile,
}) => {
  console.log('expertProfile', expertProfile);
  const renderView = (item, index, key, lastIndex) => {
    item = item.data && item.data() ? item.data() : item;
    const status = item.isRead ? 'Read' : 'Sent';
    if (item.type === 'User' || item.type === 'user') {
      return (
        <View>
          <Conditional if={index === lastIndex - 1}>
            <View style={styles.rowLeftParentContainerStyle}>
              <View style={styles.avatarStyle}>
                <IconButton
                  styles={{ image: styles.profileStyle }}
                  source={
                    expertProfile
                      ? { uri: expertProfile }
                      : Constant.App.staticImages.profilePlaceholderImg
                  }
                />
              </View>
              <View style={styles.rowLeftContainerStyle}>
                <View style={styles.staticTextContainerStyle}>
                  <HTML
                    onLinkPress={(evt, href) => {
                      Linking.openURL(href);
                    }}
                    containerStyle={{
                      overflow: 'hidden',
                    }}
                    html={Constant.App.disclaimerTextForChat}
                    baseFontStyle={styles.staticTextStyle}
                  />
                </View>
              </View>
            </View>
          </Conditional>
          <View style={styles.rowRightParentContainerStyle}>
            <View style={styles.rowRightContainerView}>
              {item.text ? (
                <CustomText numberOfLines={0} style={styles.messagesRightText}>
                  {item.text}
                </CustomText>
              ) : null}
              {item.image ? (
                <Image
                  style={{
                    height: metrices.width - 100,
                    width: metrices.width - 100,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: item.image,
                  }}
                  defaultSource={
                    Constant.App.staticImages.profilePlaceholderImg
                  }
                />
              ) : null}
            </View>
          </View>
          <View style={styles.dateContainerStyle}>
            <CustomText numberOfLines={0} style={styles.dateTextStyle}>
              {`${status} ${moment.unix(item.createdAt).fromNow(true)} ago`}
            </CustomText>
          </View>
        </View>
      );
    } else if (item.type === 'Expert' || item.type === 'expert') {
      return (
        <View>
          <Conditional if={index === lastIndex - 1}>
            <View style={styles.rowLeftParentContainerStyle}>
              <View style={styles.rowLeftContainerStyle}>
                <View style={styles.staticTextContainerStyle}>
                  <HTML
                    onLinkPress={(evt, href) => {
                      Linking.openURL(href);
                    }}
                    containerStyle={{
                      overflow: 'hidden',
                    }}
                    html={Constant.App.disclaimerTextForChat}
                    baseFontStyle={styles.staticTextStyle}
                  />
                  <Text>{Constant.App.disclaimerTextForChat}</Text>
                </View>
              </View>
            </View>
          </Conditional>
          <View style={styles.rowLeftParentContainerStyle}>
            {item.text && item.createdAt && (
              <View style={{ alignSelf: 'flex-end' }}>
                <FastImage
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                  }}
                  source={{
                    uri: expertProfile,
                  }}
                />
              </View>
            )}
            <View style={styles.rowLeftContainerStyle}>
              {item.text && item.createdAt ? (
                <>
                  <CustomText numberOfLines={0} style={styles.messagesLeftText}>
                    {item.text}
                  </CustomText>
                </>
              ) : !item.image && item.text ? (
                <View style={styles.staticTextContainerStyle}>
                  <HTML
                    onLinkPress={(evt, href) => {
                      Linking.openURL(href);
                    }}
                    containerStyle={{
                      overflow: 'hidden',
                    }}
                    html={Constant.App.disclaimerTextForChat}
                    baseFontStyle={styles.staticTextStyle}
                  />
                  <Text>{Constant.App.disclaimerTextForChat}</Text>
                </View>
              ) : null}
              {item.image ? (
                <Image
                  style={{
                    height: metrices.width - 100,
                    width: metrices.width - 100,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: item.image,
                  }}
                  defaultSource={
                    Constant.App.staticImages.profilePlaceholderImg
                  }
                />
              ) : null}
            </View>
          </View>
          {item.createdAt && (
            <View
              style={[styles.dateContainerStyle, { alignSelf: 'flex-start' }]}>
              <CustomText numberOfLines={0} style={styles.dateTextStyle}>
                {`Sent ${moment.unix(item.createdAt).fromNow(true)} ago`}
              </CustomText>
            </View>
          )}
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  return renderView(item, index, textkey, lastIndex);
};

export default pure(MessageListItem);
