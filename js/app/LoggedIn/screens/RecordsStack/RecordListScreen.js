import React from 'react';
// import { View, Text } from 'react-native';
import { View, Button } from 'react-native-ui-lib';

export default function RecordListScreen (props) {
	return (
		<View style={{ justifyContent: 'flex-end', flex: 1 }}>
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
