import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
export default function SettingsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen
				name="Tab 1"
				component={Screen1}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={scale(25)} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
