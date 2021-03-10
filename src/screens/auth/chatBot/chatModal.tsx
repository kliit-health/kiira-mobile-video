import React, {useState} from 'react';
import CustomModal from '../../../components/customselectModal';

const ChatModal = (props) => {
  const {triggerNextStep, trigger, data} = props;
  const [showModal, setShowModal] = useState(true);
  const [selected, setSelected] = useState('');

  return showModal ? (
    <CustomModal
      data={data}
      onSelection={(item) => {
        setShowModal(false);
        setSelected(item);
        triggerNextStep({
          value: item,
          trigger,
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

export default ChatModal;
