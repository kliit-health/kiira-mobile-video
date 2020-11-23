import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomModal from '../../components/customselectModal';
import Constant from '../../utils/constants';
import style from './Review/style';

const StatesModal = (props) => {
  const [showSelectStateModal, setShowSeletStateModal] = useState(true);
  const [selectedState, setSelectedState] = useState('');

  return showSelectStateModal ? (
    <CustomModal
      data={Constant.App.Modal.states}
      onSelection={(item) => {
        console.log(item);
        setShowSeletStateModal(false);
        setSelectedState(item);
        console.log('State Modal props', props);
        props.triggerNextStep({
          value: item,
          trigger: '9',
        });
      }}
      onClose={() => {
        this.setState({
          showSelectStateModal: false,
        });
      }}
    />
  ) : null;
};

export default StatesModal;
