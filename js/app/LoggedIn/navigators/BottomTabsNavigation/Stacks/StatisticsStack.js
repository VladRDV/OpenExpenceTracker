import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatisticsScreen from '../../../screens/StatisticsStack/StatisticsScreen';

export default function StatisticsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen name="StatisticsScreen" component={StatisticsScreen} />
		</Navigator>
	);
}
