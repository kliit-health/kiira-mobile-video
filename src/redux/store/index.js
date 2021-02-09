import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from '@react-native-community/async-storage';

import combinedReducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {key: 'root', storage, whitelist: []};
const persistedReducer = persistReducer(persistConfig, combinedReducers);
const middlewares = applyMiddleware(sagaMiddleWare);

export const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(middlewares),
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
