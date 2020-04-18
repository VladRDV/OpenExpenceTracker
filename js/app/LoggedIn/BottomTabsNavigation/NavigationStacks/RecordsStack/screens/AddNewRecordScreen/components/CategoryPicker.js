import React, { useCallback } from 'react';
import { Picker, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';

export default function CategoryPicker ({ statusBarState, categories, inputState, recordType }) {
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	const [ selectedCategory, setSelectedCategory ] = inputState;
	let renderCategories = useCallback(
		() => {
			let arr = [];
			for (let i = 0; i < categories.length; i++) {
				let el = categories[i];
				if (recordType === el.isInc) {
					let comp = (
						<Picker.Item
							key={el.name}
							value={{
								value: el.name,
								label: el.name,
								index: i
							}}
						/>
					);
					arr.push(comp);
				} else {
					continue;
				}
			}
			return arr;
		},
		[ categories, recordType ]
	);
	let turnStatusBarOn = useCallback(() => {
		toggleStatusBarStyle(true);
	});
	let turnStatusBarOff = useCallback(() => {
		toggleStatusBarStyle(false);
	});
	let handleChange = useCallback((x) => {
		toggleStatusBarStyle(true);
		setSelectedCategory(x.value);
	});
	return (
		<Picker
			placeholder="Choose category"
			mode={'SINGLE'}
			title={'Category*'}
			onPress={turnStatusBarOff}
			value={selectedCategory}
			enableModalBlur={false}
			onPress={turnStatusBarOn}
			topBarProps={{
				title: 'Categories',
				onCancel: turnStatusBarOn
			}}
			onChange={handleChange}
			showSearch
			searchPlaceholder={'Search categories'}>
			{renderCategories()}
		</Picker>
	);
}
