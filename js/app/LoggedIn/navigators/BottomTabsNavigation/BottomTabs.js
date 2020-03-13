import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import _c from '../../../../uiConfig/colors';

import RecordsStack from './Stacks/RecordsStack';
import SettingsStack from './Stacks/SettingsStack';
import StatisticsStack from './Stacks/StatisticsStack';

export default function BottomTabs ({ navigation }) {
	const Tabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = Tabs;
	const iconProps = {
		tyle: _s.icon,
		size: scale(20),
		color: _c.white
	};
	return (
		<Navigator
			tabBarOptions={{
				allowFontScaling: false,
				keyboardHidesTabBar: true
			}}
			shifting
			initialRouteName="RecordsStack">
			<Screen
				name="RecordsStack"
				component={RecordsStack}
				options={{
					tabBarColor: _c.tomato,
					tabBarLabel: 'Home',
					tabBarIcon: () => <Ionicons {...iconProps} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Statistics"
				component={StatisticsStack}
				options={{
					tabBarColor: _c.orange,
					tabBarLabel: 'Statistics',
					tabBarIcon: () => <Entypo {...iconProps} name={'pie-chart'} />
				}}
			/>

			<Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarColor: _c.jogurt,
					tabBarLabel: 'Settings',
					tabBarIcon: () => <Ionicons {...iconProps} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
const _s = StyleSheet.create({
	icon: { color: 'white' }
});
