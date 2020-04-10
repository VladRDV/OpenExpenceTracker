import React from 'react';
import { Picker, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';

export default function CategoryPicker ({ statusBarState, categories, inputState, recordType }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	const [ selectedCategory, setSelectedCategory ] = inputState;
	return (
		<Picker
			placeholder="Choose category"
			mode={'SINGLE'}
			title={'Category*'}
			onPress={() => toggleStatusBarStyle(false)}
			value={selectedCategory}
			enableModalBlur={false}
			onPress={() => toggleStatusBarStyle(true)}
			topBarProps={{
				title: 'Categories',
				onCancel: () => {
					toggleStatusBarStyle(true);
				}
			}}
			onChange={(x) => {
				toggleStatusBarStyle(true);
				setSelectedCategory(x.value);
			}}
			showSearch
			searchPlaceholder={'Search categories'}>
			{categories.map(
				(el, index) =>
					recordType === el.isInc ? (
						<Picker.Item
							key={el}
							value={{
								value: el.name,
								label: el.name,
								index
							}}
						/>
					) : (
						<View /> // had to put this here, null causes error
					)
			)}
		</Picker>
	);
}
