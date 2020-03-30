import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import _c from 'js/uiConfig/colors';
import { scale } from 'react-native-size-matters';
import StatusBarPaint from '../../components/StatusBarPaint';

export default function SettingsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<StatusBarPaint
			color={_c.jogurt}
			statusBarProps={{
				barStyle: 'light-content'
			}}>
			<Navigator
				screenOptions={{
					safeAreaInsets: { top: 0 },
					headerStyle: {
						height: scale(50)
					}
				}}>
				<Screen
					name="SettingsScreen"
					options={{
						title: 'Settings'
					}}
					component={SettingsScreen}
				/>
			</Navigator>
		</StatusBarPaint>
	);
}
