import React, { useState } from 'react';
import { DateTimePicker } from 'react-native-ui-lib';

export default function DatePicker ({ setDate, date }) {
	const dateObj = new Date();
	return (
		<DateTimePicker
			mode={'date'}
			title={'Date*'}
			onChange={(e) => setDate(e)}
			placeholder={'Select date'}
			timeFormat={'DD/MM/YYYY'}
			value={date}
			maximumDate={dateObj}
		/>
	);
}
