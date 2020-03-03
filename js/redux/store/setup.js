import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../state/combine';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import activateSagas from './activateSagas';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};
const debugging = window && window.__REDUX_DEVTOOLS_EXTENSION__;

var logger = createLogger({
	predicate: (getState, action) => debugging,
	collapsed: true,
	duration: true
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	let store = debugging
		? createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)))
		: createStore(persistedReducer, applyMiddleware(sagaMiddleware));
	let persistor = persistStore(store);

	activateSagas(sagaMiddleware);

	return { store, persistor };
};

export const { store, persistor } = configureStore();
