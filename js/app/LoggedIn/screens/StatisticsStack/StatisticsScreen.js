import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
export default class StatisticsScreen extends Component {
	render () {
		return (
			<View>
				<Text children={'StatisticsScreen'} />
				<PieChartExample />
				<AreaChartExample />
			</View>
		);
	}
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
