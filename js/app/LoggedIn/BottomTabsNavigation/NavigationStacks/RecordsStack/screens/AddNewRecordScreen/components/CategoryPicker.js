import React from 'react';
import { Picker } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';

export default function CategoryPicker ({ statusBarState, categories, inputState }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	const [ selectedCategory, setSelectedCategory ] = inputState;
	const topBarProps = {
		title: 'Categories',
		onCancel: () => {
			toggleStatusBarStyle(true);
		}
	};
	return (
		<Picker
			placeholder="Choose category"
			mode={'SINGLE'}
			title={'Category*'}
			onPress={() => toggleStatusBarStyle(false)}
			value={selectedCategory}
			enableModalBlur={false}
			onPress={() => toggleStatusBarStyle(true)}
			topBarProps={topBarProps}
			onChange={(x) => {
				toggleStatusBarStyle(true);
				setSelectedCategory(x.value);
			}}
			showSearch
			searchPlaceholder={'Search categories'}>
			{categories.map((el, index) => (
				<Picker.Item
					key={el}
					value={{
						value: el,
						label: el,
						index
					}}
				/>
			))}
		</Picker>
	);
}
