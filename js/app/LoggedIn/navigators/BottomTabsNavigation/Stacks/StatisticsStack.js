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
			color={_c.orange}
			statusBarProps={{
				barStyle: 'light-content'
			}}>
			<Navigator>
				<Screen
					name="StatisticsScreen"
					options={{
						title: 'Statistics',
						safeAreaInsets: { top: 0 }
					}}
					component={StatisticsScreen}
				/>
			</Navigator>
		</TopBarPaint>
	);
}
