import React from 'react';
import { TextField } from 'react-native-ui-lib';

import _c from 'js/uiConfig/colors';

export default function TitleInput ({ statusBarState, inputState }) {
	const [ title, setTitle ] = inputState;
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	return (
		<TextField
			value={title}
			onChangeText={(e) => setTitle(e)}
			autoFocus
			key={'Title'}
			placeholder={'Title'}
			expandable
			onToggleExpandableModal={() => {
				toggleStatusBarStyle(!statusBarIsLight);
			}}
			floatingPlaceholder={true}
			maxLength={50}
		/>
	);
}
