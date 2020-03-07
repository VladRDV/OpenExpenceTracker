import React from 'react';
// import { View, Text } from 'react-native';
import { Text, View, Button } from 'react-native-ui-lib';

export default function RecordListScreen (props) {
	return (
		<View>
			<Text children={'Records'} />
			<Button
				backgroundColor="#30B650"
				label="RecordDetailsScreen"
				labelStyle={{ fontWeight: '600' }}
				style={{ marginBottom: 10 }}
				enableShadow
				ref={(element) => (this.button_1 = element)}
				onPress={() => props.navigation.navigate('RecordDetailsScreen')}
			/>
		</View>
	);
}
