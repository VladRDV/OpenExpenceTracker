import React, { useState } from 'react';
import { PieChart } from 'react-native-svg-charts';
import { View, Text } from 'react-native-ui-lib';
import { Text as SVGText } from 'react-native-svg';

export default function StatsPieChart () {
	const pieData = [
		{
			key: 1,
			amount: 50,
			svg: { fill: 'blue' },
			arc: { cornerRadius: 4 }
		},
		{
			key: 2,
			amount: 50,
			svg: { fill: '#9900cc' }
		},
		{
			key: 3,
			amount: 40,
			svg: { fill: '#c61aff' }
		},
		{
			key: 4,
			amount: 195,
			svg: { fill: 'tomato' }
		},
		{
			key: 5,
			amount: 35,
			svg: { fill: '#ecb3ff' }
		}
	];

	return (
		<View style={{ flex: 0.46, backgroundColor: 'red' }}>
			<PieChart
				style={{ height: '100%', width: '100%' }}
				valueAccessor={({ item }) => item.amount}
				data={pieData}
				innerRadius={'25%'}
				outerRadius={'85%'}>
				<Labels />
			</PieChart>
		</View>
	);
}
const Labels = ({ slices, height, width }) => {
	return slices.map((slice, index) => {
		const { labelCentroid, pieCentroid, data } = slice;
		return (
			<SVGText
				key={index}
				x={pieCentroid[0]}
				y={pieCentroid[1]}
				fill={'white'}
				textAnchor={'middle'}
				alignmentBaseline={'middle'}
				fontSize={24}
				stroke={'black'}
				strokeWidth={0.2}>
				{data.amount}
			</SVGText>
		);
	});
};
