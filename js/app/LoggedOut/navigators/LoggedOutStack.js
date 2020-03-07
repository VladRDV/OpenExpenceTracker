import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';

export default function LoggedOutStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen name="SignIn" component={SignInScreen} />
		</Navigator>
	);
}
