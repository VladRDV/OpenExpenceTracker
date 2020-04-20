import React from 'react';
import { TextField } from 'react-native-ui-lib';

export default function AmmountInput ({ statusBarState, inputState, defaultCurrency }) {
	const [ ammount, setAmmount ] = inputState;
	const [ statusBarIsLight, toggleStatusBarStyle ] = statusBarState;
	const handleTxtChange = (txt) => setAmmount(`${txt} ${defaultCurrency.value}`);
	const handleModalToggle = (x) => {
		toggleStatusBarStyle(!statusBarIsLight);
	};
	return (
		<TextField
			value={ammount}
			onChangeText={handleTxtChange}
			key={'Ammount'}
			title={'Ammount'}
			placeholder={'Type the ammount'}
			expandable
			keyboardType={'number-pad'}
			onToggleExpandableModal={handleModalToggle}
			maxLength={12}
		/>
	);
}
