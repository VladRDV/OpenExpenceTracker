import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Button, RadioButton, RadioGroup } from 'react-native-ui-lib';
import ListItem from './components/ListItem';

export default function RecordListScreen (props) {
	const data = [ { date: '20-12-2020', ammount: '120%', type: 'inc', title: 'payday' } ];
	return (
		<View style={_s.container}>
			<RadioGroup style={_s.filter}>
				<RadioButton label={'All'} />
				<RadioButton label={'Income'} />
				<RadioButton label={'Expence'} />
			</RadioGroup>
			<FlatList style={_s.list} data={data} renderItem={(item) => <ListItem data={item} />} keyExtractor={(item) => item.name} />
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1
	},
	filter: {
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'red'
	},
	list: {
		flex: 0.92,
		backgroundColor: 'indigo'
	}
});
