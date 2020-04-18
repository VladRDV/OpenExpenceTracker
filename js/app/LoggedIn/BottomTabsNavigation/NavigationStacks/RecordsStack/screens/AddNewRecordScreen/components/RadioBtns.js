import React from 'react';
import { StyleSheet } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';

export default function RadioBtns ({ value, onChange }) {
	return (
		<RadioGroup value={value} onValueChange={onChange} initialValue={value} style={_s.filter}>
			<RadioButton color={_c.green} labelStyle={{ color: _c.green }} value={'inc'} label={'Income'} />
			<RadioButton color={_c.red} labelStyle={{ color: _c.red }} value={'exp'} label={'Expence'} />
		</RadioGroup>
	);
}

const _s = StyleSheet.create({
	filter: {
		height: '8%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: _c.lGrey,
		backgroundColor: _c.white
	}
});
