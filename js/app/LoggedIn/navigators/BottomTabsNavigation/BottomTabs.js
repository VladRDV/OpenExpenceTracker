import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AddStack from './Stacks/AddStack';
import HistoryStack from './Stacks/HistoryStack';
import SettingsStack from './Stacks/SettingsStack';

import { scale } from 'react-native-size-matters';

export default function BottomTabs () {
	const Tabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = Tabs;
	return (
		<Navigator>
			<Screen
				name="History"
				component={HistoryStack}
				options={{
					tabBarLabel: 'History',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={scale(25)} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Tab 2"
				component={Screen2}
				options={{
					tabBarLabel: 'Screen2',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Tab 3"
				component={Screen3}
				options={{
					tabBarLabel: 'Screen3',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
