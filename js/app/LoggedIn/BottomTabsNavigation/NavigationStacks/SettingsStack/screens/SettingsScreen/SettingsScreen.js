import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';

import SectionTitle from './components/SectionTitle';
import AddCategory from './components/categories/AddCategory';
import DeleteCategories from './components/categories/DeleteCategories';
import SetDefaultCurrency from './components/currency/SetDefaultCurrency';
import Divider from './components/Divider';
import { connect } from 'react-redux';
import { getCurrencies_A } from 'js/redux/actions/settingsStack/getCurrencies';
import { setDefaultCurrency } from 'js/redux/actions/settingsStack/setDefaultCurrency';

function SettingsScreen ({ currencies, getCurrencies, setDefaultCurrency, defaultCurrency }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);
	const [ category, setCategory ] = useState(0);
	useEffect(() => {
		if (!currencies.length) getCurrencies();
	}, []);
	return (
		<ScrollView contentContainerStyle={{ backgroundColor: _c.white, flex: 1 }}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<View flex>
				<SectionTitle txt={'Record categories'} />
				<AddCategory setCategory={setCategory} toggleStatusBarStyle={toggleStatusBarStyle} />
				<Divider />
				<DeleteCategories toggleStatusBarStyle={toggleStatusBarStyle} />
				<SectionTitle txt={'Currency'} />
				<SetDefaultCurrency
					currencies={currencies}
					toggleStatusBarStyle={toggleStatusBarStyle}
					defaultCurrency={defaultCurrency}
					setDefaultCurrency={setDefaultCurrency}
				/>
				<Divider />
			</View>
		</ScrollView>
	);
}
const mapStateToProps = ({ settingsStack }) => ({
	currencies: settingsStack.currencies,
	defaultCurrency: settingsStack.defaultCurrency
});
const mapDispatchToProps = (dispatch) => ({
	setDefaultCurrency: (data) => dispatch(setDefaultCurrency(data)),
	getCurrencies: (data) => dispatch(getCurrencies_A(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
