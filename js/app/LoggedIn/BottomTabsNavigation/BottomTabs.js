import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import _c from '../../../uiConfig/colors';

import RecordsStack from './NavigationStacks/RecordsStack/RecordsStack';
import SettingsStack from './NavigationStacks/SettingsStack/SettingsStack';
import StatisticsStack from './NavigationStacks/StatisticsStack/StatisticsStack';

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
				keyboardHidesTabBar: false
			}}
			shifting
			initialRouteName="RecordsStack">
			<Screen
				name="RecordsStack"
				component={RecordsStack}
				options={{
					tabBarColor: _c.gold,
					tabBarLabel: 'Home',
					tabBarIcon: () => <Ionicons {...iconProps} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Statistics"
				component={StatisticsStack}
				options={{
					tabBarColor: _c.dSkyblue,
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
