import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewRecord from '../../../screens/AddRecordStack/AddNewRecordScreen';

export default function AddStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen
				name="AddNewRecord"
				component={AddNewRecord}
				options={{
					title: 'Add new record'
				}}
			/>
		</Navigator>
	);
}
