import React, { useCallback, useState } from 'react';
import { Picker, Text, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default function DeleteCategories ({ toggleStatusBarStyle, categories }) {
	const disabled = !categories.length;
	const [ selected, setSelected ] = useState([]);
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
			placeholder="Favorite Language"
			mode={'MULTI'}
			floatingPlaceholder
			onPress={() => toggleStatusBarStyle(false)}
			value={selected}
			enableModalBlur={false}
			onChange={(el) => {
				toggleStatusBarStyle(true);
				setSelected([ ...selected, el ]);
			}}
			topBarProps={{
				onCancel: () => {
					toggleStatusBarStyle(true);
				},
				title: 'Select categories'
			}}
			style={_s.search}
			showSearch
			searchPlaceholder={'Search a language'}
			searchStyle={{
				color: _c.dSkyblue,
				placeholderTextColor: _c.grey
			}}>
			{categories.map((option) => <Picker.Item key={option.value} value={option} />)}
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
