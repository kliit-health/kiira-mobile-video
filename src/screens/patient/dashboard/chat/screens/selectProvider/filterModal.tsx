import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, Header, Screen, Button, Column, Row } from '~/components';
import Constant from '~/utils/constants';
import styles from './styles';

const FilterModal = ({ show, lang, toggleModal, filterExperts, count }) => {
  const { staticImages } = Constant.App;
  const {
    checkBoxIcon,
    checkBoxSelectedIcon,
    radioCheckBlueIcon,
    radioUnCheckBlueIcon,
  } = staticImages;

  const chooseExpert = useSelector(state => state.chooseExpert);
  const { languagesData } = chooseExpert;
  const [languagePreference, setLanguagePreference] = useState(
    Object.assign(
      [],
      [],
      languagesData.map(({ value, code }) => {
        return {
          value,
          code,
          selected: false,
        };
      }),
    ),
  );
  const [genderPreference, setGenderPreference] = useState([
    {
      title: 'Female',
      code: 'Female',
      selected: false,
    },
    {
      title: 'Male',
      code: 'Male',
      selected: false,
    },
  ]);

  const resetLang = () => {
    setLanguagePreference(
      Object.assign(
        [],
        [],
        languagePreference.map(({ value, code }) => {
          return {
            value,
            code,
            selected: false,
          };
        }),
      ),
    );
  };

  const handleGenderSelect = (title, key) => {
    genderPreference.forEach((element, index) => {
      if (element.selected && element.title !== title) {
        genderPreference[index].selected = false;
      }
    });
    genderPreference[key].selected = genderPreference[key].selected
      ? false
      : true;
    setGenderPreference(Object.assign([], [], genderPreference));
    resetLang();
    filterExperts(title, []);
  };

  const handleLanguageSelect = (value, key) => {
    const languages = [];
    languagePreference[key].selected = languagePreference[key].selected
      ? false
      : true;
    setLanguagePreference(Object.assign([], [], languagePreference));
    languagePreference.forEach(item => {
      if (item.selected) {
        languages.push(item.value);
      }
    });
    filterExperts('', languages);
  };

  useEffect(() => {
    filterExperts('', []);
  }, []);

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      isVisible={show}>
      <Screen options={[styles.container]}>
        <Header
          title="Filters"
          onClose={() => {
            filterExperts('', []);
            toggleModal(false);
          }}
        />

        <Column options={[styles.genderContainer]}>
          <Text options={[styles.genderTitle]}>
            {lang.chooseExpert.genderFilterTitle}
          </Text>
          {genderPreference.map(({ selected, title }, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handleGenderSelect(title, key)}>
              <Row options={[styles.itemContainer]}>
                <Image
                  resizeMode="contain"
                  source={selected ? radioCheckBlueIcon : radioUnCheckBlueIcon}
                  style={styles.checkboxIcon}
                />
                <Text options={[styles.itemText]}>{title}</Text>
              </Row>
            </TouchableOpacity>
          ))}
        </Column>

        <Column options={[styles.langContainer]}>
          <Text options={[styles.langTitle]}>
            {lang.chooseExpert.languageFilterTitle}
          </Text>
          {languagePreference.map(({ selected, value }, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handleLanguageSelect(value, key)}>
              <View style={styles.itemContainer}>
                <Image
                  resizeMode="contain"
                  source={selected ? checkBoxSelectedIcon : checkBoxIcon}
                  style={styles.checkboxIcon}
                />
                <Text options={[styles.itemText]}>{value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Column>
        <Button
          disabled={count === 0}
          onPress={() => {
            resetLang();
            toggleModal(false);
          }}
          style={{
            container:
              count > 0 ? styles.searchButton : styles.searchButtonDisabled,
          }}
          title={`Show ${count} Expert(s)`}
        />
      </Screen>
    </Modal>
  );
};

export default FilterModal;
