import React from 'react';
import { Colors, View, Picker, Button } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

import _c from 'js/uiConfig/colors';

export default function CategoryPicker ({ toggleStatusBarStyle, categories, select, toggle }) {
	return (
		<Picker
			placeholder="Choose category"
			mode={'SINGLE'}
			title={'Category*'}
			onPress={() => toggleStatusBarStyle(false)}
			// value={language}
			enableModalBlur={false}
			onPress={() => toggleStatusBarStyle(true)}
			topBarProps={{
				title: 'Categories',
				onCancel: () => {
					toggleStatusBarStyle(true);
				}
			}}
			style={{ color: Colors.red20 }}
			showSearch
			searchPlaceholder={'Search a language'}
			searchStyle={{ color: Colors.blue30, placeholderTextColor: Colors.dark50 }}>
			{categories.map((option) => <Picker.Item key={option.value} value={option} />)}
		</Picker>
	);
}
