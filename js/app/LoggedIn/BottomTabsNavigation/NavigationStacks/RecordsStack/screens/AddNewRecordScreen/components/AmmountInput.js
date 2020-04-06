import React from 'react';
import { TextField } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

import _c from 'js/uiConfig/colors';

export default function AmmountInput ({ toggleStatusBarStyle, arr, select, toggle, statusBarIsLight }) {
	return (
		<TextField
			key={'Ammount'}
			title={'Ammount*'}
			placeholder={'Type the ammount'}
			expandable
			// floatingPlaceholder={true}
			onToggleExpandableModal={() => toggleStatusBarStyle(!statusBarIsLight)}
			maxLength={50}
		/>
	);
}
