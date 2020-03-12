import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, StatusBar } from 'react-native';

export default function TopBarPaint ({ children, color, statusBarProps }) {
	const _bc = { backgroundColor: color };
	return (
		<SafeAreaView style={[ _s.sa, _bc ]}>
			<SafeAreaView style={[ _s.topSafeArea, _bc ]} />
			<SafeAreaView style={[ _s.sa, _bc ]}>
				<StatusBar {...statusBarProps} />
				{children}
			</SafeAreaView>
		</SafeAreaView>
	);
}
const _s = StyleSheet.create({
	topSafeArea: {
		flex: 0
	},
	sa: {
		flex: 1
	}
});
