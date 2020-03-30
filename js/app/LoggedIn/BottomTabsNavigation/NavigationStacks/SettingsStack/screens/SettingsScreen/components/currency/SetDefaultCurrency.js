import React, { useCallback } from 'react';
import { Picker, Text, Colors, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import _c from 'js/uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function SetDefaultCurrency ({ toggleStatusBarStyle, currencies }) {
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

	return (
		<Picker
			renderPicker={() => (
				<View
					flex
					left
					centerV
					paddingH-s5
					style={{
						backgroundColor: 'transparent',
						height: scale(55)
					}}>
					<Text allowFontScaling={false} style={{ color: _c.black, fontSize: scale(18) }}>
						Set default currency
					</Text>
				</View>
			)}
			placeholder="Search currency"
			mode={'SINGLE'}
			floatingPlaceholder
			onPress={toggleStatusBarStyle}
			// value={language}
			enableModalBlur={false}
			onChange={toggleStatusBarStyle}
			topBarProps={{
				title: 'Select currency',
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
			{renderOptions()}
		</Picker>
	);
}
