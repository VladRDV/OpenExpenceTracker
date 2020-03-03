/**
 * Open Expence Tracker
 * https://github.com/VladRDV/OpenExpenceTracker.git
**/

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store/setup';
import OpenExpenceTracker from './OpenExpenceTracker';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Text style={{ color: 'red' }}>please wait</Text>} persistor={persistor}>
				<OpenExpenceTracker />
			</PersistGate>
		</Provider>
	);
};

export default App;
