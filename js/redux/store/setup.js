import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../state/combine';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

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

const configureStore = () => {
	let store = debugging
		? createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)))
		: // : createStore(persistedReducer, applyMiddleware(sagaMiddleware));
			createStore(persistedReducer);
	let persistor = persistStore(store);
	return { store, persistor };
};

export const { store, persistor } = configureStore();
