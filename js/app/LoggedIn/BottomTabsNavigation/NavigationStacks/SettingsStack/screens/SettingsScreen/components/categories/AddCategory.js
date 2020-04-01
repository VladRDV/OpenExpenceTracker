import React, { Fragment, useState } from 'react';
import { Dialog, Text, View, TouchableOpacity } from 'react-native-ui-lib';
import { useDimensions } from '@react-native-community/hooks';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCategory ({ toggleStatusBarStyle }) {
	const [ dialogOn, toggleDialog ] = useState(false);
	const { width, height } = useDimensions().window;
	return (
		<Fragment>
			<TouchableOpacity
				onPress={() => {
					toggleStatusBarStyle(false);
					toggleDialog(!dialogOn);
				}}
				left
				centerV
				paddingH-s5
				style={_s.btn}>
				<Text allowFontScaling={false} style={_s.btnTxt}>
					Add category
				</Text>
			</TouchableOpacity>
			<Dialog overlayBackgroundColor={'transparent'} height={height} width={width} visible={dialogOn}>
				<View flex style={_s.dialog}>
					<SafeAreaView flex>
						<View center style={_s.header}>
							<TouchableOpacity
								onPress={() => {
									toggleDialog(!dialogOn);
									toggleStatusBarStyle(true);
								}}>
								<Text text70 style={{ color: _c.dSkyblue }}>
									Cancel
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									toggleDialog(!dialogOn);
									toggleStatusBarStyle(true);
								}}>
								<Text text70 style={{ color: _c.dSkyblue }}>
									Save
								</Text>
							</TouchableOpacity>
						</View>
						<View center style={_s.title}>
							<Text style={_s.titleTxt}>Type category name</Text>
						</View>
						<View style={_s.inputContainer}>
							<Text>lkfghdsliug</Text>
						</View>
					</SafeAreaView>
				</View>
			</Dialog>
		</Fragment>
	);
}

const _s = ScaledSheet.create({
	btn: {
		height: '60@s'
	},
	btnTxt: {
		color: _c.black,
		fontSize: '18@s'
	},
	search: {
		color: _c.grey
	},
	dialog: {
		backgroundColor: _c.white
	},
	header: {
		flexDirection: 'row',
		minWidth: '100%',
		height: '60@s',
		backgroundColor: _c.white,
		justifyContent: 'space-between',
		paddingHorizontal: '8@s'
	},
	title: {
		minWidth: '100%',
		height: '60@s',
		backgroundColor: _c.white
	},
	titleTxt: {
		color: _c.black,
		fontSize: '18@s'
	},
	inputContainer: {
		flex: 1,
		backgroundColor: 'tomato'
	}
});
