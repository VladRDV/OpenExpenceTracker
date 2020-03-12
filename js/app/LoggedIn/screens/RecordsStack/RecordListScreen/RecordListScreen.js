import React, { useState, useEffect, Fragment } from 'react';
import { FlatList, StyleSheet, StatusBar, Platform } from 'react-native';
import { View, RadioButton, RadioGroup, Dialog, TouchableOpacity, Text } from 'react-native-ui-lib';
import ListItem from './components/ListItem';
// import { moment } from 'moment';
import { scale } from 'react-native-size-matters';
import keygen from '../../../../../utils/keygen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import _c from '../../../../../uiConfig/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordListScreen ({ navigation }) {
	const [ typeFilterMode, setTypeFilter ] = useState('all');
	const [ isInSelectDeleteMode, toggleSelectDeleteMode ] = useState(false);
	const [ itemsToDelete, setItemsToDelete ] = useState(false);
	const [ categoryFilterOn, toggleCategoryFilter ] = useState(false);
	const data = [
		{ date: '20-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'drinks', ammount: '1200$', type: 'exp', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '24-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'food', ammount: '120$', type: 'exp', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },

		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() }
	];
	const [ dataset, changedataset ] = useState(data);

	useEffect(
		() => {
			navigation.setOptions({
				headerLeft: () => {
					return (
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity
								style={{ marginHorizontal: scale(8) }}
								onPress={() => toggleSelectDeleteMode(true)}
								children={<Feather size={scale(25)} name={'edit'} color={_c.red} />}
							/>
							<TouchableOpacity
								style={{ marginHorizontal: scale(8) }}
								onPress={() => toggleCategoryFilter(true)}
								children={<MaterialIcons size={scale(25)} name={'filter-list'} color={_c.red} />}
							/>
						</View>
					);
				}
			});
		},
		[ categoryFilterOn ]
	);
	// const viewabilityConfig = {
	// 	waitForInteraction: true,
	// 	viewAreaCoveragePercentThreshold: 95
	// };

	return (
		<View style={_s.container}>
			<Dialog visible={categoryFilterOn} useSafeArea heipanDirection={'down'} onDismiss={() => toggleCategoryFilter(false)} height={100}>
				<Text>ifdlhsgoiudfghd</Text>
			</Dialog>
			<RadioGroup value={typeFilterMode} initialValue={'all'} style={_s.filter}>
				<RadioButton
					color={_c.tomato}
					labelStyle={{ color: _c.dSkyblue }}
					selected={typeFilterMode === 'all'}
					onPress={() => setTypeFilter('all')}
					label={'All'}
				/>
				<RadioButton
					color={_c.tomato}
					labelStyle={{ color: _c.dSkyblue }}
					selected={typeFilterMode === 'inc'}
					onPress={() => setTypeFilter('inc')}
					label={'Income'}
				/>
				<RadioButton
					color={_c.tomato}
					labelStyle={{ color: _c.dSkyblue }}
					selected={typeFilterMode === 'exp'}
					onPress={() => setTypeFilter('exp')}
					label={'Expence'}
				/>
			</RadioGroup>
			<FlatList
				initialNumToRender={8}
				removeClippedSubviews
				// viewabilityConfig={viewabilityConfig}
				style={_s.list}
				data={dataset}
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
