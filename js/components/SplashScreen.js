import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _c from '../uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function SplashScreen () {
	return (
		<View style={_s.container}>
			<Ionicons size={scale(100)} name={'logo-octocat'} color={_c.peach} />
		</View>
	);
}

const _s = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: _c.tomato
	}
});
