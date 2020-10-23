import React from "react";
import { generateIdentifier } from "../../../../utils/functions";
import { FlatList } from "react-native";
import { default as MessageListItem } from "../messageListItem";
import styles from "./styles";

const MessageView = ({ messages, ...rest }) => (
	<FlatList
		data={messages}
		style={styles.flatlist}
		keyExtractor={() => generateIdentifier()}
		showsVerticalScrollIndicator={false}
		renderItem={itemProps => <MessageListItem {...itemProps} />}
		inverted={true}
		contentContainerStyle={styles.contentContainer}
		{...rest}
	/>
);

export default MessageView;
