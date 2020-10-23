import {
	GET_CHAT_HISTORY_ASYNC,
	GET_VIDEO_HISTORY_ASYNC,
} from "../../redux/types";

export const getChatHistoryAsync = () => ({
	type: GET_CHAT_HISTORY_ASYNC,
});

export const getVideoHistoryAsync = () => ({
	type: GET_VIDEO_HISTORY_ASYNC,
});
