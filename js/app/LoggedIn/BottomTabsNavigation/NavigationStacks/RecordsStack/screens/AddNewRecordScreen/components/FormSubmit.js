import React from 'react';
import { Button } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

import _c from 'js/uiConfig/colors';

export default function FormSubmit ({ submitForm, disabled }) {
	return <Button disabled={disabled} backgroundColor={_c.blue} label="Save" style={_s.btnStyle} enableShadow onPress={submitForm} />;
}

const _s = StyleSheet.create({
	btnStyle: {
		width: '80%',
		alignSelf: 'center'
	}
});
