import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import _c from 'js/uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function SectionTitle ({ txt }) {
	return (
		<View center margin-0 style={{ height: scale(55), backgroundColor: _c.lGrey }}>
			<Text center color={_c.jogurt} marginV-20 uppercase children={txt} />
		</View>
	);
}
