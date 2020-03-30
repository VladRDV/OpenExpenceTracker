import React from 'react';
import { Colors, View, Picker, Button } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import _c from 'js/uiConfig/colors';

export default function CategoryPicker ({ toggleStatusBarStyle, arr, select, toggle }) {
	return (
		<Picker
			renderPicker={() => (
				<View style={{ marginHorizontal: scale(8) }}>
					<MaterialIcons size={scale(25)} name={'filter-list'} color={_c.gold} />
				</View>
			)}
			placeholder="Favorite Language"
			mode={'SINGLE'}
			floatingPlaceholder
			onPress={toggleStatusBarStyle}
			// value={language}
			enableModalBlur={false}
			onChange={toggleStatusBarStyle}
			topBarProps={{
				title: 'Languages',
				cancelButtonProps: {
					disabled: true,
					iconSource: null
				}
			}}
			style={{ color: Colors.red20 }}
			showSearch
			searchPlaceholder={'Search a language'}
			searchStyle={{ color: Colors.blue30, placeholderTextColor: Colors.dark50 }}>
			<Picker.Item key={'---'} value={{ label: '--- All ---', value: '----' }} />
			{arr.map((option) => <Picker.Item key={option.value} value={option} />)}
		</Picker>
	);
}
