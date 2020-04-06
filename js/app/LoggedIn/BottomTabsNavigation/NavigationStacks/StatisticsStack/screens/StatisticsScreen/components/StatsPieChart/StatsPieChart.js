import React, { useState } from 'react';
import { PieChart } from 'react-native-svg-charts';
import { View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import _c from 'js/uiConfig/colors';
import Labels from './Labels';

export default function StatsPieChart () {
	const pieData = [
		{
			key: 1,
			amount: 50,
			svg: { fill: 'blue' },
			arc: { cornerRadius: 6 }
		},
		{
			key: 2,
			amount: 50,
			svg: { fill: '#9900cc' },
			arc: { cornerRadius: 6 }
		},
		{
			key: 3,
			amount: 40,
			svg: { fill: '#c61aff' },
			arc: { cornerRadius: 6 }
		},
		{
			key: 6,
			amount: 195,
			svg: { fill: 'tomato' },
			arc: { cornerRadius: 6 }
		},
		{
			key: 5,
			amount: 35,
			svg: { fill: '#ecb3ff' },
			arc: { cornerRadius: 6 }
		}
	];

	return (
		<View style={_s.container}>
			<PieChart
				style={{ height: '100%', width: '100%' }}
				valueAccessor={({ item }) => item.amount}
				data={pieData}
				innerRadius={'40%'}
				outerRadius={'95%'}>
				<Labels />
			</PieChart>
		</View>
	);
}

const _s = StyleSheet.create({
	container: { flex: 0.46, backgroundColor: _c.white }
});
