import React, { useState, useCallback } from 'react';
import { StyleSheet, StatusBar, Alert } from 'react-native';
import { View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import moment from 'moment';
import { connect } from 'react-redux';
//components
import CategoryPicker from './components/CategoryPicker';
import DatePicker from './components/DatePicker';
import AmmountInput from './components/AmmountInput';
import TitleInput from './components/TitleInput';
import FormSubmit from './components/FormSubmit';
import RadioBtns from './components/RadioBtns';
// redux actions
import { addRecord } from 'js/redux/actions/recordsStack/recordList_CRUD';

function AddNewRecordScreen ({ categories, defaultCurrency, addRecord }) {
	const statusBarState = useState(true);
	const [ recordType, setRecordType ] = useState('inc');
	const titleState = useState('');
	const dateState = useState(new Date());
	const ammountState = useState('');
	const recordCategoryState = useState('');

	const statusBarIsLight = statusBarState[0] ? 'light-content' : 'dark-content';
	const canSubmit = titleState[0].length && ammountState[0].length && recordCategoryState[0];

	const resetForm = useCallback(
		() => {
			setRecordType('inc');
			recordCategoryState[1]('');
			titleState[1]('');
			dateState[1](new Date());
			ammountState[1][''];
			Alert.alert('Open Expence Tracker', 'Done.');
		},
		[ titleState[0], dateState[0], ammountState[0], recordCategoryState[0], recordType ]
	);
	const submitForm = useCallback(
		() => {
			const d = dateState[0];
			addRecord({
				title: titleState[0],
				category: recordCategoryState[0],
				type: recordType,
				date: `${moment(d).format('DD MMM YYYY')}`,
				ammount: ammountState[0]
			});
			resetForm();
		},
		[ titleState[0], dateState[0], ammountState[0], recordCategoryState[0], recordType ]
	);
	const handleRadioChange = useCallback((x) => {
		setRecordType(x);
		recordCategoryState[1]();
	});

	return (
		<View flex style={_s.container}>
			<StatusBar barStyle={statusBarIsLight} animated />
			<RadioBtns value={recordType} onChange={handleRadioChange} />
			<View paddingH-20 paddingT-40 flex>
				<TitleInput statusBarState={statusBarState} inputState={titleState} />
				<AmmountInput defaultCurrency={defaultCurrency} statusBarState={statusBarState} inputState={ammountState} />
				<DatePicker inputState={dateState} />
				<CategoryPicker statusBarState={statusBarState} categories={categories} inputState={recordCategoryState} recordType={recordType} />
			</View>
			<FormSubmit submitForm={submitForm} disabled={!canSubmit} />
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		backgroundColor: _c.white,
		paddingBottom: '5%'
	}
});

const mapStateToProps = ({ settingsStack }) => ({
	currencies: settingsStack.currencies,
	categories: settingsStack.categories,
	defaultCurrency: settingsStack.defaultCurrency
});
const mapDispatchToProps = (dispatch) => ({
	addRecord: (data) => dispatch(addRecord(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRecordScreen);
