import React from 'react';
import { string } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { mergeStyles } from '~/utils/functions';
import defaultStyles, { modifiers } from './styles';

const PlanCard = (props) => {
  const { title, disabled, selected, onPress, price, visits, chats } = props;

  const handlePress = () => {
    onPress(props);
  };

  const styles = {
    card: mergeStyles([
      defaultStyles.card,
      [modifiers.card.selected, selected],
      [modifiers.card.disabled, disabled],
    ]),
    title: mergeStyles([
      defaultStyles.title,
      [modifiers.title.selected, selected],
      [modifiers.title.disabled, disabled],
    ]),
    price: mergeStyles([
      defaultStyles.price,
      [modifiers.price.selected, selected],
      [modifiers.price.disabled, disabled],
    ]),
    item: mergeStyles([
      defaultStyles.item,
      [modifiers.item.selected, selected],
      [modifiers.item.disabled, disabled],
    ]),
    container: defaultStyles.container,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={styles.card}
      onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{`$${price}`}</Text>
      <View style={styles.container}>
        <Text style={styles.item}>{`Chats: ${chats}`}</Text>
        <Text style={styles.item}>{`Visits: ${visits}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

PlanCard.propTypes = {
  title: string,
};

PlanCard.defaultProps = {
  title: '',
};

export default PlanCard;
