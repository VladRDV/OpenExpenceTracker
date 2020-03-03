import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './state/combine';
import { createLogger } from 'redux-logger';

const enhancerList = [];
const debugging = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof debugging === 'function') {
	enhancerList.push(debugging());
}
var logger = createLogger({
	predicate: (getState, action) => debugging,
	collapsed: true,
	duration: true
});

const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ ...enhancerList);

const configureStore = () => {
	let store = debugging
		? createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
		: // : createStore(rootReducer, applyMiddleware(sagaMiddleware));
			createStore(rootReducer);
	return { store };
};

export const { store } = configureStore();
