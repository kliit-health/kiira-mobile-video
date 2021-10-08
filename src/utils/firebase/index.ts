import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import storage from '@react-native-firebase/storage';
import { displayConsole } from '../helper';
import moment from 'moment';
import Constant, { collections, urls } from '../constants';
import { Login } from '~/typescript/types';

var voucher_codes = require('voucher-code-generator');

export function getPlans(plan) {
    try {
        let planRef = firestore().doc(`plans/${plan}`).get();
        return planRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
                displayConsole('e', e);
                return false;
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export function loginInWithFirebase(obj: Login) {
    try {
        return auth()
            .signInWithEmailAndPassword(obj.email, obj.password)
            .then(function (success) {
                const { user } = success;
                return user;
            })
            .catch(function (error) {
                const { message, code } = error;
                displayConsole('error message', message);
                displayConsole('error code', code);
                return error;
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export function getDocumentFromCollection(path) {
    try {
        let documentRef = firestore().doc(path).get();
        return documentRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
                displayConsole('e', e);
                return false;
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export function getAllDocumentsFromCollection(path: string) {
    try {
        return firestore()
            .collection(path)
            .get()
            .then(querySnapshot => {
                const temp = [];
                querySnapshot.forEach(doc => {
                    temp.push(doc.data());
                });
                return temp;
            })
            .catch(e => {
                displayConsole('e', e);
                return false;
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export function getPolicyFromFirebase() {
    try {
        let policyRef = firestore().doc('legal/privacy').get();
        return policyRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
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
        const user = auth().currentUser;
        let termsRef = firestore().doc('legal/terms').get();
        return termsRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
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
        const user = auth().currentUser;
        let planRef = firestore().doc(`plans/${planDetails}`).get();
        return planRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
                displayConsole('e', e);
                return false;
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export async function sendEmailVerification(email: string) {
    try {
        await functions().httpsCallable('sendActivationLink')(email);
        return { ok: true, data: null };
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export function uploadImage(obj, success?, error?) {
    try {
        const result = storage().ref(`Kiira/${obj.filename}`).putFile(obj.file);
        return result
            .then(data => {
                const obj = {
                    success: true,
                    data,
                };
                return obj;
            })
            .catch(error => {
                const { message } = error;
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

export async function getAppointmentsAsync(uid) {
    try {
        const document = firestore().collection('appointments').doc(uid);
        const appointments = await document.get();
        return appointments.data();
    } catch (error) {
        return error;
    }
}

export async function getAppointmentsByDayAsync(data) {
    const { calendarID, date, appointmentTypeID } = data;

    let user = auth().currentUser;
    let jwtToken = await user.getIdToken();

    var obj = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwtToken,
        }),
        body: JSON.stringify({
            data: {
                calendarID,
                date,
                appointmentTypeID,
            },
        }),
    };

    try {
        const times = {};
        await fetch(urls.dev.appointmentGetByDay, obj)
            .then(res => res.json())
            .then(data => (times.current = data));
        return times;
    } catch (error) {
        return error;
    }
}

export async function getAppointmentDatesAsync(data) {
    try {
        let user = auth().currentUser;
        let jwtToken = await user.getIdToken();

        const { calendarID, monthNumber, addMonth, year, appointmentTypeID } =
            data;
        const currentMonth = `${year}-${monthNumber}`;

        var obj = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwtToken,
            }),
            body: JSON.stringify({
                data: {
                    appointmentTypeID,
                    calendarID: calendarID,
                    month: currentMonth,
                },
            }),
        };

        let response = [];
        await fetch(urls.dev.appointmentGetByMonth, obj)
            .then(res => res.json())
            .then(data => {
                response = [...response, ...data];
            });

        var obj = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwtToken,
            }),
            body: JSON.stringify({
                data: {
                    appointmentTypeID,
                    calendarID: calendarID,
                    month: addMonth,
                },
            }),
        };

        await fetch(urls.dev.appointmentGetByMonth, obj)
            .then(res => res.json())
            .then(data => {
                response = [...response, ...data];
            });
        return response;
    } catch (error) {
        return error;
    }
}

export async function makeAppointment(data) {
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
            appointmentTypeID,
        } = data;

        let noPrescription = 'I do not need a prescription,';
        let yesPrescription = 'I need a prescription,';
        let reasonForVisit = `and would like to talk about ${reason}`;

        let notes = prescription
            ? `${yesPrescription} ${reasonForVisit}`
            : `${noPrescription} ${reasonForVisit}`;

        let user = auth().currentUser;
        let jwtToken = await user.getIdToken();

        var obj = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwtToken,
            }),
            body: JSON.stringify({
                data: {
                    firstName,
                    lastName,
                    calendarID,
                    time,
                    email,
                    reason,
                    prescription,
                    notes,
                    appointmentTypeID,
                },
            }),
        };

        let response;
        let checkTime = await fetch(urls.dev.appointmentCheckTime, obj)
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            });

        if (checkTime.valid) {
            await fetch(urls.dev.appointmentMake, obj)
                .then(res => res.json())
                .then(res => {
                    response = {
                        ...data,
                        createdAt: moment().unix(),
                        expert,
                        id: res.body.id,
                        locked: false,
                    };
                })
                .catch(error => {
                    console.error(error);
                });

            const document = firestore().collection('appointments').doc(uid);
            const prev = await document.get();

            if (prev.exists) {
                await document.set(
                    { history: [...prev.data().history, response] },
                    { merge: true },
                );
            } else {
                await firestore()
                    .collection('appointments')
                    .doc(uid)
                    .set({ history: [response] });
            }

            const expertDocument = firestore()
                .collection('appointments')
                .doc(expert.uid);

            const expertPrev = await expertDocument.get();

            if (expertPrev.exists) {
                await expertDocument.set(
                    {
                        history: {
                            [uid]: [
                                ...(expertPrev.data().history[uid] || []),
                                response,
                            ],
                        },
                    },
                    { merge: true },
                );
            } else {
                await firestore()
                    .collection('appointments')
                    .doc(expert.uid)
                    .set({
                        history: { [uid]: [response] },
                    });
            }
            return;
        }
    } catch (error) {
        console.error(error);
        return { availible: false };
    }
}

export async function cancelAppointmentAsync({ data: { id, uid, expert } }) {
    let user = auth().currentUser;
    let jwtToken = await user.getIdToken();

    var obj = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwtToken,
        }),
        body: JSON.stringify({
            data: {
                id: id,
            },
        }),
    };

    try {
        return await fetch(urls.dev.appointmentCancel, obj)
            .then(res => {
                let response = res.json();
                return response;
            })
            .then(async res => {
                if (res.body.error) {
                    return res.body;
                }

                const document = firestore()
                    .collection('appointments')
                    .doc(uid);
                const response = await document.get();
                let appointments = response.data();
                appointments.history = appointments.history.filter(
                    item => item.id !== id,
                );

                await document.set(
                    { history: [...(appointments.history || [])] },
                    { merge: true },
                );

                const expertDocument = firestore()
                    .collection('appointments')
                    .doc(expert.uid);
                const expertResponse = await expertDocument.get();
                let expertAppointments = expertResponse.data();
                let filtered = expertAppointments.history[uid].filter(item => {
                    return item.id !== id ? item : false;
                });

                await expertDocument.set(
                    { history: { [uid]: [...(filtered || [])] } },
                    { merge: true },
                );
            })
            .catch(error => {
                console.error(error);
            });
    } catch (error) {
        console.log('Cancel Error', error);
        return error;
    }
}

export async function changeAppointmentAsync({ data }) {
    const { id, time, uid, expert } = data;
    let user = auth().currentUser;
    let jwtToken = await user.getIdToken();

    var obj = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + jwtToken,
        }),
        body: JSON.stringify({
            data: {
                id: id,
                time: time,
            },
        }),
    };

    try {
        return await fetch(urls.dev.appointmentChange, obj)
            .then(res => res.json())
            .then(async res => {
                if (res.body.error) {
                    return res.body;
                }

                const document = firestore()
                    .collection('appointments')
                    .doc(uid);
                const response = await document.get();
                let appointments = response.data();
                appointments.history = appointments.history.map(item => {
                    if (item.id === id) {
                        return (item = data);
                    }
                    return item;
                });

                await document.set(
                    { history: [...appointments.history] },
                    { merge: true },
                );

                const expertDocument = firestore()
                    .collection('appointments')
                    .doc(expert.uid);

                const expertResponse = await expertDocument.get();
                let expertAppointments = expertResponse.data();
                expertAppointments.history[uid] = expertAppointments.history[
                    uid
                ].map(item => {
                    if (item.id === id) {
                        return (item = data);
                    }
                    return item;
                });
                await expertDocument.set(
                    {
                        history: {
                            [uid]: [...(expertAppointments.history[uid] || [])],
                        },
                    },
                    { merge: true },
                );
            })
            .catch(error => {
                console.error(error);
            });
    } catch (error) {
        return error;
    }
}

