import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { AreaChart, Grid, PieChart } from 'react-native-svg-charts';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import * as shape from 'd3-shape';
import { scale } from 'react-native-size-matters';
import _c from '../../../../../../uiConfig/colors';

export default function StatisticsScreen () {
	const [ timespan, setTimespan ] = useState('Today');

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

			{/* <PieChartExample />
			<AreaChartExample /> */}
		</View>
	);
}

class PieChartExample extends React.PureComponent {
	render () {
		const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

		const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

		const pieData = data.filter((value) => value > 0).map((value, index) => ({
			value,
			svg: {
				fill: randomColor(),
				onPress: () => console.log('press', index)
			},
			key: `pie-${index}`
		}));

		return <PieChart animate animationDuration={700} style={{ height: 400 }} data={pieData} />;
	}
}

class AreaChartExample extends React.PureComponent {
	render () {
		const data = [ 500, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

		return (
			<AreaChart
				style={{ height: 200 }}
				data={data}
				contentInset={{ top: 30, bottom: 30 }}
				curve={shape.curveNatural}
				svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}>
				<Grid />
			</AreaChart>
		);
	}
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
