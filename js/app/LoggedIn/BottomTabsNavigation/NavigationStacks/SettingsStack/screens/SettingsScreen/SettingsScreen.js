import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import _c from '../../../../../../../uiConfig/colors';

export default function SettingsScreen () {
	return (
		<ScrollView>
			<View flex>
				<Text center color={_c.jogurt} marginV-20 uppercase style={{ fontWeight: '500' }} children={'Categories'} />
				<Button
					fullWidth
					backgroundColor="transparent"
					borderRadius={0}
					label="Add category"
					labelStyle={{ color: _c.black }}
					style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
					enableShadow
					// ref={(element) => (this.button_1 = element)}
					// onPress={() => add(num + 1)}
				/>
				<Button
					fullWidth
					backgroundColor="transparent"
					borderRadius={0}
					label="Delete category"
					labelStyle={{ color: _c.black }}
					style={{ borderBottomWidth: StyleSheet.hairlineWidth, justifyContent: 'flex-start' }}
					enableShadow
					// ref={(element) => (this.button_1 = element)}
					// onPress={() => add(num + 1)}
				/>
				<Text children={'Currency'} />
				<Button
					fullWidth
					backgroundColor="transparent"
					borderRadius={0}
					label="Select default currency"
					labelStyle={{ color: _c.black }}
					style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
					enableShadow
					// ref={(element) => (this.button_1 = element)}
					// onPress={() => add(num + 1)}
				/>
				{/* <Text children={num} />
			 */}
			</View>
		</ScrollView>
	);
}