export function getUserData(obj, success, error) {
    try {
        let userRef = firestore().doc(`${obj.tableName}/${obj.uid}`);
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
        let userRef = firestore().doc(`${obj.tableName}/${obj.uid}`).get();
        return userRef
            .then(doc => {
                return doc.data();
            })
            .catch(e => {
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
        let userRef = firestore().collection(obj.tableName).get();
        return userRef
            .then(querySnapshot => {
                const arr = [];
                querySnapshot.docs.forEach(element => {
                    arr.push(element.data());
                });
                const data = {
                    success: true,
                    data: arr,
                };
                return data;
            })
            .catch(error => {
                const { message, code } = error;
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
        let userRef = firestore()
            .collection(obj.tableName)
            .where(obj.key, '==', obj.value)
            .get();
        return userRef
            .then(querySnapshot => {
                const arr = [];
                querySnapshot.docs.forEach(element => {
                    arr.push(element.data());
                });
                const data = {
                    success: true,
                    data: arr,
                };
                return data;
            })
            .catch(error => {
                const { message, code } = error;
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
            ref = firestore()
                .collection(obj.tableName)
                .where(obj.key, '==', obj.value)
                .where('isRated', '==', true)
                .where(obj.userConditionKey, '==', obj.uid);
        } else {
            ref = firestore()
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
        let ref = firestore()
            .collection(obj.tableName)
            .where(obj.key, '==', obj.value)
            .where(obj.userConditionKey, '==', obj.uid);
        return ref.onSnapshot(success, error);
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export function logout() {
    try {
        return auth()
            .signOut()
            .then(
                function () {
                    const data = {
                        success: true,
                    };
                    return data;
                },
                error => {
                    const data = {
                        success: true,
                    };
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
        await functions().httpsCallable('sendPasswordResetEmail')(email);
        return { ok: true, data: null };
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export function getFilterDataWithCondition(obj) {
    try {
        var db = firestore();
        let collection = db.collection(obj.tableName);
        collection = collection.where(obj.roleKey, '==', obj.roleValue);
        if (obj.genderKey && obj.genderValue) {
            collection = collection.where(obj.genderKey, '==', obj.genderValue);
        }
        return collection
            .get()
            .then(querySnapshot => {
                const arr = [];
                querySnapshot.docs.forEach(element => {
                    if (
                        obj.professions &&
                        obj.professions.length > 0 &&
                        obj.languages &&
                        obj.languages.length > 0
                    ) {
                        let isLanguagesMatch = false;
                        let isProfessionMatch = false;

                        obj.professions.forEach(profession => {
                            if (
                                element.data().profileInfo.profession
                                    .fullName == profession
                            ) {
                                isProfessionMatch = true;
                            }
                        });
                        obj.languages.forEach(language => {
                            element
                                .data()
                                .profileInfo.languages.forEach(
                                    elementLanguage => {
                                        if (
                                            elementLanguage.code ==
                                            language.code
                                        ) {
                                            isLanguagesMatch = true;
                                        }
                                    },
                                );
                        });
                        if (isLanguagesMatch && isProfessionMatch) {
                            arr.push(element.data());
                        }
                    } else if (obj.professions && obj.professions.length > 0) {
                        obj.professions.forEach(profession => {
                            if (
                                element.data().profileInfo.profession
                                    .fullName == profession
                            ) {
                                arr.push(element.data());
                            }
                        });
                    } else if (obj.languages && obj.languages.length > 0) {
                        obj.languages.forEach(language => {
                            element
                                .data()
                                .profileInfo.languages.forEach(
                                    elementLanguage => {
                                        if (
                                            elementLanguage.code ==
                                            language.code
                                        ) {
                                            arr.push(element.data());
                                        }
                                    },
                                );
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
            .catch(error => {
                const { message, code } = error;
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
        const user = auth().currentUser;
        const credential = auth.EmailAuthProvider.credential(
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
                const { message, code } = error;
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
        var user = auth().currentUser;
        return user
            .updatePassword(newPassword)
            .then(function () {
                return reAunthenticate(newPassword);
            })
            .catch(function (error) {
                const { message, code } = error;
                displayConsole('error message', message);
                displayConsole('error code', code);
            });
    } catch (error) {
        displayConsole('Crash error', error);
        return false;
    }
}

export const sendMessage = obj => {
    try {
        firestore()
            .collection(Constant.App.firebaseTableNames.messages)
            .doc(obj.id)
            .collection('chat')
            .doc()
            .set(obj.messageParams);
        const { userUnreadCount, expertUnreadCount } = obj.unreadCount;
        const updateData = {
            lastMessage: obj.lastMessage,
            modifiedDate: moment().unix(),
            userUnreadCount: userUnreadCount || 0,
            expertUnreadCount: expertUnreadCount || 0,
        };
        firestore()
            .collection(Constant.App.firebaseTableNames.questions)
            .doc(obj.questionId)
            .update(updateData);
    } catch (error) {
        displayConsole('Crash error', error);
    }
};

export const loadMessages = (obj, success, error) => {
    let ref = firestore()
        .collection(Constant.App.firebaseTableNames.messages)
        .doc(`${obj.id}`)
        .collection('chat')
        .orderBy('createdAt', 'desc');
    return ref.onSnapshot(success, error);
};

export const checkStatus = (obj, success, error) => {
    let ref = firestore().collection('users').doc(`${obj.id}`);
    return ref.onSnapshot(success, error);
};

export const checkQuestionStatus = (obj, success, error) => {
    let ref = firestore()
        .collection(Constant.App.firebaseTableNames.questions)
        .doc(`${obj.id}`);
    return ref.onSnapshot(success, error);
};

export function resolvedQuestion(obj) {
    try {
        return firestore()
            .collection(Constant.App.firebaseTableNames.questions)
            .doc(`${obj.questionId}`)
            .set(obj)
            .then(
                function (success) {
                    const data = {
                        success: true,
                    };
                    return data;
                },
                error => {
                    const { message, code } = error;
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

export const updateRefrealcodeForAllUsers = (uid, data) => {
    firestore()
        .collection('users')
        .doc(uid)
        .set(data, { merge: true })
        .then(
            function () {
                displayConsole('updateRefrealcodeForAllUsers success', true);
            },
            error => {
                const { message, code } = error;
                displayConsole(
                    'updateRefrealcodeForAllUsers error message',
                    message,
                );
                displayConsole('updateRefrealcodeForAllUserserror code', code);
            },
        );
};

export const updateStatus = obj => {
    firestore().collection('users').doc(obj.uid).update(obj.updatedData);
};

export const updateUnreadCount = obj => {
    firestore()
        .collection(Constant.App.firebaseTableNames.questions)
        .doc(obj.questionData.questionId)
        .update(obj.updateData);
};

export function saveQuestion(obj) {
    try {
        return firestore()
            .collection(Constant.App.firebaseTableNames.questions)
            .add(obj)
            .then(
                function (success) {
                    obj.messageId = `${success.id}${obj.userInfo.uid}${obj.expertInfo.uid}`;
                    obj.questionId = success.id;
                    return firestore()
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
                            error => {
                                const { message, code } = error;
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
                error => {
                    const { message, code } = error;
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
        const document = firestore()
            .collection(collections.questions)
            .doc(questionId);
        await document.set({ ...updates }, { merge: true });
        return;
    } catch (error) {
        return error;
    }
}

export function updateReadMessageStatus(obj) {
    try {
        let batch = firestore().batch();
        let questionDocRef = firestore()
            .collection(Constant.App.firebaseTableNames.messages)
            .doc(obj.id)
            .collection('chat')
            .where(obj.key, '==', obj.value)
            .get();
        questionDocRef
            .then(querySnapshotQuestionDoc => {
                querySnapshotQuestionDoc.docs.forEach(element => {
                    batch.update(element._ref, {
                        isRead: true,
                    });
                });
                batch
                    .commit()
                    .then(response => {
                        displayConsole('response', response);
                        const data = {
                            success: true,
                        };
                        displayConsole('response', data);
                    })
                    .catch(error => {
                        displayConsole('batch error', error);
                        const { message, code } = error;
                        displayConsole('batch error message', message);
                        displayConsole('batch error code', code);
                    });
            })
            .catch(error => {
                displayConsole('questionDocRef error', error);
                const { message, code } = error;
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
        let userRef = firestore()
            .collection('userSecretKey')
            .where('secretKey', '==', obj.secretKey)
            .get();
        return userRef
            .then(querySnapshot => {
                var secretKeyData;
                querySnapshot.docs.forEach(element => {
                    secretKeyData = element.data();
                });
                const data = {
                    success: true,
                    data: secretKeyData,
                };

                return data;
            })
            .catch(error => {
                const { message, code } = error;
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
        let userRef = firestore()
            .collection('users')
            .where('referalCode', '==', obj.referalCode)
            .get();
        return userRef
            .then(querySnapshot => {
                var userData;
                querySnapshot.docs.forEach(element => {
                    userData = element.data();
                });
                const data = {
                    success: true,
                    data: userData,
                };

                return data;
            })
            .catch(error => {
                const { message, code } = error;
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
        firestore().doc('userSecretKey/bc8uTx6LvbqkvhTrGVHY').get();
        return firestore()
            .collection('userSecretKey')
            .doc('bc8uTx6LvbqkvhTrGVHY')
            .update({ secretKey: 'Admin123#' })
            .then(
                function () {
                    const data = {
                        success: true,
                    };
                    return data;
                },
                error => {
                    const { message, code } = error;
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

export function getRecentExpertsData(obj, success, error) {
    try {
        let ref = firestore()
            .collection(obj.tableName)
            .where(obj.key, '==', obj.value);
        return ref.onSnapshot(success, error);
    } catch (error) {
        return false;
    }
}

export function getExpertsData(obj, success, error) {
    try {
        var db = firestore();
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
        var db = firestore();
        let collection = db.collection(obj.tableName);
        collection = collection.where(obj.roleKey, '==', obj.roleValue);
        if (obj.genderKey && obj.genderValue) {
            collection = collection.where(obj.genderKey, '==', obj.genderValue);
        }
        return collection
            .get()
            .then(querySnapshot => {
                const arr = [];
                querySnapshot.docs.forEach(element => {
                    if (
                        obj.professions &&
                        obj.professions.length > 0 &&
                        obj.languages &&
                        obj.languages.length > 0
                    ) {
                        let isLanguagesMatch = false;
                        let isProfessionMatch = false;

                        obj.professions.forEach(profession => {
                            if (
                                element.data().profileInfo.profession
                                    .fullName == profession
                            ) {
                                isProfessionMatch = true;
                            }
                        });
                        obj.languages.forEach(language => {
                            element
                                .data()
                                .profileInfo.languages.forEach(
                                    elementLanguage => {
                                        if (
                                            elementLanguage.code ==
                                            language.code
                                        ) {
                                            isLanguagesMatch = true;
                                        }
                                    },
                                );
                        });
                        if (isLanguagesMatch && isProfessionMatch) {
                            arr.push(element.data());
                        }
                    } else if (obj.professions && obj.professions.length > 0) {
                        obj.professions.forEach(profession => {
                            if (
                                element.data().profileInfo.profession
                                    .fullName == profession
                            ) {
                                arr.push(element.data());
                            }
                        });
                    } else if (obj.languages && obj.languages.length > 0) {
                        obj.languages.forEach(language => {
                            element
                                .data()
                                .profileInfo.languages.forEach(
                                    elementLanguage => {
                                        if (
                                            elementLanguage.code ==
                                            language.code
                                        ) {
                                            arr.push(element.data());
                                        }
                                    },
                                );
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
            .catch(error => {
                const { message, code } = error;
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

export async function addNewPaymentCard(obj) {
    try {
        const { card_number, exp_month, exp_year, cvc } = obj;

        await functions().httpsCallable('apiPaymentsAddCard')({
            card_number: card_number,
            exp_month: exp_month,
            exp_year: exp_year,
            cvc: cvc,
        });
        return { ok: true, data: null };
    } catch (err) {
        console.log('Card payment error', err);
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export async function getPaymentMethods() {
    try {
        const response = await functions().httpsCallable(
            'apiPaymentsListCards',
        )();
        if (response.data.data) {
            return {
                ok: true,
                data: response.data.data.map(data => ({
                    ...data.card,
                    id: data.id,
                })),
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
        return { ok: false, status };
    }
}

export async function payAmount(cardID, amount) {
    try {
        const amountInCents = Number(amount) * 100;
        const response = await functions().httpsCallable(
            'apiPaymentsPayAmount',
        )({
            card_id: cardID,
            amount: amountInCents,
        });

        return { ok: response.data };
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export async function payIntent({ visit }) {
    try {
        const response = await functions().httpsCallable('paymentIntent')({
            visit,
        });

        return response.data;
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export async function payAmountWithToken(tokenID, amount) {
    try {
        const amountInCents = Number(amount) * 100;
        const response = await functions().httpsCallable(
            'apiPaymentsPayAmountApplePay',
        )({
            token_id: tokenID,
            amount: amountInCents,
        });
        return { ok: response };
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export async function updateCredits(
    payload: object,
    credits: object,
    addition: boolean,
) {
    const { uid } = payload.data;
    const {
        required,
        monthly,
        prepaid,
        redeemPurchased,
        redeemMonthly,
        isPrepaid,
    } = credits;

    try {
        if (addition) {
            await firestore()
                .collection('users')
                .doc(uid)
                .update({
                    visits: monthly + redeemMonthly,
                    prepaid: isPrepaid
                        ? prepaid + redeemPurchased
                        : prepaid + required,
                });
            return { ok: true };
        } else {
            await firestore()
                .collection('users')
                .doc(uid)
                .update({
                    visits: monthly - redeemMonthly,
                    prepaid: isPrepaid
                        ? prepaid - redeemPurchased
                        : prepaid - required,
                });
            return { ok: true };
        }
    } catch (err) {
        return { ok: false, status: 'internal' };
    }
}

export async function getPayPalAccessToken() {
    try {
        const response = await functions().httpsCallable(
            'apiPaymentsGetPaypalAccesstoken',
        )();
        return { ok: true, data: response };
    } catch (err) {
        let status = err.status ? err.status : 'internal';
        return { ok: false, status };
    }
}

export const firebaseFetch = (collectionName, conditions = [], limit = 10000) =>
    new Promise((resolve, reject) =>
        (async function () {
            try {
                let query = firestore().collection(collectionName);
                for (let condition of conditions) {
                    const { key, operator, value } = condition;
                    query = query.where(key, operator, value);
                }
                const response = await query.limit(limit).get();
                const data = response.docs.map(item => ({
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
        const document = firestore().collection('healthHistory').doc(uid);
        await document.set(data, { merge: true });
        return;
    } catch (error) {
        return error;
    }
}

export async function getHealthHistory(uid) {
    try {
        const document = firestore().collection('healthHistory').doc(uid);
        const healthHistory = await document.get();
        return healthHistory.data();
    } catch (error) {
        return error;
    }
}

export async function getMedicalHistoryAsync(data) {
    const uid = data.payload;
    try {
        const document = firestore().collection('medicalHistory').doc(uid);
        const medicalHistory = await document.get();
        return medicalHistory.data();
    } catch (error) {
        return error;
    }
}

export const updateUserData = (updates, uid, merge = true) =>
    new Promise((resolve, reject) =>
        (async () => {
            const user = firestore().collection('users').doc(uid);
            try {
                await user.set(updates, { merge });
                resolve(updates);
            } catch (error) {
                reject(error);
            }
        })(),
    );

export async function getAppointments(uid: string) {
    try {
        const document = firestore().collection('appointments').doc(uid);
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
                const document = await firestore()
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

export const firebaseSingleUpdate = (id, collection, updates, merge = true) =>
    new Promise((resolve, reject) =>
        (async () => {
            const user = firestore().collection(collection).doc(id);
            try {
                await user.set(updates, { merge });
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
    let query = firestore().collection(collectionName);

    for (let condition of conditions) {
        const { key, operator, value } = condition;
        query = query.where(key, operator, value);
    }

    query.onSnapshot(
        snapshot => {
            const data = snapshot.docs.map(item => ({
                ...item.data(),
                id: item.id,
            }));
            if (data) {
                onSucess(data);
            }
        },
        error => {
            onError(error);
        },
    );
};

export async function saveAndLock({ payload }) {
    const { appointment } = payload;
    const { visit } = appointment;

    try {
        await lockPaitentRecord(visit);
        await lockExpertRecord(visit);
        await saveMedicalHistory(payload, visit);
        const update = {
            ...appointment,
            visit: { ...visit, locked: true, complete: true },
        };
        return update;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function lockPaitentRecord({ uid, id }) {
    const document = firestore().collection('appointments').doc(uid);
    const appointments = await document.get();
    const appointmentList = appointments.data();

    appointmentList.history.map(item => {
        if (item.id === id) {
            item.locked = true;
            item.complete = true;
            return item;
        }
        return item;
    });

    await document.set({ ...appointmentList }, { merge: true });
}

async function lockExpertRecord({ uid, id, expert }) {
    const document = firestore().collection('appointments').doc(expert.uid);
    const appointments = await document.get();
    const appointmentList = appointments.data();

    appointmentList.history[uid].map(item => {
        if (item.id === id) {
            item.locked = true;
            item.complete = true;
            return item;
        }
        return item;
    });

    await document.set(
        { history: { ...appointmentList.history } },
        { merge: true },
    );
}

async function saveMedicalHistory(payload, visit) {
    delete payload.loading;
    delete payload.error;

    try {
        const document = firestore()
            .collection('medicalHistory')
            .doc(visit.uid);
        const record = await document.get();
        const recordList = record.data();

        if (recordList) {
            await document.set(
                { history: [...recordList.history, payload] },
                { merge: true },
            );
        } else {
            await firestore()
                .collection('medicalHistory')
                .doc(visit.uid)
                .set({ history: [payload] });
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function setVideoVisitRating(data) {
    const {
        rating,
        review,
        visit: { expert, uid },
    } = data;
    const document = firestore().collection('users').doc(expert.uid);
    const expertDoc = await document.get();
    const expertData = expertDoc.data();

    await document.set(
        {
            userRating: [
                ...expertData.userRating,
                { rating: rating * 2, uid, review },
            ],
        },
        { merge: true },
    );
}

export async function sendVisitRecap({ payload }) {
    try {
        await functions().httpsCallable(
            'sendMailNotificationOnMedicalRecordCreate',
        )(payload);
    } catch (error) {
        console.log(error);
    }
}

export const updateSubscriptionPlan = ({ subscriptionId, planId }) =>
    new Promise((resolve, reject) =>
        (async function () {
            const updateSubscriptionPlan = functions().httpsCallable(
                'changeSubscriptionPlan',
            );
            try {
                const response = await updateSubscriptionPlan({
                    subscriptionId,
                    planId,
                });
                resolve(response.data);
            } catch (error) {
                reject(error.details);
            }
        })(),
    );

export const cancelSubscription = ({ subscriptionId, userId }) =>
    new Promise((resolve, reject) =>
        (async function () {
            const cancelSubscription =
                functions().httpsCallable('cancelSubscription');
            try {
                const response = await cancelSubscription({
                    subscriptionId,
                    userId,
                });
                resolve(response.data);
            } catch (error) {
                reject(error.details);
            }
        })(),
    );

export async function getOrganizationInfo(user) {
    try {
        const document = firestore()
            .collection('organizations')
            .doc(user.organizationId);
        const organization = await document.get();
        return organization.data();
    } catch (error) {
        console.error(error);
    }
}

export async function authorizeVideo(uid) {
    try {
        const token = await functions().httpsCallable('videoSessionJoin')({
            userName: uid,
        });
        return token;
    } catch (error) {
        console.log(error);
    }
}

export async function sendAppointmentNotification(uid: String, time) {
    try {
        await functions().httpsCallable(
            'sendPushNotificationAppointmentCreate',
        )({ uid, time });
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function sendChatUpdateNotification(uid: String) {
    try {
        await functions().httpsCallable('sendPushNotificationChat')({ uid });
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function addClaimsToUser(
    organizationId: string,
    uid: string,
    roles: object,
) {
    try {
        await functions().httpsCallable('addClaimsOnCall')({
            organizationId,
            uid,
            roles,
        });
    } catch (error) {
        console.log(error);
    }
}
