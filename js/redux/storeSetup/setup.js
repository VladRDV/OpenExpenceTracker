import { DEV_MODE } from 'react-native-dotenv';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../state/combineReducers';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
// devTools
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// redux saga (for handling side effects(aka async stuff))
import createSagaMiddleware from 'redux-saga';
import activateSagas from './activateSagas';

// import createSensitiveStorage from 'redux-persist-sensitive-storage';

function configureReduxStore () {
	// const sensitiveStorage = createSensitiveStorage({
	// 	keychainService: 'myKeychain',
	// 	sharedPreferencesName: 'mySharedPrefs'
	// });

	const persistConfig = {
		key: 'root',
		storage: AsyncStorage,
		debug: !!DEV_MODE
	};
	const isDebugging = window && window.__REDUX_DEVTOOLS_EXTENSION__;
	const reduxLogger = createLogger({
		predicate: (getState, action) => isDebugging,
		collapsed: true,
		duration: true
	});
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const sagaMiddleware = createSagaMiddleware();

	let store = isDebugging
		? createStore(persistedReducer, composeWithDevTools(applyMiddleware(reduxLogger, sagaMiddleware)))
		: createStore(persistedReducer, applyMiddleware(sagaMiddleware));
	let persistor = persistStore(store);

	activateSagas(sagaMiddleware);

	return { store, persistor };
}

export const { store, persistor } = configureReduxStore();
