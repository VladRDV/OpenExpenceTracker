/**
 * 
 * this module is for setting up global packages, app level wrappers etc.
 * 
 **/

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/setup';
import OpenExpenceTracker from './app/OpenExpenceTracker';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import SplashScreen from './components/SplashScreen';
import { DEV_MODE } from 'react-native-dotenv';

console.log(DEV_MODE, 'AAAAAAAAAAAAAAAAAAAAAAA', typeof DEV_MODE);
if (DEV_MODE) {
	const whyDidYouRender = require('@welldone-software/why-did-you-render');
	const ReactRedux = require('react-redux');
	whyDidYouRender(React, {
		// trackAllPureComponents: true,
		trackExtraHooks: [ [ ReactRedux, 'useSelector' ] ]
	});
}

export default function TopAppWrapper () {
	return (
		<Provider store={store}>
			<PersistGate loading={<SplashScreen />} persistor={persistor}>
				<OpenExpenceTracker />
			</PersistGate>
		</Provider>
	);
}
