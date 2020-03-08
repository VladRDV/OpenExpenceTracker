import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DateTimePicker } from 'react-native-ui-lib';
export default class AddNewRecordScreen extends Component {
	render () {
		return (
			<View>
				<DateTimePicker
					mode={'date'}
					title={'Date'}
					placeholder={'Select time'}
					// timeFormat={'h:mm A'}
					// value={new Date('2015-03-25T12:00:00-06:30')}
				/>
				<Text children={'AddNewRecordScreen'} />
			</View>
		);
	}
}
