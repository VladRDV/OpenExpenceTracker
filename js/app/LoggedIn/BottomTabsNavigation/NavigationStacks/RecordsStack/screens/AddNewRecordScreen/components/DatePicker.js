import React from 'react';
import { DateTimePicker } from 'react-native-ui-lib';

export default function DatePicker ({ inputState }) {
	const [ date, setDate ] = inputState;
	return <DateTimePicker mode={'date'} title={'Date'} onChange={(e) => setDate(e)} placeholder={'Select date'} timeFormat={'DD/MM/YYYY'} value={date} />;
}
