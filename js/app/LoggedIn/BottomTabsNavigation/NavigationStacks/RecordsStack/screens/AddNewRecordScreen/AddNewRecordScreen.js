import React, { useState, useCallback } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, RadioGroup, RadioButton } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { connect } from 'react-redux';
//components
import CategoryPicker from './components/CategoryPicker';
import DatePicker from './components/DatePicker';
import AmmountInput from './components/AmmountInput';
import TitleInput from './components/TitleInput';
import FormSubmit from './components/FormSubmit';
// redux actions

function AddNewRecordScreen ({ categories }) {
	const statusBarState = useState(true);
	const [ recordType, setRecordType ] = useState(true);
	const titleState = useState('');
	const dateState = useState(new Date());
	const ammountState = useState('');
	const recordCategoryState = useState('');
	const statusBarIsLight = statusBarState[0] ? 'light-content' : 'dark-content';
	const submitForm = useCallback(
		() => {
			console.log('AddNewRecord');
		},
		[ titleState[0], dateState[0], ammountState[0], recordCategoryState[0], recordType ]
	);
	return (
		<View flex style={_s.container}>
			<StatusBar barStyle={statusBarIsLight} animated />
			<RadioGroup value={recordType} onValueChange={(x) => setRecordType(x)} initialValue={true} style={_s.filter}>
				<RadioButton color={_c.green} labelStyle={{ color: _c.green }} value={true} label={'Income'} />
				<RadioButton color={_c.red} labelStyle={{ color: _c.red }} value={false} label={'Expence'} />
			</RadioGroup>
			<View paddingH-20 paddingT-40 flex>
				<TitleInput statusBarState={statusBarState} inputState={titleState} />
				<AmmountInput statusBarState={statusBarState} inputState={ammountState} />
				<DatePicker inputState={dateState} />
				<CategoryPicker statusBarState={statusBarState} categories={categories} inputState={recordCategoryState} recordType={recordType} />
			</View>
			<FormSubmit submitForm={submitForm} />
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
// const mapDispatchToProps = (dispatch) => ({
// 	getCurrencies: (data) => dispatch(getCurrencies_A(data))
// });
export default connect(mapStateToProps, null)(AddNewRecordScreen);
