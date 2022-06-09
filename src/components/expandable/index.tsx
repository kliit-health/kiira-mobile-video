import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Row from '../row';
import Column from '../column';
import Conditional from '../conditional';
import Icon from '../icon';
import styles from '../styles';
import Text from '../text';
import { icons } from '~/utils/constants';

const {
  align_items_c,
  pad_h,
  width_90,
  sm_pad_v,
  grey_br_t_md,
  space_between,
  flip_90,
  flip_270,
} = styles;

const Expandable = ({ list, onPress }) => {
  const [section, setSection] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleSelection = index => {
    setExpanded(!expanded);
    setSection(index);
    onPress();
  };

  const Section = ({ item, index }) => {
    const active = expanded && index === section;

    return (
      <Row options={[pad_h, width_90]}>
        <Column options={[grey_br_t_md]}>
          <Row options={[space_between, align_items_c]}>
            <Text options={[sm_pad_v, pad_h]}>{item.title}</Text>
            <Icon
              options={active ? [flip_270, pad_h] : [flip_90, pad_h]}
              source={icons.chevron}
            />
          </Row>
          <Conditional if={active}>
            {item.sections.map((item, index) => (
              <Text key={item} options={[sm_pad_v, pad_h]}>
                {'\u2022' + '   ' + item}
              </Text>
            ))}
          </Conditional>
        </Column>
      </Row>
    );
  };

  return list.map((item, index) => {
    return (
      <TouchableOpacity key={item.title} onPress={() => handleSelection(index)}>
        <Section key={item.title} item={item} index={index} />
      </TouchableOpacity>
    );
  });
};

export default Expandable;
