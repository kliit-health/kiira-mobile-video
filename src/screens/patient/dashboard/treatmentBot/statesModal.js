import React, {useState} from 'react';
import CustomModal from '../../../../components/customselectModal';
import Constant from '../../../../utils/constants';

const StatesModal = (props) => {
  const [showSelectStateModal, setShowSeletStateModal] = useState(true);
  const [selectedState, setSelectedState] = useState('');

  return showSelectStateModal ? (
    <CustomModal
      data={Constant.App.Modal.states}
      onSelection={(item) => {
        setShowSeletStateModal(false);
        setSelectedState(item);
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
