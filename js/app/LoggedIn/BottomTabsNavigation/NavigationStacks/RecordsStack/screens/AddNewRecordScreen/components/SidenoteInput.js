import React from 'react';
import { TextField } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

import _c from 'js/uiConfig/colors';

export default function SidenoteInput ({ toggleStatusBarStyle, arr, select, toggle, statusBarIsLight }) {
	return (
		<TextField
			value={'dddd'}
			autoFocus
			onChange={(e) => console.log(e, 'OOOOOOOOOOO')}
			key={'Sidenote'}
			placeholder={'Sidenote'}
			transformer={(e) => console.log(e, 'ZZZZZZZZ')}
			expandable
			onToggleExpandableModal={() => toggleStatusBarStyle(!statusBarIsLight)}
			floatingPlaceholder={true}
			maxLength={50}
		/>
	);
}
