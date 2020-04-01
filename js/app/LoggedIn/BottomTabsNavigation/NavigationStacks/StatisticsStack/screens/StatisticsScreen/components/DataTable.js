import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { scale, ScaledSheet } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';

export default function LabelsTable () {
	return (
		<View style={_s.table}>
			{[ 0, 0, 0, 0, 0, 0, 0 ].map((el, ind) => (
				<View key={ind} style={_s.row}>
					<View style={_s.left}>
						<Text text70 children={'food'} />
						<View style={[ _s.circle, { backgroundColor: 'red' } ]} />
					</View>
					<View style={_s.right}>
						<Text text70 children={'234$'} />
					</View>
				</View>
			))}
			<View style={_s.row}>
				<View style={_s.left}>
					<Text text60 children={'Total:'} />
				</View>
				<View style={_s.right}>
					<Text text60 children={'9000$'} />
				</View>
			</View>
		</View>
	);
}

const _s = ScaledSheet.create({
	table: {
		borderColor: _c.grey,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderRightWidth: StyleSheet.hairlineWidth,
		justifyContent: 'flex-start',
		marginBottom: '10%'
	},
	row: {
		height: '36@vs',
		flexDirection: 'row',
		borderColor: _c.grey,
		borderBottomWidth: StyleSheet.hairlineWidth,
		paddingHorizontal: '3%'
	},
	right: {
		flex: 0.5,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	left: {
		flexDirection: 'row',
		flex: 0.5,
		borderColor: _c.grey,
		borderRightWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: '3%'
	},
	circle: {
		height: '20@s',
		width: '20@s',
		borderRadius: '50@s'
	}
});
