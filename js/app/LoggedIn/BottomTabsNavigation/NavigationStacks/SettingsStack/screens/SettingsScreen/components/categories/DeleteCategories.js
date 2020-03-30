import React from 'react';
import { Picker, Text, View } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';

export default function DeleteCategories ({ toggleStatusBarStyle }) {
	return (
		<Picker
			renderPicker={() => (
				<View flex left centerV paddingH-s5 style={_s.btn}>
					<Text allowFontScaling={false} style={_s.btnTxt}>
						Delete categories
					</Text>
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
				title: 'Select categories',
				cancelButtonProps: {
					disabled: true,
					iconSource: null
				}
			}}
			style={_s.search}
			showSearch
			searchPlaceholder={'Search a language'}
			searchStyle={{
				color: _c.dSkyblue,
				placeholderTextColor: _c.grey
			}}>
			<Picker.Item key={'---'} value={{ label: '--- All ---', value: '----' }} />
			{[ { value: 0, label: 'AAA' } ].map((option) => <Picker.Item key={option.value} value={option} />)}
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
