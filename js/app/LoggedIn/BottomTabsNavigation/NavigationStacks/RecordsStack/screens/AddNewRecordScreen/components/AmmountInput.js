import React from 'react';
import { TextField } from 'react-native-ui-lib';

export default function AmmountInput ({ statusBarState, inputState, defaultCurrency }) {
	const [ ammount, setAmmount ] = inputState;
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	return (
		<TextField
			value={ammount}
			onChangeText={(txt) => (txt.length < 8 ? setAmmount(txt) : null)}
			key={'Ammount'}
			title={'Ammount*'}
			placeholder={'Type the ammount'}
			expandable
			onToggleExpandableModal={(x) => {
				console.log(x, 'x');
				toggleStatusBarStyle(!statusBarIsLight);
			}}
			maxLength={20}
		/>
	);
}
