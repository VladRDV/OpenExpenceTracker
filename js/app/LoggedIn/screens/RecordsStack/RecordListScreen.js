import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
const btnStyle = { margin: 15 };

export default function RecordListScreen (props) {
	return (
		<View>
			<Text children={'Records'} />
			<Button title={'RecordDetailsScreen'} onPress={() => props.navigation.navigate('RecordDetailsScreen')} style={btnStyle} type="danger" />
		</View>
	);
}
