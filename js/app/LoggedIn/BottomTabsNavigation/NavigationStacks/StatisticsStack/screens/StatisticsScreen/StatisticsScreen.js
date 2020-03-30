import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';
import StatsPieChart from './components/StatsPieChart';
import Table from './components/Table';
export default function StatisticsScreen () {
	const [ timespan, setTimespan ] = useState('today');
	const radioBtnProps = {
		color: _c.dSkyblue,
		labelStyle: { color: _c.black }
	};
	return (
		<View flex>
			<RadioGroup value={timespan} onValueChange={(x) => setTimespan(x)} initialValue={'today'} style={_s.filter}>
				<RadioButton {...radioBtnProps} value={'today'} label={'Today'} />
				<RadioButton {...radioBtnProps} value={'week'} label={'Last week'} />
				<RadioButton {...radioBtnProps} value={'month'} label={'Last month'} />
			</RadioGroup>

			<View style={{ flex: 0.92 }}>
				<StatsPieChart />
			</View>
			<Table />
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
