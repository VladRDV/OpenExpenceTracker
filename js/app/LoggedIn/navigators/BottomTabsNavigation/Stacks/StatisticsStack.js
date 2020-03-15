import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatisticsScreen from '../../../screens/StatisticsStack/StatisticsScreen';
import _c from '../../../../../uiConfig/colors';
import TopBarPaint from '../components/TopBarPaint';

export default function StatisticsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<TopBarPaint
			color={_c.salad}
			statusBarProps={{
				barStyle: 'light-content'
			}}>
			<Navigator
				screenOptions={{
					safeAreaInsets: { top: 0 }
				}}>
				<Screen
					name="StatisticsScreen"
					options={{
						title: 'Statistics'
					}}
					component={StatisticsScreen}
				/>
			</Navigator>
		</TopBarPaint>
	);
}
