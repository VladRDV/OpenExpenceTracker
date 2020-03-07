import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import AddRecordStack from './Stacks/AddRecordStack';
import RecordsStack from './Stacks/RecordsStack';
import SettingsStack from './Stacks/SettingsStack';
import StatisticsStack from './Stacks/StatisticsStack';

import { scale } from 'react-native-size-matters';

export default function BottomTabs () {
	const Tabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = Tabs;
	return (
		<Navigator shifting initialRouteName="RecordsStack">
			<Screen
				name="RecordsStack"
				component={RecordsStack}
				options={{
					tabBarColor: 'tomato',
					tabBarLabel: 'Records',
					tabBarIcon: () => <Ionicons style={[ { color: 'white' } ]} size={scale(20)} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Statistics"
				component={StatisticsStack}
				options={{
					tabBarColor: '#ff9944',
					tabBarLabel: 'Statistics',
					tabBarIcon: (focused) => <Entypo style={[ { color: focused ? 'white' : 'grey' } ]} size={scale(20)} name={'pie-chart'} />
				}}
			/>
			<Screen
				name="AddRecord"
				component={AddRecordStack}
				options={{
					tabBarColor: '#ffaa99',
					tabBarLabel: 'Add Record',
					tabBarIcon: () => <Ionicons style={[ { color: 'white' } ]} size={scale(20)} name={'md-add'} />
				}}
			/>

			<Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarColor: '#99aaff',
					tabBarLabel: 'Settings',
					tabBarIcon: () => <Ionicons style={[ { color: 'white' } ]} size={scale(20)} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
