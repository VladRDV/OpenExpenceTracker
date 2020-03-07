import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabsNavigation/BottomTabs';
export default function LoggedInNav () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen name="Main" options={{ title: '' }} component={BottomTabs} />
		</Navigator>
	);
}
