/**
 * Open Expence Tracker
 * https://github.com/VladRDV/OpenExpenceTracker.git
**/

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import OpenExpenceTracker from './OpenExpenceTracker';

const App = () => {
	return (
		<Provider store={store}>
			<OpenExpenceTracker />
		</Provider>
	);
};

export default App;
