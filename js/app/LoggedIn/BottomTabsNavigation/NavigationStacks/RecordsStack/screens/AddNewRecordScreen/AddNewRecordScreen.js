import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { DateTimePicker, View, RadioGroup, RadioButton, TextField, Picker } from 'react-native-ui-lib';
import _c from '../../../../../../../uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function AddNewRecordScreen ({ navigation }) {
	const [ typeFilterMode, setTypeFilter ] = useState('inc');
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);
	return (
		<View flex style={_s.container}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<RadioGroup value={typeFilterMode} onValueChange={(x) => setTypeFilter(x)} initialValue={'inc'} style={_s.filter}>
				<RadioButton color={_c.green} labelStyle={{ color: _c.green }} value={'inc'} label={'Income'} />
				<RadioButton color={_c.gold} labelStyle={{ color: _c.gold }} value={'exp'} label={'Expence'} />
			</RadioGroup>
			<View paddingH-20 paddingT-40 flex>
				<TextField
					key={'Ammount'}
					placeholder={'Ammount'}
					expandable
					floatingPlaceholder={true}
					onToggleExpandableModal={() => toggleStatusBarStyle(!statusBarIsLight)}
					maxLength={50}
				/>
				<DateTimePicker
					mode={'date'}
					title={'Date'}
					placeholder={'Select time'}
					timeFormat={'DD/MM/YYYY'}
					// value={new Date('2015-03-25T12:00:00-06:30')}
				/>
				<Picker />
				<TextField
					value={'dddd'}
					autoFocus
					onChange={(e) => console.log(e, 'OOOOOOOOOOO')}
					key={'Sidenote'}
					placeholder={'Sidenote'}
					transformer={(e) => console.log(e, 'ZZZZZZZZ')}
					expandable
					onToggleExpandableModal={() => toggleStatusBarStyle(!statusBarIsLight)}
					floatingPlaceholder={true}
					maxLength={50}
				/>
			</View>
		</View>
	);
}
const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		backgroundColor: _c.white
	},
	filter: {
		height: '8%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: scale(0.5),
		borderColor: 'lightgrey',
		backgroundColor: 'white'
	}
});
