import React, { useCallback } from 'react';
import { Picker, Text, Colors, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SetDefaultCurrency ({ toggleStatusBarStyle, currencies, defaultCurrency, setDefaultCurrency }) {
	let renderOptions = useCallback(
		() => {
			let arr = [];
			for (let x in currencies) {
				arr.push(
					<Picker.Item
						key={currencies[x]}
						value={{
							value: x,
							label: currencies[x]
						}}
					/>
				);
			}
			return arr;
		},
		[ currencies ]
	);
	const setPickerLabelTxt = useCallback(() => (defaultCurrency.value ? `Set default currency (${defaultCurrency.value})` : 'Set default currency'), [
		defaultCurrency
	]);
	return (
		<Picker
			renderPicker={() => (
				<View flex left centerV paddingH-s5 style={_s.pickerLabel}>
					<Text ellipsizeMode={'tail'} allowFontScaling={false} style={_s.pickerLabelTxt}>
						{setPickerLabelTxt()}
					</Text>
				</View>
			)}
			placeholder="Search currency"
			mode={'SINGLE'}
			floatingPlaceholder
			onPress={() => toggleStatusBarStyle(false)}
			value={defaultCurrency}
			enableModalBlur={false}
			onChange={(e) => {
				toggleStatusBarStyle(true);
				setDefaultCurrency(e);
			}}
			topBarProps={{
				title: 'Select currency',
				onCancel: () => {
					toggleStatusBarStyle(true);
				}
			}}
			style={{ color: Colors.red20 }}
			showSearch
			searchPlaceholder={'Search a language'}
			searchStyle={{ color: Colors.blue30, placeholderTextColor: Colors.dark50 }}>
			{renderOptions()}
			<SafeAreaView style={_s.bottomOffset} />
		</Picker>
	);
}
const _s = ScaledSheet.create({
	pickerLabel: {
		backgroundColor: 'transparent',
		height: '55@s'
	},
	pickerLabelTxt: {
		color: _c.black,
		fontSize: '18@s'
	},
	bottomOffset: { height: '25@s' }
});
