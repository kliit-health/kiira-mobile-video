import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text, SectionList} from 'react-native';
import moment from 'moment';
import intl from '../../../../utils/localization';
import {screenNames} from '../../../../utils/constants';
import {ListItem, TextButton} from '../../../../components';
import {getSections, formatTime} from './helpers';
import {
  listStyles,
  itemFutureStyles,
  itemPastStyles,
  fallbackStyles,
  separatorStyles,
  itemModifiers,
} from './styles';

const VideoHistory = ({navigation, expertDetails}) => {
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
    }
  };

  return (
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
      renderItem={({item: {visit, isUpcoming}}) => {
        return isUpcoming ? (
          <ItemFuture
            key={visit.id}
            onPress={handleFutureItemPress}
            {...visit}
          />
        ) : (
          <ItemPast key={visit.id} onPress={handlePastItemPress} {...visit} />
        );
      }}
    />
  );
};

const ItemFuture = (props) => {
  const {reason, time, expert, onPress} = props;
  const {firstName, lastName} = expert;

  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  return (
    <View style={itemFutureStyles.root}>
      <View style={itemFutureStyles.headerContainer}>
        <Text style={itemFutureStyles.title}>
          {`${intl.en.videoHistory.videoWith} ${firstName} ${lastName}`}
        </Text>
        <View style={itemFutureStyles.subtitleContainer}>
          <Text style={itemFutureStyles.subject}>
            {intl.en.videoHistory.subject}
          </Text>
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
        {intl.en.videoHistory.viewDetails}
      </TextButton>
    </View>
  );
};

const ItemPast = (props) => {
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
          <Text style={itemPastStyles.subject}>
            {intl.en.videoHistory.subject}
          </Text>
          <Text style={itemPastStyles.subtitle}>{reason}</Text>
        </View>
        <View style={itemPastStyles.subtitleContainer}>
          <Text style={itemPastStyles.subject}>
            {intl.en.videoHistory.visitId}
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

const Fallback = () => (
  <View style={fallbackStyles.container}>
    <Text style={fallbackStyles.description}>{intl.en.videoHistory.empty}</Text>
  </View>
);

export default VideoHistory;
