import {
	GET_EXPERTS_DETAILS_ASYNC,
	UPDATE_FAVORITE_EXPERTS_ASYNC,
	GET_FAVORITE_EXPERTS_ASYNC,
} from "../../redux/types";

export const getExpertsDetailsAsync = () => ({
	type: GET_EXPERTS_DETAILS_ASYNC,
});

export const updateFavoriteExpertsAsync = data => ({
	type: UPDATE_FAVORITE_EXPERTS_ASYNC,
	data,
});

export const getFavoriteExpertsAsync = () => ({
	type: GET_FAVORITE_EXPERTS_ASYNC,
});
