import { put, takeEvery, select } from "redux-saga/effects";
import Language from "../../utils/localization";
import {
	showApiLoader,
	hideApiLoader,
} from "../../components/customLoader/action";
import {
	getRecentExpertsData,
	getQuestionsData,
	updateRefrealcodeForAllUsers,
	getDataFromTable,
	updateStatus,
} from "../../utils/firebase";
import { showOrHideModal } from "../../components/customModal/action";
import {
	getRecentExpertsDataSuccess,
	getQuestionDataSuccess,
	getPreviousQuestionDataSuccess,
} from "./action";
import { GET_QUESTION_DATA, UPDATE_USER_DATA } from "../../redux/types";
import { displayConsole } from "../../utils/helper";
import firebase from "react-native-firebase";
import Constant from "../../utils/constants";

let Lang = Language["en"];
const delay = ms => new Promise(res => setTimeout(res, ms));
let delayTime = 100;

function* updateNewKeyToUserTable({ id, data }) {
	console.log("updateNewKeyToUserTable*******", id);
	yield updateRefrealcodeForAllUsers(id, data);
}
function* getQuestions({ data, dispatch }) {
	try {
		const { expertsParams, questionParams, previousQuestionParams } = data;
		const user = yield firebase.auth().currentUser;
		const { uid } = user;
		const obj = {
			tableName: Constant.App.firebaseTableNames.users,
			uid,
		};
		const userData = yield getDataFromTable(obj);
		yield getQuestionsData(
			questionParams,
			querySnapshot => {
				dispatch(
					getQuestionDataSuccess(
						querySnapshot.docs && querySnapshot.docs.length > 0
							? querySnapshot.docs[0].data()
							: null
					)
				);
			},
			error => {
				const { message, code } = error;
				displayConsole("message getQuestionsData", message);
				displayConsole("code getQuestionsData", code);
				if (code && code !== "firestore/permission-denied") {
					dispatch(hideApiLoader());
					dispatch(
						showOrHideModal(message ? message : Lang.errorMessage.serverError)
					);
				}
			}
		);

		if (expertsParams && previousQuestionParams) {
			yield delay(delayTime);
			yield getRecentExperts(expertsParams, previousQuestionParams, dispatch);
		}
	} catch (error) {
		console.log("ASK ERROR", error);
		yield put(hideApiLoader());
		yield delay(500);
		yield put(showOrHideModal(Lang.errorMessage.serverError));
	}
}

function* getRecentExperts(expertsParams, previousQuestionParams, dispatch) {
	try {
		yield getRecentExpertsData(
			expertsParams,
			querySnapshot => {
				dispatch(
					getRecentExpertsDataSuccess(
						querySnapshot.docs && querySnapshot.docs.length > 0
							? querySnapshot.docs
							: []
					)
				);
			},
			error => {
				const { message, code } = error;
				displayConsole("message getRecentExpertsData", message);
				displayConsole("code getRecentExpertsData", code);
				if (code && code !== "firestore/permission-denied") {
					dispatch(hideApiLoader());
					dispatch(
						showOrHideModal(message ? message : Lang.errorMessage.serverError)
					);
				}
			}
		);

		if (previousQuestionParams) {
			yield delay(delayTime);
			yield getPreviousQuestions(previousQuestionParams, dispatch);
		}
	} catch (error) {
		yield put(hideApiLoader());
		yield delay(500);
		yield put(showOrHideModal(Lang.errorMessage.serverError));
	}
}

function* getPreviousQuestions(previousQuestionParams, dispatch) {
	try {
		yield getQuestionsData(
			previousQuestionParams,
			querySnapshot => {
				dispatch(getPreviousQuestionDataSuccess(querySnapshot.docs));
				dispatch(hideApiLoader());
			},
			error => {
				const { message, code } = error;
				displayConsole("message getPreviousQuestions", message);
				displayConsole("code getPreviousQuestions", code);
				dispatch(hideApiLoader());
				if (code && code !== "firestore/permission-denied") {
					dispatch(
						showOrHideModal(message ? message : Lang.errorMessage.serverError)
					);
				}
			}
		);
	} catch (error) {
		yield put(hideApiLoader());
		yield delay(500);
		yield put(showOrHideModal(Lang.errorMessage.serverError));
	}
}
export default function* askSaga() {
	yield takeEvery(GET_QUESTION_DATA, getQuestions);
	yield takeEvery(UPDATE_USER_DATA, updateNewKeyToUserTable);
}
