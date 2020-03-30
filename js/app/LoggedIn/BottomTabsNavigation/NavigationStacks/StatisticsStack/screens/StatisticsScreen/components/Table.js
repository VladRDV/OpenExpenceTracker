import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';

export default function Table () {
	return (
		<View style={_s.container}>
			<Text>fdsfijaf</Text>
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1
		// backgroundColor: 'red'
	},
	filter: {
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: scale(0.5),
		borderColor: 'lightgrey',
		backgroundColor: 'white'
	},
	list: {
		flex: 0.92
	}
});
