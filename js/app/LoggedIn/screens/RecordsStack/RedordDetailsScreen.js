import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
const btnStyle = { margin: 15 };

export default function RecordDetailsScreen (props) {
	return (
		<View>
			<Text children={'Records'} />
			<Button title={'RecordListScreen'} onPress={() => props.navigation.navigate('RecordListScreen')} style={btnStyle} type="success" />
		</View>
	);
}
