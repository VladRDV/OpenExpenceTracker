import React, { useCallback } from 'react';
import { Picker, Text, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default function DeleteCategories ({ toggleStatusBarStyle, categories, deleteCategories }) {
	const disabled = !categories.length;
	const renderBtn = useCallback(
		() => {
			const btn = (
				<View flex left centerV paddingH-s5 style={_s.btn}>
					<Text allowFontScaling={false} style={_s.btnTxt}>
						Delete categories
					</Text>
				</View>
			);
			return disabled ? null : btn;
		},
		[ categories ]
	);
	return (
		<Picker
			renderPicker={() => renderBtn()}
			placeholder="Search categories"
			mode={'MULTI'}
			floatingPlaceholder
			onPress={() => toggleStatusBarStyle(false)}
			enableModalBlur={false}
			topBarProps={{
				doneLabel: 'Delete',
				onCancel: () => toggleStatusBarStyle(true),
				title: 'Select categories'
			}}
			onChange={(arr) => {
				toggleStatusBarStyle(true);
				deleteCategories(arr);
			}}
			value={[]}
			style={_s.search}
			showSearch
			searchPlaceholder={'Search categories'}
			searchStyle={{
				color: _c.dSkyblue,
				placeholderTextColor: _c.grey
			}}>
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

const _s = ScaledSheet.create({
	btn: {
		height: '60@s'
	},
	btnTxt: {
		color: _c.black,
		fontSize: '18@s'
	},
	search: {
		color: _c.grey
	}
});
