import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import _c from '../../../../../../../../uiConfig/colors';

export default function Divider () {
	return <View style={_s.divider} />;
}

const _s = StyleSheet.create({
	divider: {
		width: '96%',
		alignSelf: 'center',
		borderBottomWidth: StyleSheet.hairlineWidth,
		backgroundColor: 'transparent',
		height: 0,
		borderBottomColor: _c.black
	}
});
