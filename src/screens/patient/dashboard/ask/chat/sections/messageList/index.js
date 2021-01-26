import React from 'react';
import {generateIdentifier} from '../../../../../../../utils/functions';
import {FlatList} from 'react-native';
import {default as MessageListItem} from '../messageListItem';
import styles from './styles';

const MessageView = ({messages, ...rest}) => {
  const handleKeyExtractor = () => generateIdentifier();

  return (
    <FlatList
      data={messages}
      style={styles.flatlist}
      keyExtractor={handleKeyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={(props) => (
        <MessageListItem {...props} lastIndex={messages.length} />
      )}
      inverted={true}
      contentContainerStyle={styles.contentContainer}
      {...rest}
    />
  );
};

export default MessageView;
