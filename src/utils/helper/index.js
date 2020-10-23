import moment from "moment";

export const displayConsole = (key, value) => {
	console.log(`---------${key}-------`, value ? value : "");
};

export const hasSpecialCharactors = value => {
	var re = /^(?=.*[!@#\$%\^&\*])/;
	return re.test(value);
};

export const isEmail = mail => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
};

export const isPassword = mail => {
	if (
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(mail)
	) {
		return true;
	}
	return false;
};

export const isPasswordAlphaNumeric = mail => {
	if (/(?=.*?[A-Za-z])(?=.*\d)/.test(mail)) {
		return true;
	}
	return false;
};

export const generateDateInfo = date => {
	return {
		month: moment(date).format("MMM"),
		monthNumber: moment(date).format("MM"),
		day: moment(date).format("D"),
		year: moment(date).format("YYYY"),
		dow: moment(date).format("ddd"),
		date: date,
		hour: {
			time: moment(date).format("h:mm"),
			am_pm: moment(date).format("A"),
		},
	};
};
