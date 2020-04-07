/**
 * This module is created for activating redux sagas, that are 
 * created in 'js/redux/sagas/handlers'
 * I've moved this process here to avoid bloating 'js/redux/store/setup.js' with repetitive code
 **/

import getCurrenciesSage from '../sagas/handlers/settingsStack/get-currencies-saga';
export default function activeteSagas (sagaMiddleware) {
	sagaMiddleware.run(getCurrenciesSage);
}
