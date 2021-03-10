import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(sagaMiddleWare);

const configStore = () => {
  const store = createStore(rootReducer, composeEnhancers(middlewares));
  sagaMiddleWare.run(rootSaga);
  return store;
};

export default configStore;
