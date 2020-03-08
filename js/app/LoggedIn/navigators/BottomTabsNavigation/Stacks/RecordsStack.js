import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordListScreen from '../../../screens/RecordsStack/RecordListScreen';
import RedordDetailsScreen from '../../../screens/RecordsStack/RedordDetailsScreen';

export default function AddStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator headerMode={'none'}>
			<Screen
				name="RecordListScreen"
				component={RecordListScreen}
				options={{
					title: 'Records list'
				}}
			/>
			<Screen
				name="RecordDetailsScreen"
				component={RedordDetailsScreen}
				options={{
					title: 'Records details'
				}}
			/>
		</Navigator>
	);
}
