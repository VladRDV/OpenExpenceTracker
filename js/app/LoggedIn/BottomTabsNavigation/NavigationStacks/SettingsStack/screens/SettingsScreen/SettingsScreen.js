import React, { useState, useEffect, Fragment } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { connect } from 'react-redux';
// components
import SectionTitle from './components/SectionTitle';
import AddCategory from './components/categories/AddCategory';
import DeleteCategories from './components/categories/DeleteCategories';
import SetDefaultCurrency from './components/currency/SetDefaultCurrency';
import Divider from './components/Divider';
// redux actions
import { getCurrencies_A } from 'js/redux/actions/settingsStack/getCurrencies';
import { setDefaultCurrency } from 'js/redux/actions/settingsStack/setDefaultCurrency';
import { deleteCategories } from 'js/redux/actions/settingsStack/deleteCategories';
import { addCategory } from 'js/redux/actions/settingsStack/addCategory';

function SettingsScreen ({ currencies, getCurrencies, setDefaultCurrency, defaultCurrency, categories, deleteCategories, addCategory }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = useState(true);

	useEffect(() => {
		if (!currencies.length) getCurrencies();
	}, []);

	return (
		<ScrollView contentContainerStyle={{ backgroundColor: _c.white, flex: 1 }}>
			<StatusBar barStyle={statusBarIsLight ? 'light-content' : 'dark-content'} animated />
			<View flex>
				<SectionTitle txt={'Record categories'} />
				<AddCategory categories={categories} addCategory={addCategory} toggleStatusBarStyle={toggleStatusBarStyle} />
				{categories.length > 2 && (
					<Fragment>
						<Divider />
						<DeleteCategories toggleStatusBarStyle={toggleStatusBarStyle} categories={categories} deleteCategories={deleteCategories} />
					</Fragment>
				)}
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
	categories: settingsStack.categories,
	defaultCurrency: settingsStack.defaultCurrency
});
const mapDispatchToProps = (dispatch) => ({
	setDefaultCurrency: (data) => dispatch(setDefaultCurrency(data)),
	getCurrencies: (data) => dispatch(getCurrencies_A(data)),
	deleteCategories: (data) => dispatch(deleteCategories(data)),
	addCategory: (data) => dispatch(addCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
