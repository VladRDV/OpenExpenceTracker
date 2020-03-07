import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'nachos-ui';

export default class StatisticsScreen extends Component {
	render () {
		return (
			<View>
				<Text children={'StatisticsScreen'} />
				{/* <Button onPress={props.navigation.navigate('RecordDetailsScreen')} type="danger">
					RecordDetailsScreen
				</Button> */}
			</View>
		);
	}
}
