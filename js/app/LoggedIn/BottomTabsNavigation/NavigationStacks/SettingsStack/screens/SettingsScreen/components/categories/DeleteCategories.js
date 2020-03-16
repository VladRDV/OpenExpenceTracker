import React from 'react';
import { Picker, Text, Colors, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import _c from '../../../../../../../../../uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function DeleteCategories ({ toggleStatusBarStyle }) {
	return (
		<Picker
			renderPicker={() => (
				<View
					flex
					left
					centerV
					paddingH-s5
					style={{
						height: scale(60)
					}}>
					<Text allowFontScaling={false} style={{ color: _c.black, fontSize: scale(18) }}>
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
			{[ { value: 0, label: 'AAA' } ].map((option) => <Picker.Item key={option.value} value={option} />)}
		</Picker>
	);
}
