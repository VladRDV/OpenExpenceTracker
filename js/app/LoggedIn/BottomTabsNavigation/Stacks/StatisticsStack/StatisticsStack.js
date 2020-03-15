import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StatisticsScreen from './screens/StatisticsScreen';
import _c from '../../../../../uiConfig/colors';
import TopBarPaint from '../../components/TopBarPaint';
import { scale } from 'react-native-size-matters';

export default function StatisticsStack () {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<TopBarPaint
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
		</TopBarPaint>
	);
}
