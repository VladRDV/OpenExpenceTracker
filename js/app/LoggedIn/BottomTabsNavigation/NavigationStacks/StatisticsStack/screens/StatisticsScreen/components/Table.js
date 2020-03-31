import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';

export default function Table () {
	return (
		<View style={_s.container}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: '6%' }}>
				<View flex>
					<Text>0001</Text>
					<Text>0002</Text>
					<Text>0003</Text>
					<Text>0004</Text>
					<Text>0005</Text>
					<Text>0006</Text>
					<Text>0007</Text>
					<Text>0008</Text>
					<Text>0009</Text>
					<Text>0010</Text>
					<Text>0011</Text>
					<Text>0012</Text>
					<Text>0013</Text>
					<Text>0014</Text>
					<Text>0015</Text>
					<Text>0016</Text>
					<Text>0017</Text>
					<Text>0018</Text>
					<Text>0019</Text>
					<Text>0020</Text>
					<Text>0021</Text>
					<Text>0022</Text>
					<Text>0023</Text>
					<Text>0024</Text>
					<Text>0025</Text>
					<Text>0026</Text>
					<Text>0027</Text>
					<Text>0028</Text>
					<Text>0029</Text>
					<Text>0030</Text>
					<Text>0031</Text>
					<Text>0032</Text>
					<Text>0033</Text>
					<Text>0034</Text>
					<Text>0035</Text>
					<Text>0036</Text>
					<Text>0037</Text>
					<Text>0038</Text>
					<Text>0039</Text>
					<Text>0040</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 0.46
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
