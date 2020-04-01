import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

export default function TableGradient (props) {
	return (
		<View pointerEvents="none" style={[ StyleSheet.absoluteFill, _s.contaiter ]}>
			<Svg width={'100%'} height={'100%'} {...props}>
				<Defs>
					<LinearGradient id="prefix__a" x1="0%" y1="0%" x2="0%" y2="100%">
						<Stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity={'1'} />
						<Stop offset="10%" stopColor="rgb(255,255,255)" stopOpacity={'0.7'} />
						<Stop offset="20%" stopColor="rgb(255,255,255)" stopOpacity={'0'} />
					</LinearGradient>
				</Defs>
				<Rect x="0" y="0" width="100%" height="100%" fill="url(#prefix__a)" />
			</Svg>
		</View>
	);
}
const _s = StyleSheet.create({
	contaiter: {
		flex: 1,
		zIndex: 1,
		minHeight: '100%',
		minWidth: '100%'
	}
});
