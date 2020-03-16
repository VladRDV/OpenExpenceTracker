import React, { Fragment, useState } from 'react';
import { Dialog, Text, Colors, View, TouchableOpacity } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import _c from '../../../../../../../../../uiConfig/colors';
import { scale } from 'react-native-size-matters';
export default function AddCategory ({ toggleStatusBarStyle }) {
	const [ dialogOn, toggleDialog ] = useState(false);
	const { width, height } = useDimensions().window;
	return (
		<Fragment>
			<TouchableOpacity
				onPress={() => {
					toggleStatusBarStyle();
					toggleDialog(!dialogOn);
				}}
				left
				centerV
				paddingH-s5
				style={{
					height: scale(60)
				}}>
				<Text allowFontScaling={false} style={{ color: _c.black, fontSize: scale(18) }}>
					Add category
				</Text>
			</TouchableOpacity>
			<Dialog useSafeArea height={height * 1.1} width={width} visible={dialogOn}>
				<View flex style={{ backgroundColor: _c.white }}>
					{/* <Text>AAAAA</Text> */}
				</View>
			</Dialog>
		</Fragment>
	);
}
