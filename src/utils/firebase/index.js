import firebase from 'react-native-firebase';
import {displayConsole} from '../helper';
import moment from 'moment';
import Constant, {collections} from '../constants';
import appointments from '../../screens/appointments';
var voucher_codes = require('voucher-code-generator');
var RSAKey = require('react-native-rsa');
var rsa = new RSAKey();
const bits = 1024;
const exponent = '10001';
const mySecretSalt = 'klit280391';

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();

export function getPlans(plan) {
  try {
    let planRef = firebase.firestore().doc(`plans/${plan}`).get();
    return planRef
      .then((doc) => {
        return doc.data();
      })
      .catch((e) => {
        displayConsole('e', e);
        return false;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function createUser(obj) {
  try {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(function (success) {
        const {user} = success;
        return user;
      })
      .catch(function (error) {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        return error;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function loginInWithFirebase(obj) {
  try {
    return firebase
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then(function (success) {
        const {user} = success;
        return user;
      })
      .catch(function (error) {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        return error;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getPolicyFromFirebase() {
  try {
    let policyRef = firebase.firestore().doc('legal/privacy').get();
    return policyRef
      .then((doc) => {
        return doc.data();
      })
      .catch((e) => {
        displayConsole('e', e);
        return false;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getTermsFromFirebase() {
  try {
    const user = firebase.auth().currentUser;
    let termsRef = firebase.firestore().doc('legal/terms').get();
    return termsRef
      .then((doc) => {
        return doc.data();
      })
      .catch((e) => {
        displayConsole('e', e);
        return false;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getPlanDetails(planDetails) {
  try {
    const user = firebase.auth().currentUser;
    let planRef = firebase.firestore().doc(`plans/${planDetails}`).get();
    return planRef
      .then((doc) => {
        return doc.data();
      })
      .catch((e) => {
        displayConsole('e', e);
        return false;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export async function sendEmailVerification(obj) {
  try {
    const {email} = obj.params;
    await functions.httpsCallable('sendActivationLink')(email);
    return {ok: true, data: null};
  } catch (err) {
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export function uploadImage(obj, success, error) {
  try {
    const result = firebase
      .storage()
      .ref(`Kiira/${obj.filename}`)
      .putFile(obj.file);
    return result
      .then((data) => {
        const obj = {
          success: true,
          data,
        };
        return obj;
      })
      .catch((error) => {
        const {message} = error;
        displayConsole('---message--', message);
        const obj = {
          success: true,
          message,
        };
        return obj;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export async function getAppointmentsAsync({data}) {
  console.log(data);
  let uid = data.uid;
  console.log(uid);
  if (Object.keys(data).includes('expert')) {
    uid = data.expert.uid;
  }

  try {
    const document = firebase.firestore().collection('appointments').doc(uid);
    const appointments = await document.get();
    return appointments.data();
  } catch (error) {
    return error;
  }
}

export async function getAppointmentsByDayAsync(data) {
  try {
    const {calendarID, monthNumber, day, year} = data;

    let response = {};
    await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentGetByDay?calendarID=${calendarID}&date=${year}-${monthNumber}-${day}`,
    )
      .then((res) => res.json())
      .then((data) => (response.future = data));
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAppointmentsForTodayAsync(data) {
  try {
    const {calendarID} = data;
    let today = new Date();
    today = moment(today).format('YYYY-MM-DD');

    let response = {};
    await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentGetByDay?calendarID=${calendarID}&date=${today}`,
    )
      .then((res) => res.json())
      .then((data) => {
        response.today = data;
      });

    return response;
  } catch (error) {
    return error;
  }
}

export async function getAppointmentDatesAsync(data) {
  try {
    const {calendarID, monthNumber, addMonth, year} = data;
    const currentMonth = `${year}-${monthNumber}`;

    let response = [];
    await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentGetByMonth?calendarID=${calendarID}
        &month=${currentMonth}&appointmentTypeID=16299344`,
    )
      .then((res) => res.json())
      .then((data) => {
        response = [...response, ...data];
      });
    await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentGetByMonth?calendarID=${calendarID}
        &month=${addMonth}&appointmentTypeID=16299344`,
    )
      .then((res) => res.json())
      .then((data) => {
        response = [...response, ...data];
      });
    return response;
  } catch (error) {
    return error;
  }
}

export async function makeAppointment({data}) {
  try {
    const {
      firstName,
      lastName,
      email,
      calendarID,
      time,
      reason,
      prescription,
      uid,
      expert,
    } = data;

    let response;
    let noPrescription = 'I do not need a prescription,';
    let yesPrescription = 'I need a prescription,';
    let reasonForVisit = `and would like to talk about ${reason}`;

    let notes = prescription
      ? `${yesPrescription} ${reasonForVisit}`
      : `${noPrescription} ${reasonForVisit}`;

    let checkTime = await fetch(`https://us-central1-kiira-health-app.cloudfunctions.net/appointmentCheckTime?
        &calendarID=${calendarID}&time=${time}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => {
        console.error(error);
      });

    if (checkTime.valid) {
      await fetch(`https://us-central1-kiira-health-app.cloudfunctions.net/appointmentMake?
			&firstName=${firstName}&lastName=${lastName}&email=${email}
			&calendarID=${calendarID}&time=${time}&reason=${reason}&prescription=${prescription}&notes=${notes}`)
        .then((res) => res.json())
        .then((data) => {
          response = {
            firstName,
            lastName,
            email,
            calendarID,
            time,
            reason,
            prescription,
            uid,
            id: data.body.id,
            expert,
            locked: false,
          };
        })
        .catch((error) => {
          console.error(error);
        });

      const document = firebase.firestore().collection('appointments').doc(uid);
      const prev = await document.get();

      if (prev.data().history) {
        await document.set(
          {history: [...prev.data().history, response]},
          {merge: true},
        );
      } else {
        await firebase
          .firestore()
          .collection('appointments')
          .doc(uid)
          .set({history: [response]});
      }

      const expertDocument = firebase
        .firestore()
        .collection('appointments')
        .doc(expert.uid);

      const expertPrev = await expertDocument.get();

      if (expertPrev.data().history[uid]) {
        await expertDocument.set(
          {history: {[uid]: [...expertPrev.data().history[uid], response]}},
          {merge: true},
        );
      } else {
        await firebase
          .firestore()
          .collection('appointments')
          .doc(expert.uid)
          .set({
            history: {...expertPrev.data().history, [uid]: [response]},
          });
      }

      return;
    }
    return {availible: false};
  } catch (error) {
    displayConsole(error);
    return error;
  }
}

export async function cancelAppointmentAsync({data: {id, uid, expert}}) {
  try {
    return await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentCancel?&id=${id}`,
    )
      .then((res) => {
        let response = res.json();
        return response;
      })
      .then(async (res) => {
        if (res.body.error) {
          return res.body;
        }

        const document = firestore.collection('appointments').doc(uid);
        const response = await document.get();
        let appointments = response.data();

        appointments.history = appointments.history.filter(
          (item) => item.id !== id,
        );
        await document.set(
          {history: [...(appointments.history || [])]},
          {merge: true},
        );

        const expertDocument = firestore
          .collection('appointments')
          .doc(expert.uid);
        const expertResponse = await expertDocument.get();
        let expertAppointments = expertResponse.data();
        expertAppointments.history[uid] = expertAppointments.history[
          uid
        ].filter((item) => item.id !== id);

        await expertDocument.set(
          {history: {[uid]: [...(expertAppointments.history[uid] || [])]}},
          {merge: true},
        );
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log('Cancel Error', error);
    return error;
  }
}

export async function changeAppointmentAsync({data}) {
  const {id, time, uid} = data;

  try {
    return await fetch(
      `https://us-central1-kiira-health-app.cloudfunctions.net/appointmentChange?&id=${id}&time=${time}`,
    )
      .then((res) => res.json())
      .then(async (res) => {
        if (res.body.error) {
          return res.body;
        }
        const document = firestore.collection('appointments').doc(uid);
        const response = await document.get();
        let appointments = response.data();
        appointments.history = appointments.history.map((item) => {
          if (item.id === id) {
            return (item = data);
          }
          return item;
        });

        await document.set({history: [...appointments.history]}, {merge: true});

        const expertDocument = firestore
          .collection('appointments')
          .doc(expert.uid);
        const expertResponse = await expertDocument.get();
        let expertAppointments = expertResponse.data();
        expertAppointments.history[uid] = expertAppointments.history[uid].map(
          (item) => {
            if (item.id === id) {
              return (item = data);
            }
            return item;
          },
        );
        console.log('EXPERT APPOINTMENTS', expertAppointments);
        await expertDocument.set(
          {history: {[uid]: [...(expertAppointments.history[uid] || [])]}},
          {merge: true},
        );
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    return error;
  }
}

export function addUserData(obj) {
  try {
    return firebase
      .firestore()
      .collection('users')
      .where('uid', '==', obj.uid)
      .get()
      .then((querySnapshot) => {
        var userData;
        querySnapshot.docs.forEach((element) => {
          userData = element.data();
        });
        return userData
          ? firebase
              .firestore()
              .collection('users')
              .doc(obj.uid)
              .update(obj)
              .then(
                function () {
                  const data = {
                    success: true,
                  };
                  return data;
                },
                (error) => {
                  const {message, code} = error;
                  displayConsole('error message', message);
                  displayConsole('error code', code);
                  const data = {
                    success: false,
                    message: message,
                  };
                  return data;
                },
              )
          : firebase
              .firestore()
              .collection('users')
              .doc(obj.uid)
              .set(obj)
              .then(
                function () {
                  const data = {
                    success: true,
                  };
                  return data;
                },
                (error) => {
                  const {message, code} = error;
                  displayConsole('error message', message);
                  displayConsole('error code', code);
                  const data = {
                    success: false,
                    message: message,
                  };
                  return data;
                },
              );
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };
        return data;
      });
  } catch (error) {
    const data = {
      success: false,
    };
    displayConsole('Crash error', error);
    return data;
  }
}

export function getUserData(obj, success, error) {
  try {
    let userRef = firestore.doc(`${obj.tableName}/${obj.uid}`);
    return userRef.onSnapshot(success, error);
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export async function getLicensesAsync() {
  try {
    let licensesRef = await firestore.doc('licenses/states').get();
    return licensesRef.data();
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getDataFromTable(obj) {
  try {
    let userRef = firebase.firestore().doc(`${obj.tableName}/${obj.uid}`).get();
    return userRef
      .then((doc) => {
        return doc.data();
      })
      .catch((e) => {
        displayConsole('e', e);
        return false;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getCollectionData(obj) {
  try {
    let userRef = firebase.firestore().collection(obj.tableName).get();
    return userRef
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.docs.forEach((element) => {
          arr.push(element.data());
        });
        const data = {
          success: true,
          data: arr,
        };
        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };
        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getCollectionDataWithCondition(obj) {
  try {
    let userRef = firebase
      .firestore()
      .collection(obj.tableName)
      .where(obj.key, '==', obj.value)
      .get();
    return userRef
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.docs.forEach((element) => {
          arr.push(element.data());
        });
        const data = {
          success: true,
          data: arr,
        };
        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };
        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getQuestionsData(obj, success, error) {
  try {
    let ref;
    if (obj.value) {
      ref = firebase
        .firestore()
        .collection(obj.tableName)
        .where(obj.key, '==', obj.value)
        .where('isRated', '==', true)
        .where(obj.userConditionKey, '==', obj.uid);
    } else {
      ref = firebase
        .firestore()
        .collection(obj.tableName)
        .where('isRated', '==', false)
        .where(obj.userConditionKey, '==', obj.uid);
    }
    return ref.onSnapshot(success, error);
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getExpertQuestionsData(obj, success, error) {
  try {
    let ref = firebase
      .firestore()
      .collection(obj.tableName)
      .where(obj.key, '==', obj.value)
      .where(obj.userConditionKey, '==', obj.uid);
    return ref.onSnapshot(success, error);
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function logout(userData) {
  try {
    return firebase
      .auth()
      .signOut()
      .then(
        function () {
          const data = {
            success: true,
          };
          return data;
        },
        (error) => {
          let data = {};
          const {message, code} = error;
          displayConsole('error message', message);
          displayConsole('error code', code);
          if (code === 'auth/no-current-user') {
            data = {
              success: true,
            };
          } else {
            data = {
              success: false,
              message,
            };
          }
          return data;
        },
      );
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export async function resetPassword(email) {
  try {
    await functions.httpsCallable('sendPasswordResetEmail')(email);
    return {ok: true, data: null};
  } catch (err) {
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export function getFilterDataWithCondition(obj) {
  try {
    var db = firestore;
    let collection = db.collection(obj.tableName);
    collection = collection.where(obj.roleKey, '==', obj.roleValue);
    if (obj.genderKey && obj.genderValue) {
      collection = collection.where(obj.genderKey, '==', obj.genderValue);
    }
    return collection
      .get()
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.docs.forEach((element) => {
          if (
            obj.professions &&
            obj.professions.length > 0 &&
            obj.languages &&
            obj.languages.length > 0
          ) {
            let isLanguagesMatch = false;
            let isProfessionMatch = false;

            obj.professions.forEach((profession) => {
              if (
                element.data().profileInfo.profession.fullName == profession
              ) {
                isProfessionMatch = true;
              }
            });
            obj.languages.forEach((language) => {
              element
                .data()
                .profileInfo.languages.forEach((elementLanguage) => {
                  if (elementLanguage.code == language.code) {
                    isLanguagesMatch = true;
                  }
                });
            });
            if (isLanguagesMatch && isProfessionMatch) {
              arr.push(element.data());
            }
          } else if (obj.professions && obj.professions.length > 0) {
            obj.professions.forEach((profession) => {
              if (
                element.data().profileInfo.profession.fullName == profession
              ) {
                arr.push(element.data());
              }
            });
          } else if (obj.languages && obj.languages.length > 0) {
            obj.languages.forEach((language) => {
              element
                .data()
                .profileInfo.languages.forEach((elementLanguage) => {
                  if (elementLanguage.code == language.code) {
                    arr.push(element.data());
                  }
                });
            });
          } else {
            arr.push(element.data());
          }
        });
        const data = {
          success: true,
          data: arr,
        };
        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };
        displayConsole('data', data);
        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function reAunthenticate(userProvidedPassword) {
  try {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      userProvidedPassword,
    );
    return user
      .reauthenticateWithCredential(credential)
      .then(function () {
        const data = {
          success: true,
        };
        return data;
      })
      .catch(function (error) {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message,
        };
        displayConsole('data', data);
        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function changePassword(newPassword) {
  try {
    var user = firebase.auth().currentUser;
    return user
      .updatePassword(newPassword)
      .then(function () {
        return reAunthenticate(newPassword);
      })
      .catch(function (error) {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export const cipher = (salt) => {
  let textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  let byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
  let applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
};

export const decipher = (salt) => {
  let textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  let applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join('');
};

export function sendEncryptedKeyToFirebase() {
  let Keyref = firebase
    .firestore()
    .collection('EncryptedKeys')
    .doc('EncryptedKeysDoc')
    .get();
  return Keyref.then((doc) => {
    if (doc.exists) {
      let myDecipher = decipher(mySecretSalt);
      return JSON.parse(myDecipher(doc._data.salt.key));
    } else {
      rsa.generate(bits, exponent);
      const publicKey = rsa.getPublicString();
      const privateKey = rsa.getPrivateString();
      const keys = {
        publicKey: JSON.stringify(publicKey),
        privateKey: JSON.stringify(privateKey),
      };
      // Encrypt keys using cipher
      let myCipher = cipher(mySecretSalt);
      // Save Key to FireStore Db
      firebase
        .firestore()
        .collection('EncryptedKeys')
        .doc('EncryptedKeysDoc')
        .set({
          salt: {
            key: myCipher(JSON.stringify(keys)),
          },
        })
        .then(
          function () {
            return JSON.parse(JSON.stringify(keys));
          },
          (error) => {
            const {message, code} = error;
            displayConsole('message', message);
            displayConsole('code', code);
          },
        );
    }
  }).catch((e) => {
    displayConsole('e', e);
    return false;
  });
}

export const deleteEncryptedKeyCollection = () => {
  firebase
    .firestore()
    .collection('EncryptedKeys')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        displayConsole('deleteCollection doc', doc);
        doc.ref.delete();
      });
    });
};

export const sendMessage = (obj) => {
  try {
    firebase
      .firestore()
      .collection(Constant.App.firebaseTableNames.messages)
      .doc(obj.id)
      .collection('chat')
      .doc()
      .set(obj.messageParams);
    const {userUnreadCount, expertUnreadCount} = obj.unreadCount;
    const updateData = {
      lastMessage: obj.lastMessage,
      modifiedDate: moment().unix(),
      userUnreadCount: userUnreadCount || 0,
      expertUnreadCount: expertUnreadCount || 0,
    };
    firebase
      .firestore()
      .collection(Constant.App.firebaseTableNames.questions)
      .doc(obj.questionId)
      .update(updateData);
  } catch (error) {
    displayConsole('Crash error', error);
  }
};

export const loadMessages = (obj, success, error) => {
  let ref = firebase
    .firestore()
    .collection(Constant.App.firebaseTableNames.messages)
    .doc(`${obj.id}`)
    .collection('chat')
    .orderBy('createdAt', 'desc');
  return ref.onSnapshot(success, error);
};

export const checkStatus = (obj, success, error) => {
  let ref = firebase.firestore().collection('users').doc(`${obj.id}`);
  return ref.onSnapshot(success, error);
};

export const checkQuestionStatus = (obj, success, error) => {
  let ref = firebase
    .firestore()
    .collection(Constant.App.firebaseTableNames.questions)
    .doc(`${obj.id}`);
  return ref.onSnapshot(success, error);
};

export function resolvedQuestion(obj) {
  try {
    displayConsole(
      '\n\n--------------**** resolvedQuestion Start ********-----------',
    );
    displayConsole('obj', obj);
    return firebase
      .firestore()
      .collection(Constant.App.firebaseTableNames.questions)
      .doc(`${obj.questionId}`)
      .set(obj)
      .then(
        function (success) {
          displayConsole('success', true);
          displayConsole('docref', success);
          const data = {
            success: true,
          };
          displayConsole('data', data);
          console.log(
            '--------------**** resolvedQuestion End ********-----------\n\n',
          );
          return data;
        },
        (error) => {
          const {message, code} = error;
          displayConsole('error message', message);
          displayConsole('error code', code);
          const data = {
            success: false,
            message: message,
          };
          displayConsole('data', data);
          displayConsole(
            '--------------***** resolvedQuestion End *********-----------\n\n',
          );
          return data;
        },
      );
  } catch (error) {
    const data = {
      success: false,
    };
    displayConsole('Crash error', error);
    displayConsole(
      '--------------**** resolvedQuestion End ********-----------\n\n',
    );
    return data;
  }
}

export const updateRefrealcodeForAllUsers = (uid, data) => {
  firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set(data, {merge: true})
    .then(
      function () {
        displayConsole('updateRefrealcodeForAllUsers success', true);
      },
      (error) => {
        const {message, code} = error;
        displayConsole('updateRefrealcodeForAllUsers error message', message);
        displayConsole('updateRefrealcodeForAllUserserror code', code);
      },
    );
};

export const updateStatus = (obj) => {
  firebase.firestore().collection('users').doc(obj.uid).update(obj.updatedData);
};

export const updateUnreadCount = (obj) => {
  firebase
    .firestore()
    .collection(Constant.App.firebaseTableNames.questions)
    .doc(obj.questionData.questionId)
    .update(obj.updateData);
};

export function saveQuestion(obj) {
  try {
    return firebase
      .firestore()
      .collection(Constant.App.firebaseTableNames.questions)
      .add(obj)
      .then(
        function (success) {
          obj.messageId = `${success.id}${obj.userInfo.uid}${obj.expertInfo.uid}`;
          obj.questionId = success.id;
          return firebase
            .firestore()
            .collection(Constant.App.firebaseTableNames.questions)
            .doc(success.id)
            .set(obj)
            .then(
              function () {
                const data = {
                  success: true,
                  data: obj,
                };

                return data;
              },
              (error) => {
                const {message, code} = error;
                displayConsole('error message', message);
                displayConsole('error code', code);
                const data = {
                  success: false,
                  message: message,
                };

                return data;
              },
            );
        },
        (error) => {
          const {message, code} = error;
          displayConsole('error message', message);
          displayConsole('error code', code);
          const data = {
            success: false,
            message: message,
          };

          return data;
        },
      );
  } catch (error) {
    const data = {
      success: false,
    };
    displayConsole('Crash error', error);
    return data;
  }
}

export async function updateQuestion(updates, questionId) {
  try {
    const document = firestore
      .collection(collections.questions)
      .doc(questionId);
    await document.set({...updates}, {merge: true});
    return;
  } catch (error) {
    return error;
  }
}

export function updateReadMessageStatus(obj) {
  try {
    let batch = firestore.batch();
    let questionDocRef = firebase
      .firestore()
      .collection(Constant.App.firebaseTableNames.messages)
      .doc(obj.id)
      .collection('chat')
      .where(obj.key, '==', obj.value)
      .get();
    questionDocRef
      .then((querySnapshotQuestionDoc) => {
        querySnapshotQuestionDoc.docs.forEach((element) => {
          batch.update(element._ref, {
            isRead: true,
          });
        });
        batch
          .commit()
          .then((response) => {
            displayConsole('response', response);
            const data = {
              success: true,
            };
            displayConsole('response', data);
          })
          .catch((error) => {
            displayConsole('batch error', error);
            const {message, code} = error;
            displayConsole('batch error message', message);
            displayConsole('batch error code', code);
          });
      })
      .catch((error) => {
        displayConsole('questionDocRef error', error);
        const {message, code} = error;
        displayConsole('questionDocRef error message', message);
        displayConsole('questionDocRef error code', code);
      });
  } catch (error) {
    const data = {
      success: false,
    };
    displayConsole('Crash error', error);
    return data;
  }
}
export function makeid() {
  var result = '';

  result = voucher_codes.generate({
    length: 8,
  });
  return result[0];
}

export function checkSecretKey(obj) {
  try {
    let userRef = firebase
      .firestore()
      .collection('userSecretKey')
      .where('secretKey', '==', obj.secretKey)
      .get();
    return userRef
      .then((querySnapshot) => {
        var secretKeyData;
        querySnapshot.docs.forEach((element) => {
          secretKeyData = element.data();
        });
        const data = {
          success: true,
          data: secretKeyData,
        };

        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };

        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function checkReferedUserData(obj) {
  try {
    let userRef = firebase
      .firestore()
      .collection('users')
      .where('referalCode', '==', obj.referalCode)
      .get();
    return userRef
      .then((querySnapshot) => {
        var userData;
        querySnapshot.docs.forEach((element) => {
          userData = element.data();
        });
        const data = {
          success: true,
          data: userData,
        };

        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };

        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function setDataTesting() {
  try {
    firebase.firestore().doc('userSecretKey/bc8uTx6LvbqkvhTrGVHY').get();
    return firebase
      .firestore()
      .collection('userSecretKey')
      .doc('bc8uTx6LvbqkvhTrGVHY')
      .update({secretKey: 'Admin123#'})
      .then(
        function () {
          const data = {
            success: true,
          };
          return data;
        },
        (error) => {
          const {message, code} = error;
          displayConsole('error message', message);
          displayConsole('error code', code);
          const data = {
            success: false,
            message: message,
          };
          return data;
        },
      );
  } catch (error) {
    const data = {
      success: false,
    };
    displayConsole('Crash error', error);
    return data;
  }
}

export function deleteUser() {
  try {
    return firebase
      .auth()
      .currentUser.delete()
      .then(
        function () {
          const data = {
            success: true,
          };
          return data;
        },
        function (error) {
          let data = {};
          const {message, code} = error;
          displayConsole('error message', message);
          displayConsole('error code', code);
          if (code === 'auth/no-current-user') {
            data = {
              success: true,
            };
          } else {
            firebase.auth().signOut();
            data = {
              success: false,
              message,
            };
          }

          return data;
        },
      );
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export function getRecentExpertsData(obj, success, error) {
  try {
    let ref = firebase
      .firestore()
      .collection(obj.tableName)
      .where(obj.key, '==', obj.value);
    return ref.onSnapshot(success, error);
  } catch (error) {
    return false;
  }
}

export function getExpertsData(obj, success, error) {
  try {
    var db = firestore;
    let collection = db.collection(obj.tableName);
    collection = collection.where(obj.roleKey, '==', obj.roleValue);
    if (obj.genderKey && obj.genderValue) {
      collection = collection.where(obj.genderKey, '==', obj.genderValue);
    }
    return collection.onSnapshot(success, error);
  } catch (error) {
    return false;
  }
}

export function getFiltersDataWithCondition(obj) {
  try {
    var db = firestore;
    let collection = db.collection(obj.tableName);
    collection = collection.where(obj.roleKey, '==', obj.roleValue);
    if (obj.genderKey && obj.genderValue) {
      collection = collection.where(obj.genderKey, '==', obj.genderValue);
    }
    return collection
      .get()
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.docs.forEach((element) => {
          if (
            obj.professions &&
            obj.professions.length > 0 &&
            obj.languages &&
            obj.languages.length > 0
          ) {
            let isLanguagesMatch = false;
            let isProfessionMatch = false;

            obj.professions.forEach((profession) => {
              if (
                element.data().profileInfo.profession.fullName == profession
              ) {
                isProfessionMatch = true;
              }
            });
            obj.languages.forEach((language) => {
              element
                .data()
                .profileInfo.languages.forEach((elementLanguage) => {
                  if (elementLanguage.code == language.code) {
                    isLanguagesMatch = true;
                  }
                });
            });
            if (isLanguagesMatch && isProfessionMatch) {
              arr.push(element.data());
            }
          } else if (obj.professions && obj.professions.length > 0) {
            obj.professions.forEach((profession) => {
              if (
                element.data().profileInfo.profession.fullName == profession
              ) {
                arr.push(element.data());
              }
            });
          } else if (obj.languages && obj.languages.length > 0) {
            obj.languages.forEach((language) => {
              element
                .data()
                .profileInfo.languages.forEach((elementLanguage) => {
                  if (elementLanguage.code == language.code) {
                    arr.push(element.data());
                  }
                });
            });
          } else {
            arr.push(element.data());
          }
        });
        const data = {
          success: true,
          data: arr,
        };

        return data;
      })
      .catch((error) => {
        const {message, code} = error;
        displayConsole('error message', message);
        displayConsole('error code', code);
        const data = {
          success: false,
          message: message,
        };
        displayConsole('data', data);
        return data;
      });
  } catch (error) {
    displayConsole('Crash error', error);
    return false;
  }
}

export async function getCreditAmountsData() {
  try {
    await firebase.config().fetch(0);
    await firebase.config().activateFetched();
    const snapshot = await firebase.config().getValue('credit_amounts');
    return snapshot ? snapshot.val() : null;
  } catch (error) {
    return null;
  }
}

export async function addNewPaymentCard(obj) {
  try {
    const {card_number, exp_month, exp_year, cvc} = obj;
    await functions.httpsCallable('apiPaymentsAddCard')({
      card_number: card_number,
      exp_month: exp_month,
      exp_year: exp_year,
      cvc: cvc,
    });
    return {ok: true, data: null};
  } catch (err) {
    console.log('Card payment error', err);
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export async function getPaymentMethods() {
  try {
    const response = await functions.httpsCallable('apiPaymentsListCards')();
    if (response.data.data) {
      return {
        ok: true,
        data: response.data.data.map((data) => ({...data.card, id: data.id})),
      };
    } else {
      return {
        ok: true,
        data: [],
      };
    }
  } catch (err) {
    console.log('ERRROROROROROROROROROR', err);
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export async function payAmount(cardID, amount) {
  try {
    const amountInCents = Number(amount) * 100;
    const response = await functions.httpsCallable('apiPaymentsPayAmount')({
      card_id: cardID,
      amount: amountInCents,
    });
    return {ok: response};
  } catch (err) {
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export async function payAmountWithToken(tokenID, amount) {
  try {
    const amountInCents = Number(amount) * 100;
    const response = await functions.httpsCallable(
      'apiPaymentsPayAmountApplePay',
    )({
      token_id: tokenID,
      amount: amountInCents,
    });
    return {ok: response};
  } catch (err) {
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export async function updateCredits(visits, {data}) {
  try {
    const docData = await firebase
      .firestore()
      .collection('users')
      .doc(data.uid)
      .get();
    const userData = docData.data();
    await firebase
      .firestore()
      .collection('users')
      .doc(data.uid)
      .update({
        visits: userData.visits + visits,
      });

    return {ok: true};
  } catch (err) {
    return {ok: false, status: 'internal'};
  }
}

// export async function updateCredits(credits, forUser) {
//   try {
//     await firebase.firestore().collection('users').doc(forUser).update({
//       credits,
//     });
//     return {ok: true, newCredits: credits};
//   } catch (err) {
//     return {ok: false, status: 'internal'};
//   }
// }

export async function getPayPalAccessToken() {
  try {
    const response = await functions.httpsCallable(
      'apiPaymentsGetPaypalAccesstoken',
    )();
    return {ok: true, data: response};
  } catch (err) {
    let status = err.status ? err.status : 'internal';
    return {ok: false, status};
  }
}

export const firebaseFetch = (collectionName, conditions = [], limit = 10000) =>
  new Promise((resolve, reject) =>
    (async function () {
      try {
        let query = firestore.collection(collectionName);
        for (let condition of conditions) {
          const {key, operator, value} = condition;
          query = query.where(key, operator, value);
        }
        const response = await query.limit(limit).get();
        const data = response.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })(),
  );

export async function addHealthHistory(data, uid) {
  try {
    const document = firestore.collection('healthHistory').doc(uid);
    await document.set(data, {merge: true});
    return;
  } catch (error) {
    return error;
  }
}

export async function getHealthHistory(uid) {
  try {
    const document = firestore.collection('healthHistory').doc(uid);
    const healthHistory = await document.get();
    return healthHistory.data();
  } catch (error) {
    return error;
  }
}

export async function getMedicalHistoryAsync(data) {
  const uid = data.payload;
  try {
    const document = firestore.collection('medicalHistory').doc(uid);
    const medicalHistory = await document.get();
    return medicalHistory.data();
  } catch (error) {
    return error;
  }
}

export async function updateFavoriteExperts(favorites, uid) {
  const document = firestore.collection('careSquad').doc(uid);
  try {
    await document.set({favorites}, {merge: true});
    return;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getFavoriteExperts(uid) {
  const document = firestore.collection('careSquad').doc(uid);

  try {
    const favorites = await document.get();
    if (!favorites.data()) {
      await document.set({favorites}, {merge: true});
      return;
    }
    return favorites.data();
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const updateUserData = (updates, uid, merge = true) =>
  new Promise((resolve, reject) =>
    (async () => {
      const user = firestore.collection('users').doc(uid);
      try {
        await user.set(updates, {merge});
        resolve(updates);
      } catch (error) {
        reject(error);
      }
    })(),
  );

export async function getAppointments(uid) {
  try {
    const document = firestore.collection('appointments').doc(uid);
    const appointments = await document.get();
    return appointments.data();
  } catch (error) {
    return error;
  }
}

export const firebaseSingleFetch = (collectionName, id) =>
  new Promise((resolve, reject) =>
    (async () => {
      try {
        const document = await firestore
          .collection(collectionName)
          .doc(id)
          .get();
        if (document.exists) {
          const data = document.data();
          resolve(data);
        } else {
          reject('Document not found.');
        }
      } catch (error) {
        reject(error);
      }
    })(),
  );

export const updateSingleDocument = (id, collection, updates, merge = true) =>
  new Promise((resolve, reject) =>
    (async () => {
      const user = firestore.collection(collection).doc(id);
      try {
        await user.set(updates, {merge});
        resolve(updates);
      } catch (error) {
        reject(error);
      }
    })(),
  );

export const firebaseRealTimeFetch = (
  collectionName,
  conditions = [],
  onSucess,
  onError,
) => {
  let query = firestore.collection(collectionName);

  for (let condition of conditions) {
    const {key, operator, value} = condition;
    query = query.where(key, operator, value);
  }

  query.onSnapshot(
    (snapshot) => {
      const data = snapshot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      if (data) {
        onSucess(data);
      }
    },
    (error) => {
      onError(error);
    },
  );
};

export async function saveAndLock({payload}) {
  const {appointment} = payload;
  const {visit} = appointment;

  try {
    lockPaitentRecord(visit);
    lockExpertRecord(visit);
    saveMedicalHistory(payload, visit);
    const update = {...appointment, visit: {...visit, locked: true}};
    return update;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function lockPaitentRecord({uid, id}) {
  const document = firestore.collection('appointments').doc(uid);
  const appointments = await document.get();
  const appointmentList = appointments.data();

  appointmentList.history.map((item) => {
    if (item.id === id) {
      item.locked = true;
      return item;
    }
    return item;
  });

  await document.set({...appointmentList}, {merge: true});
}

async function lockExpertRecord({uid, id, expert}) {
  const document = firestore.collection('appointments').doc(expert.uid);
  const appointments = await document.get();
  const appointmentList = appointments.data();

  appointmentList.history[uid].map((item) => {
    if (item.id === id) {
      item.locked = true;
      console.log('Record', item);
      return item;
    }
    return item;
  });

  await document.set({history: {...appointmentList.history}}, {merge: true});
}

async function saveMedicalHistory(payload, visit) {
  delete payload.loading;
  delete payload.error;

  try {
    const document = firestore.collection('medicalHistory').doc(visit.uid);
    const record = await document.get();
    const recordList = record.data();

    if (recordList.history.length) {
      await document.set(
        {history: [...recordList.history, payload]},
        {merge: true},
      );
    } else {
      await firebase
        .firestore()
        .collection('medicalHistory')
        .doc(visit.uid)
        .set({history: [payload]});
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
