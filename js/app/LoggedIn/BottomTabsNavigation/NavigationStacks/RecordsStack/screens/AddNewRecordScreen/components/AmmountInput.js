import React from 'react';
import { TextField } from 'react-native-ui-lib';

export default function AmmountInput ({ statusBarState, inputState }) {
	const [ ammount, setAmmount ] = inputState;
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	return (
		<TextField
			value={ammount}
			onChangeText={(txt) => setAmmount(txt)}
			key={'Ammount'}
			title={'Ammount*'}
			placeholder={'Type the ammount'}
			expandable
			onToggleExpandableModal={() => toggleStatusBarStyle(!statusBarIsLight)}
			maxLength={6}
		/>
	);
}
