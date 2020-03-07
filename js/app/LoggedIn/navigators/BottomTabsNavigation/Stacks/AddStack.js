import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
export default function AddStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen
				name="AddItem"
				component={Screen1}
				options={{
					title: 'Add Item'
				}}
			/>
		</Navigator>
	);
}
