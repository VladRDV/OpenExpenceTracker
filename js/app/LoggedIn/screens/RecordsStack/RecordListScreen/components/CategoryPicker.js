import React from 'react';
import { Dialog, Text } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

export default function CategoryPicker ({ visible, arr, select, toggle }) {
	return (
		<Dialog visible={visible} useSafeArea heipanDirection={'down'} onDismiss={() => toggle(false)} height={scale(100)}>
			<Text>ifdlhsgoiudfghd</Text>
		</Dialog>
	);
}
