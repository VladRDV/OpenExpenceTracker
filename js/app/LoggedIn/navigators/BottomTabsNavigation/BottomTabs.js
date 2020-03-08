import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

import RecordsStack from './Stacks/RecordsStack';
import SettingsStack from './Stacks/SettingsStack';
import StatisticsStack from './Stacks/StatisticsStack';

export default function BottomTabs ({ navigation }) {
	const Tabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = Tabs;
	const icon_size = scale(20);
	return (
		<Navigator shifting initialRouteName="RecordsStack">
			<Screen
				name="RecordsStack"
				component={RecordsStack}
				options={{
					tabBarColor: 'tomato',
					tabBarLabel: 'Home',
					tabBarIcon: () => <Ionicons style={_s.icon} size={icon_size} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Statistics"
				component={StatisticsStack}
				options={{
					tabBarColor: '#ff9944',
					tabBarLabel: 'Statistics',
					tabBarIcon: () => <Entypo style={_s.icon} size={icon_size} name={'pie-chart'} />
				}}
			/>

			<Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarColor: '#99aaff',
					tabBarLabel: 'Settings',
					tabBarIcon: () => <Ionicons style={_s.icon} size={icon_size} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
const _s = StyleSheet.create({
	icon: { color: 'white' }
});
