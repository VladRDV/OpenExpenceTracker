/**
 * this module is for setting up and handling global js driven variables,states/ and functions
 * ex. color theme 
 **/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInStack from './LoggedIn/LoggedInStack';
// import LoggedOutStack from './LoggedOut/LoggedOutStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function OpenExpenceTracker () {
	return (
		<SafeAreaProvider>
			<NavigationContainer children={createRootNavigation()} />
		</SafeAreaProvider>
	);
}

function createRootNavigation () {
	// if (1) {
	return <LoggedInStack />;
	// } else {
	// 	return <LoggedOutStack />;
	// }
}
