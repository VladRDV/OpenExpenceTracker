import React, { Fragment, useState, useCallback } from 'react';
import { Dialog, Text, View, TouchableOpacity } from 'react-native-ui-lib';
import { TextInput, Alert } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCategory ({ toggleStatusBarStyle, addCategory, categories }) {
	const [ txtVal, setTxtVal ] = useState('');
	const [ dialogOn, toggleDialog ] = useState(false);
	const { width, height } = useDimensions().window;
	const handleSave = useCallback(
		() => {
			if (categories.includes(txtVal)) {
				Alert.alert('Open Expence Tracker', 'Provided category already exists');
			} else {
				toggleDialog(!dialogOn);
				toggleStatusBarStyle(true);
				addCategory(txtVal);
			}
		},
		[ txtVal ]
	);
	const handleDialogCall = useCallback(
		() => {
			toggleStatusBarStyle(false);
			toggleDialog(!dialogOn);
		},
		[ dialogOn ]
	);
	const handleCancel = useCallback(
		() => {
			toggleDialog(!dialogOn);
			toggleStatusBarStyle(true);
		},
		[ dialogOn, txtVal ]
	);
	return (
		<Fragment>
			<TouchableOpacity onPress={handleDialogCall} left centerV paddingH-s5 style={_s.btn}>
				<Text allowFontScaling={false} style={_s.triggerTxt}>
					Add category
				</Text>
			</TouchableOpacity>
			<Dialog overlayBackgroundColor={'transparent'} height={height} width={width} visible={dialogOn}>
				<View flex style={_s.dialog}>
					<SafeAreaView flex>
						<View center style={_s.header}>
							<TouchableOpacity onPress={handleCancel}>
								<Text text70 style={_s.btnTxt}>
									Cancel
								</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleSave}>
								<Text text70 style={_s.btnTxt}>
									Save
								</Text>
							</TouchableOpacity>
						</View>
						<View style={_s.inputContainer}>
							<TextInput
								autoFocus
								maxLength={30}
								placeholder={'Type the name of the category'}
								value={txtVal}
								onChangeText={(text) => setTxtVal(text)}
								placeholderTextColor={_c.grey}
								returnKeyType="done"
								multiline={false}
								style={_s.input}
								allowFontScaling={false}
								blurOnSubmit
							/>
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
	triggerTxt: {
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
		justifyContent: 'flex-start'
	},
	input: {
		paddingHorizontal: '3%',
		textAlign: 'left',
		textAlignVertical: 'top',
		color: _c.black,
		fontSize: '20@msr'
	},
	btnTxt: { color: _c.dSkyblue }
});
