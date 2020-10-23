import { createReducer } from "@reduxjs/toolkit";
import {
	GET_EXPERTS_DETAILS,
	UPDATE_FAVORITE_EXPERTS,
	GET_FAVORITE_EXPERTS,
} from "../../redux/types";

const initialState = {
	experts: [],
	favorites: [],
};

export default createReducer(initialState, {
	[GET_EXPERTS_DETAILS]: (state, { data }) => {
		state.experts = data;
	},
	[UPDATE_FAVORITE_EXPERTS]: (state, { data }) => {
		state.favorites = data;
	},
	[GET_FAVORITE_EXPERTS]: (state, { data }) => {
		if (data) {
			const favoritesDetails = data.map(uid =>
				state.experts.find(expert => uid === expert.uid)
			);

			state.favorites = favoritesDetails;
		}

		state.favorites = [];
	},
});
