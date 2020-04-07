import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, RadioGroup, RadioButton } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { scale } from 'react-native-size-matters';
import CategoryPicker from './components/CategoryPicker';
import DatePicker from './components/DatePicker';
import AmmountInput from './components/AmmountInput';
import SidenoteInput from './components/SidenoteInput';
import FormSubmit from './components/FormSubmit';
import { connect } from 'react-redux';

function AddNewRecordScreen ({ navigation, categories }) {
	const [ typeFilterMode, setTypeFilter ] = useState('inc');
	const [ date, setDate ] = useState(new Date());
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);
	return (
		<View flex style={_s.container}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<RadioGroup value={typeFilterMode} onValueChange={(x) => setTypeFilter(x)} initialValue={'inc'} style={_s.filter}>
				<RadioButton color={_c.green} labelStyle={{ color: _c.green }} value={'inc'} label={'Income'} />
				<RadioButton color={_c.gold} labelStyle={{ color: _c.gold }} value={'exp'} label={'Expence'} />
			</RadioGroup>
			<View paddingH-20 paddingT-40 flex>
				<AmmountInput toggleStatusBarStyle={toggleStatusBarStyle} statusBarIsLight={statusBarIsLight} />
				<DatePicker setDate={setDate} date={date} />
				<CategoryPicker categories={categories} />
				<SidenoteInput toggleStatusBarStyle={toggleStatusBarStyle} statusBarIsLight={statusBarIsLight} />
			</View>
			<FormSubmit />
		</View>
	);
}
const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		backgroundColor: _c.white,
		paddingBottom: '5%'
	},
	filter: {
		height: '8%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: _c.lGrey,
		backgroundColor: _c.white
	}
});
const mapStateToProps = ({ settingsStack }) => ({
	currencies: settingsStack.currencies,
	categories: settingsStack.categories,
	defaultCurrency: settingsStack.defaultCurrency
});
const mapDispatchToProps = (dispatch) => ({
	setDefaultCurrency: (data) => dispatch(setDefaultCurrency(data)),
	getCurrencies: (data) => dispatch(getCurrencies_A(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddNewRecordScreen);
