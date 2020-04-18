import React, { Fragment, useState, useCallback } from 'react';
import { Modal, Text, View, TouchableOpacity, RadioGroup, RadioButton } from 'react-native-ui-lib';
import { TextInput, Alert } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import _c from 'js/uiConfig/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCategory ({ toggleStatusBarStyle, addCategory, categories }) {
	const [ name, setName ] = useState('');
	const [ dialogOn, toggleDialog ] = useState(false);
	const { width, height } = useDimensions().window;
	const [ type, setType ] = useState(true);
	const handleSave = useCallback(
		() => {
			if (categories.includes(name)) {
				Alert.alert('Open Expence Tracker', 'Provided category already exists');
			} else {
				toggleDialog(!dialogOn);
				toggleStatusBarStyle(true);
				addCategory({
					name,
					type
				});
			}
		},
		[ name ]
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
		[ dialogOn, name ]
	);
	return (
		<Fragment>
			<TouchableOpacity onPress={handleDialogCall} left centerV paddingH-s5 style={_s.btn}>
				<Text allowFontScaling={false} style={_s.triggerTxt}>
					Add category
				</Text>
			</TouchableOpacity>
			<Modal overlayBackgroundColor={'transparent'} height={height} width={width} visible={dialogOn}>
				<View style={_s.dialog}>
					<SafeAreaView style={_s.safeAreaView}>
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
						<RadioGroup
							value={type}
							onValueChange={(x) => setType(x)}
							initialValue={type}
							style={[ _s.header, { justifyContent: 'space-around' } ]}>
							<RadioButton color={_c.green} labelStyle={{ color: _c.green }} value={'inc'} label={'Income'} />
							<RadioButton color={_c.red} labelStyle={{ color: _c.red }} value={'exp'} label={'Expence'} />
						</RadioGroup>
						<View style={_s.inputContainer}>
							<TextInput
								autoFocus
								maxLength={30}
								placeholder={'Type the name of the category'}
								value={name}
								onChangeText={(text) => setName(text)}
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
			</Modal>
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
		flex: 1,
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
		marginTop: '5%',
		minWidth: '100%',
		paddingHorizontal: '3%',
		textAlign: 'left',
		textAlignVertical: 'top',
		color: _c.black,
		fontSize: '20@msr'
	},
	safeAreaView: { flex: 1 },
	btnTxt: { color: _c.dSkyblue }
});
