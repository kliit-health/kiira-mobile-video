import React, {useState} from 'react';
import {
  shape,
  object,
  bool,
  string,
  func,
  number,
  arrayOf,
  node,
  oneOfType,
} from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import {addHashtag, cloneChild, cloneChildren} from '../../utils/functions';
import Avatar from '../avatar';
import Card from '../card';
import Ratings from '../ratings';
import {Prescriber} from '../icons';
import defaultStyles from './styles';

const ProfileCard = ({
  styles: customStyles,
  online,
  name,
  title,
  rating,
  tags,
  avatar,
  children,
  activeOpacity,
  onPress,
  id,
  prescriber,
}) => {
  const [layout, setLayout] = useState(undefined);

  const handlePress = () => {
    onPress(id);
  };

  const handleLayout = (layout) => {
    setLayout(layout);
  };

  const styles = {
    root: [defaultStyles.root, customStyles.root],
    header: [defaultStyles.header, customStyles.header],
    detailsBox: [defaultStyles.detailsBox, customStyles.detailsBox],
    nameText: [defaultStyles.nameText, customStyles.nameText],
    titleText: [defaultStyles.titleText, customStyles.titleText],
    tagsText: [defaultStyles.tagsText, customStyles.tagsText],
    actionBox: [defaultStyles.actionBox, customStyles.actionBox],
    labelsBox: [defaultStyles.labelsBox, customStyles.labelsBox],
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.root}
      activeOpacity={activeOpacity}>
      <Card avatarLayout={layout}>
        <Avatar online={online} source={avatar} onLayout={handleLayout} />
        <View style={styles.header}>
          <View style={styles.detailsBox}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          {rating && <Ratings value={rating} />}
        </View>
        <View style={styles.labelsBox}>{prescriber && <Prescriber />}</View>
        <Text style={styles.tagsText}>{addHashtag(tags)}</Text>
        <View style={styles.actionBox}>
          {cloneChild({children, name: 'TextButton'})}
          {cloneChild({children, name: 'IconButton'})}
        </View>
        <View style={styles.extra}>
          {cloneChildren({children, blacklist: ['TextButton', 'IconButton']})}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

ProfileCard.propTypes = {
  styles: shape({
    root: object,
  }),
  onPress: func,
  online: bool,
  name: string,
  title: string,
  rating: number,
  avatar: string,
  tags: arrayOf(string),
  children: node,
  id: oneOfType([string, number]),
  activeOpacity: number,
  prescriber: bool,
};

ProfileCard.defaultProps = {
  styles: {},
  onPress: () => {},
  online: null,
  name: undefined,
  title: undefined,
  rating: undefined,
  avatar: undefined,
  tags: [],
  id: undefined,
  activeOpacity: 1,
  prescriber: false,
};

export default ProfileCard;
