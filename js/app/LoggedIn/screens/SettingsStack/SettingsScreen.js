import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
// import { Alert } from 'react-native';

export default function SettingsScreen () {
	// const [ num, add ] = useState(0);
	// useEffect(() => {
	// 	console.log(`You clicked ${num} times`);
	// 	return () => console.log(`AAAAAAAAA`);
	// });
	return (
		<View>
			<Text children={'SettingsScreen'} />
			{/* <Text children={num} />
			<Button
				backgroundColor="#ffB650"
				label="add"
				labelStyle={{ fontWeight: '600' }}
				style={{ marginBottom: 10 }}
				enableShadow
				// ref={(element) => (this.button_1 = element)}
				onPress={() => add(num + 1)}
			/> */}
		</View>
	);
}
