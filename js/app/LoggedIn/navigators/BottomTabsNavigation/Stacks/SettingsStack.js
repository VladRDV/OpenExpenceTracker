import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../../screens/SettingsStack/SettingsScreen';
import _c from '../../../../../uiConfig/colors';
import TopBarPaint from '../components/TopBarPaint';

export default function SettingsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<TopBarPaint
			color={_c.jogurt}
			statusBarProps={{
				barStyle: 'light-content'
			}}>
			<Navigator
				screenOptions={{
					safeAreaInsets: { top: 0 }
				}}>
				<Screen
					name="SettingsScreen"
					options={{
						title: 'Settings'
					}}
					component={SettingsScreen}
				/>
			</Navigator>
		</TopBarPaint>
	);
}
