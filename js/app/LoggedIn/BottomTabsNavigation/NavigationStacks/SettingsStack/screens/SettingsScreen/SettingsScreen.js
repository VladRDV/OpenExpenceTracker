import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { View } from 'react-native-ui-lib';
import _c from '../../../../../../../uiConfig/colors';

import SectionTitle from './components/SectionTitle';
import AddCategory from './components/categories/AddCategory';
import DeleteCategories from './components/categories/DeleteCategories';
import SetDefaultCurrency from './components/currency/SetDefaultCurrency';
import Divider from './components/Divider';
import { connect } from 'react-redux';
import { getCurrencies_A } from '../../../../../../../redux/actions/settingsStack/getCurrencies';
function SettingsScreen ({ currencies, getCurrencies }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);
	useEffect(() => {
		if (!currencies.length) getCurrencies();
	}, []);
	return (
		<ScrollView contentContainerStyle={{ backgroundColor: _c.white, flex: 1 }}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<View flex>
				<SectionTitle txt={'Record categories'} />
				<AddCategory toggleStatusBarStyle={toggleStatusBarStyle} />
				<Divider />
				<DeleteCategories toggleStatusBarStyle={toggleStatusBarStyle} />
				<SectionTitle txt={'Currency'} />
				<SetDefaultCurrency currencies={currencies} toggleStatusBarStyle={toggleStatusBarStyle} />
				<Divider />
			</View>
		</ScrollView>
	);
}
const mapStateToProps = ({ settingsStack }) => ({
	currencies: settingsStack.currencies
});
const mapDispatchToProps = (dispatch) => ({
	getCurrencies: (data) => dispatch(getCurrencies_A(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
