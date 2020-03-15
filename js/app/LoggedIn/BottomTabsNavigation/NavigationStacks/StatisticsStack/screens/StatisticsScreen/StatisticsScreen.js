import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
import _c from '../../../../../../../uiConfig/colors';
import StatsPieChart from './components/StatsPieChart';

export default function StatisticsScreen () {
	const [ timespan, setTimespan ] = useState('today');

	return (
		<View flex>
			<RadioGroup value={timespan} initialValue={'today'} style={_s.filter}>
				<RadioButton
					color={_c.dSkyblue}
					labelStyle={{ color: _c.black }}
					selected={timespan === 'today'}
					onPress={() => setTimespan('today')}
					label={'Today'}
				/>
				<RadioButton
					color={_c.dSkyblue}
					labelStyle={{ color: _c.black }}
					selected={timespan === 'week'}
					onPress={() => setTimespan('week')}
					label={'Last week'}
				/>
				<RadioButton
					color={_c.dSkyblue}
					labelStyle={{ color: _c.black }}
					selected={timespan === 'month'}
					onPress={() => setTimespan('month')}
					label={'Last month'}
				/>
			</RadioGroup>

			<View style={{ flex: 0.92 }}>
				<StatsPieChart />
			</View>
			{/* <AreaChartExample /> */}
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1
		// backgroundColor: 'red'
	},
	filter: {
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: scale(0.5),
		borderColor: 'lightgrey',
		backgroundColor: 'white'
	},
	list: {
		flex: 0.92
	}
});
