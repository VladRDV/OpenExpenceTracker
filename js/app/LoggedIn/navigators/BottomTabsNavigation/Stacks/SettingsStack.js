import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../../screens/SettingsStack/SettingsScreen';

export default function SettingsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
		</Navigator>
	);
}
