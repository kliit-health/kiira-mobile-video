import React from 'react';
import {View, Linking, Text} from 'react-native';
import moment from 'moment';
import HTML from 'react-native-render-html';
import styles from './styles';
import Image from 'react-native-fast-image';

import CustomText from '~/components/customText';
import Constant from '~/utils/constants';
import metrices from '~/utils/metrices';

class MessageListItem extends React.PureComponent {
	public props: any;
	public staticImages: any;
	public item: any;
	public index: any;
	public textkey: any;
	public lastIndex: any;

  constructor(props) {
    super(props);
  }

  renderView(item, index, key, lastIndex) {
    const {staticImages} = Constant.App;
    item = item.data();
    if (item.type === 'User' || item.type === 'user') {
      return index === lastIndex - 1 ? (
        <View>
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
              </View>
            </View>
          </View>
          <View style={styles.rowRightParentContainerStyle}>
            <View style={styles.rowRightContainerView}>
              {item.text ? (
                <CustomText
                  numberOfLines={0}
                  style={styles.messagesRightTextStyle}>
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
              <View style={styles.dateContainerStyle}>
                <CustomText numberOfLines={0} style={styles.dateTextStyle}>
                  {moment.unix(item.createdAt).fromNow(true)}
                </CustomText>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  resizeMode="contain"
                  source={
                    item.isRead
                      ? staticImages.readMsgIcon
                      : staticImages.unreadMsgIcon
                  }
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.rowRightParentContainerStyle}>
          <View style={styles.rowRightContainerView}>
            {item.text ? (
              <CustomText
                numberOfLines={0}
                style={styles.messagesRightTextStyle}>
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
                defaultSource={Constant.App.staticImages.profilePlaceholderImg}
              />
            ) : null}
            <View style={styles.dateContainerStyle}>
              <CustomText numberOfLines={0} style={styles.dateTextStyle}>
                {moment.unix(item.createdAt).fromNow(true)}
              </CustomText>
              <Image
                style={{
                  width: 18,
                  height: 18,
                }}
                resizeMode="contain"
                source={
                  item.isRead
                    ? staticImages.readMsgIcon
                    : staticImages.unreadMsgIcon
                }
              />
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'Expert' || item.type === 'expert') {
      return index === lastIndex - 1 ? (
        <View>
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
          <View style={styles.rowLeftParentContainerStyle}>
            <View style={styles.rowLeftContainerStyle}>
              {item.text && item.createdAt ? (
                <CustomText
                  numberOfLines={0}
                  style={styles.messagesLeftTextStyle}>
                  {item.text}
                </CustomText>
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
              {item.createdAt ? (
                <View style={styles.dateContainerStyle}>
                  <CustomText numberOfLines={0} style={styles.dateTextStyle}>
                    {moment.unix(item.createdAt).fromNow(true)}
                  </CustomText>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.rowLeftParentContainerStyle}>
          <View style={styles.rowLeftContainerStyle}>
            {item.text && item.createdAt ? (
              <CustomText
                numberOfLines={0}
                style={styles.messagesLeftTextStyle}>
                {item.text}
              </CustomText>
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
                defaultSource={Constant.App.staticImages.profilePlaceholderImg}
              />
            ) : null}
            {item.createdAt ? (
              <View style={styles.dateContainerStyle}>
                <CustomText numberOfLines={0} style={styles.dateTextStyle}>
                  {moment.unix(item.createdAt).fromNow(true)}
                </CustomText>
              </View>
            ) : null}
          </View>
        </View>
      );
    }
  }

  render() {
    const {item, index, textkey, lastIndex} = this.props;
    return this.renderView(item, index, textkey, lastIndex);
  }
}

export default MessageListItem;
