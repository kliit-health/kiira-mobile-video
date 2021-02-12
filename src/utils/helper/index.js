import moment from 'moment';

export const displayConsole = (key, value) => {
  console.log(`---------${key}-------`, value ? value : '');
};

export const hasSpecialCharactors = (value) => {
  var re = /^(?=.*[!@#\$%\^&\*])/;
  return re.test(value);
};

export const isEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const isPassword = (mail) => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(mail)
  ) {
    return true;
  }
  return false;
};

export const isPasswordAlphaNumeric = (mail) => {
  if (/(?=.*?[A-Za-z])(?=.*\d)/.test(mail)) {
    return true;
  }
  return false;
};

export const generateDateInfo = (date) => {
  return {
    month: moment(date).format('MMM'),
    monthNumber: moment(date).format('MM'),
    day: moment(date).format('D'),
    year: moment(date).format('YYYY'),
    dow: moment(date).format('ddd'),
    date: date,
    hour: {
      time: moment(date).format('h:mm'),
      am_pm: moment(date).format('A'),
    },
  };
};

export const getDateRange = (startDate, endDate, dateFormat) => {
  var dates = [],
    end = moment(endDate),
    diff = endDate.diff(startDate, 'days');

  if (!startDate.isValid() || !endDate.isValid() || diff <= 0) {
    return;
  }

  for (var i = 0; i < diff; i++) {
    dates.push(end.subtract(1, 'd').format(dateFormat));
  }

  return dates;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertCamelCase = (str) => {
  const strArr = str.split(/(?=[A-Z])/);
  const converted = strArr.map(capitalizeFirstLetter);
  return converted.join(' ');
};
