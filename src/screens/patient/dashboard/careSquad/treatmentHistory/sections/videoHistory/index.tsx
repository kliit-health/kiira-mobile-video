import React, {Fragment, useState} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text, SectionList} from 'react-native';
import moment from 'moment';
import {screenNames, videoHistory} from 'utils/constants';
import {ListItem, TextButton, Modal} from 'components';
import {getSections, formatTime} from './helpers';
import {
  listStyles,
  itemFutureStyles,
  itemPastStyles,
  fallbackStyles,
  separatorStyles,
  itemModifiers,
  messageStyles,
  messageModifiers,
} from './styles';

const VideoHistory = ({navigation, expertDetails}) => {
  const [visible, setVisible] = useState(false);
  const {visits} = useSelector(
    (state) => state.treatmentHistory.videoHistory,
    shallowEqual,
  );

  const handleFutureItemPress = (visit) => {
    navigation.navigate(screenNames.visit, {
      uid: expertDetails.uid,
      visit,
    });
  };

  const handlePastItemPress = ({id, locked}) => {
    if (locked) {
      navigation.navigate(screenNames.visitSummary, {
        id,
      });
    } else {
      setVisible(true);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <SectionList
        style={listStyles.root}
        ListEmptyComponent={() => <Fallback />}
        keyExtractor={({visit}, index) => `${visit.id} ${index}`}
        sections={getSections(
          visits.filter((visit) => visit.expert.uid === expertDetails.uid),
        )}
        renderSectionHeader={({section}) => (
          <SectionSeparator key={section.title} {...section} />
        )}
        renderItem={({item: {visit, isUpcoming}, index}) => {
          return isUpcoming ? (
            <ItemFuture
              key={visit.id}
              onPress={handleFutureItemPress}
              index={index}
              {...visit}
            />
          ) : (
            <ItemPast key={visit.id} onPress={handlePastItemPress} {...visit} />
          );
        }}
      />
      <ModalMessage
        visible={visible}
        onBackdropPress={handleClose}
        onClose={handleClose}
      />
    </Fragment>
  );
};

const ItemFuture = (props) => {
  const {reason, time, expert, onPress, index} = props;
  const {firstName, lastName} = expert;

  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  return (
    <View style={{...itemFutureStyles.root, marginTop: index === 0 ? 10 : 0}}>
      <View style={itemFutureStyles.headerContainer}>
        <Text style={itemFutureStyles.title}>
          {`${videoHistory.visitWith}${firstName} ${lastName}`}
        </Text>
        <View style={itemFutureStyles.subtitleContainer}>
          <Text style={itemFutureStyles.subject}>{videoHistory.subject}</Text>
          <Text style={itemFutureStyles.subtitle}>{reason}</Text>
        </View>
      </View>
      <View style={itemFutureStyles.timeContainer}>
        {formatTime(time).map(({primary, secondary}) => (
          <View key={primary} style={itemFutureStyles.timeItem}>
            <Text style={itemFutureStyles.primaryText}>{primary}</Text>
            <Text style={itemFutureStyles.secondaryText}>{secondary}</Text>
          </View>
        ))}
      </View>
      <TextButton onPress={handlePress} outlined styles={itemModifiers.button}>
        {videoHistory.viewDetails}
      </TextButton>
    </View>
  );
};

const ItemPast = (props) => {
  const lang = useSelector((state) => state.language);
  const {reason, time, id, onPress} = props;

  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  return (
    <ListItem onPress={handlePress} styles={itemModifiers.list}>
      <View>
        <View style={itemPastStyles.subtitleContainer}>
          <Text style={itemPastStyles.subject}>{videoHistory.subject}</Text>
          <Text style={itemPastStyles.subtitle}>{reason}</Text>
        </View>
        <View style={itemPastStyles.subtitleContainer}>
          <Text style={itemPastStyles.subject}>
            {lang.videoHistory.visitId}
          </Text>
          <Text style={itemPastStyles.subtitle}>{id}</Text>
        </View>
      </View>
      <View style={itemPastStyles.subtitleContainer}>
        <Text style={itemPastStyles.dateText}>
          {moment.unix(time).calendar(null, {
            sameElse: 'MM/DD/YYYY',
          })}
        </Text>
      </View>
    </ListItem>
  );
};

const SectionSeparator = ({title}) => (
  <View style={separatorStyles.container}>
    <Text style={separatorStyles.title}>{title}</Text>
  </View>
);

const Fallback = () => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={fallbackStyles.container}>
      <Text style={fallbackStyles.description}>{lang.videoHistory.empty}</Text>
    </View>
  );
};

const ModalMessage = ({onClose, ...rest}) => {
  const lang = useSelector((state) => state.language);

  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      styles={messageModifiers}
      {...rest}>
      <View style={messageStyles.card}>
        <Text style={messageStyles.messageText}>
          {lang.videoHistory.afterVisit}
        </Text>
      </View>
    </Modal>
  );
};

export default VideoHistory;
