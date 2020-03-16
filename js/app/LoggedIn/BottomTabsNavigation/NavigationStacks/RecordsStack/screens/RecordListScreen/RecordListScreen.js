import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, StatusBar } from 'react-native';
import { View, RadioButton, RadioGroup, TouchableOpacity } from 'react-native-ui-lib';
// import { moment } from 'moment';
import { connect } from 'react-redux';
import { scale } from 'react-native-size-matters';

import Feather from 'react-native-vector-icons/Feather';
import _c from '../../../../../../../uiConfig/colors';

import ListItem from './components/ListItem';
import CategoryPicker from './components/CategoryPicker';

function RecordListScreen ({ navigation, list }) {
	const [ typeFilterMode, setTypeFilter ] = useState('all');
	const [ isInSelectDeleteMode, toggleSelectDeleteMode ] = useState(false);
	const [ itemsToDelete, setItemsToDelete ] = useState(false);
	const [ categoryFilterOn, toggleCategoryFilter ] = useState(false);
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);
	const items = [
		{ value: 0, label: 'shopping' },
		{ value: 1, label: 'job' },
		{ value: 3, label: 'parties' },
		{ value: 5, label: 'traveling' },
		{ value: 10, label: 'gifts' },
		{ value: 24, label: 'food' }
	];
	const [ categories, setCategories ] = useState(items);
	const radioBtnProps = {
		color: _c.salad,
		labelStyle: { color: _c.black }
	};
	useEffect(
		() => {
			navigation.setOptions({
				headerLeft: () => {
					return (
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity
								style={{ marginHorizontal: scale(8) }}
								onPress={() => toggleSelectDeleteMode(true)}
								children={<Feather size={scale(25)} name={'edit'} color={_c.salad} />}
							/>
							<CategoryPicker arr={categories} toggleStatusBarStyle={toggleStatusBarStyle} />
						</View>
					);
				}
			});
		},
		[ categoryFilterOn ]
	);
	return (
		<View style={_s.container}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<RadioGroup value={typeFilterMode} onValueChange={(x) => setTypeFilter(x)} initialValue={'all'} style={_s.filter}>
				<RadioButton {...radioBtnProps} value={'all'} label={'All'} />
				<RadioButton {...radioBtnProps} value={'inc'} label={'Income'} />
				<RadioButton {...radioBtnProps} value={'exp'} label={'Expence'} />
			</RadioGroup>
			<FlatList
				initialNumToRender={8}
				removeClippedSubviews
				// viewabilityConfig={viewabilityConfig}
				style={_s.list}
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ListItem data={item} typeFilterMode={typeFilterMode} condition={item.type === typeFilterMode || typeFilterMode === 'all'} />
				)}
			/>
		</View>
	);
}

RecordListScreen.whyDidYouRender = {
	logOnDifferentValues: true,
	customName: 'lista zapisa'
};

// function sortByDate (arr) {
// 	// const array = [ { date: '2018-05-11' }, { date: '2018-05-12' }, { date: '2018-05-10' } ];
// 	return array.sort((a, b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));
// }
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
const mapStateToProps = ({ recordsStack }) => ({
	list: recordsStack.list
});
// const mapDispatchToProps = (dispatch) => ({
// 	doSomething: (data) => dispatch(somethingDispatchable(data))
// });
export default connect(mapStateToProps, null)(RecordListScreen);
