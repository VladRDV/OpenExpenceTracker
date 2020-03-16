import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';
import _c from '../../../../../../../../uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function SectionTitle ({ txt }) {
	return (
		<View center margin-0 centerV={{ height: scale(20) }}>
			<Text center color={_c.jogurt} marginV-20 uppercase children={txt} />
		</View>
	);
}
