import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatisticsScreen from './screens/StatisticsScreen/StatisticsScreen';
import _c from 'js/uiConfig/colors';
import StatusBarPaint from '../../components/StatusBarPaint';
import { scale } from 'react-native-size-matters';

export default function StatisticsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<StatusBarPaint
			color={_c.dSkyblue}
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
					name="StatisticsScreen"
					options={{
						title: 'Statistics'
					}}
					component={StatisticsScreen}
				/>
			</Navigator>
		</StatusBarPaint>
	);
}
