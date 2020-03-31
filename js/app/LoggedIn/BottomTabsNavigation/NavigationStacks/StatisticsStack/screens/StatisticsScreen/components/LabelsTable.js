import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { scale, ScaledSheet } from 'react-native-size-matters';
import _c from 'js/uiConfig/colors';

export default function LabelsTable () {
	return (
		<View style={_s.table}>
			{[ 0, 0, 0 ].map(() => (
				<View style={_s.row}>
					<View style={_s.circleCell}>
						<View style={_s.circle} />
					</View>
					<View style={_s.txtCell}>
						<Text children={'food'} />
					</View>
				</View>
			))}
		</View>
	);
}

const _s = ScaledSheet.create({
	table: {
		borderTopWidth: StyleSheet.hairlineWidth,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderRightWidth: StyleSheet.hairlineWidth,
		justifyContent: 'flex-start',
		marginBottom: '10%'
	},
	row: {
		height: '36@vs',
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth,
		paddingRight: '3%'
	},
	txtCell: {
		flex: 0.85,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	circleCell: {
		flex: 0.15,
		borderRightWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center'
	},
	circle: {
		height: '20@s',
		width: '20@s',
		borderRadius: '50@s',
		backgroundColor: 'blue'
	}
});
