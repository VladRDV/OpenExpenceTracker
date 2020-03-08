import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Button, RadioButton, RadioGroup } from 'react-native-ui-lib';
import ListItem from './components/ListItem';
// import { moment } from 'moment';
import { scale } from 'react-native-size-matters';

export default function RecordListScreen (props) {
	const data = [
		{ date: '20-12-2020', ammount: '120$', type: 'inc', title: 'payday' },
		{ date: '22-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '22-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '22-12-2020', ammount: '120$', type: 'inc', title: 'payday' },
		{ date: '22-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '24-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '120$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '120$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '27-12-2020', ammount: '120$', type: 'inc', title: 'payday' },
		{ date: '28-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '30-12-2020', ammount: '1200$', type: 'inc', title: 'payday' },
		{ date: '30-12-2020', ammount: '1200$', type: 'inc', title: 'payday' }
	];
	return (
		<View style={_s.container}>
			<RadioGroup style={_s.filter}>
				<RadioButton label={'All'} />
				<RadioButton label={'Income'} />
				<RadioButton label={'Expence'} />
			</RadioGroup>
			<FlatList style={_s.list} data={data} keyExtractor={({ index }) => index} renderItem={({ item }) => <ListItem data={item} />} />
		</View>
	);
}
// function sortByDate (arr) {
// 	// const array = [ { date: '2018-05-11' }, { date: '2018-05-12' }, { date: '2018-05-10' } ];
// 	return array.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));
// }
const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1
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
