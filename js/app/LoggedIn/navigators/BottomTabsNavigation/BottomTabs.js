import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AddRecordStack from './Stacks/AddRecordStack';
import RecordsStack from './Stacks/RecordsStack';
import SettingsStack from './Stacks/SettingsStack';
import StatisticsStack from './Stacks/StatisticsStack';

import { scale } from 'react-native-size-matters';

export default function BottomTabs () {
	const Tabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = Tabs;
	return (
		<Navigator>
			<Screen
				name="RecordsStack"
				component={RecordsStack}
				options={{
					tabBarLabel: 'Records',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={scale(25)} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Statistics"
				component={StatisticsStack}
				options={{
					tabBarLabel: 'Statistics',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-settings'} />
				}}
			/>
			<Screen
				name="AddRecord"
				component={AddRecordStack}
				options={{
					tabBarLabel: 'Add Record',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-home'} />
				}}
			/>

			<Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
