import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';
import StatsPieChart from './components/StatsPieChart/StatsPieChart';
import DataTable from './components/DataTable';
import Gradient from './components/Gradient';

export default function StatisticsScreen () {
	const [ timespan, setTimespan ] = useState('today');
	const [ typeFilterMode, setTypeFilter ] = useState('inc');

	const radioBtnProps = {
		color: _c.dSkyblue,
		labelStyle: { color: _c.black }
	};
	return (
		<View style={_s.container}>
			<RadioGroup value={typeFilterMode} onValueChange={(x) => setTypeFilter(x)} initialValue={'inc'} style={_s.filter}>
				<RadioButton {...radioBtnProps} value={'inc'} label={'Income'} />
				<RadioButton {...radioBtnProps} value={'exp'} label={'Expence'} />
			</RadioGroup>
			<RadioGroup value={timespan} onValueChange={(x) => setTimespan(x)} initialValue={'today'} style={_s.filter}>
				<RadioButton {...radioBtnProps} value={'today'} label={'Today'} />
				<RadioButton {...radioBtnProps} value={'week'} label={'Last week'} />
				<RadioButton {...radioBtnProps} value={'month'} label={'Last month'} />
			</RadioGroup>
			<StatsPieChart />
			<View style={_s.txtData}>
				<Gradient />
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: '6%' }}>
					<DataTable />
				</ScrollView>
			</View>
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		// justifyContent: 'flex-start',
		flex: 1,
		minHeight: '100%'
	},
	txtData: {
		position: 'relative',
		zIndex: 0,
		justifyContent: 'flex-start',
		flex: 0.42,
		backgroundColor: _c.white
	},
	filter: {
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: scale(0.5),
		borderColor: 'lightgrey',
		backgroundColor: 'white'
	}
});
