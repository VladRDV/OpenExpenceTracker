import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordListScreen from '../../../screens/RecordsStack/RecordListScreen/RecordListScreen';
import RedordDetailsScreen from '../../../screens/RecordsStack/RedordDetailsScreen';
import AddNewRecordScreen from '../../../screens/RecordsStack/AddNewRecordScreen';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

export default function AddStack ({ navigation, route }) {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<Navigator>
			<Screen
				name="RecordListScreen"
				component={RecordListScreen}
				options={{
					title: 'Records list',
					headerTintColor: 'blue',
					headerRight: () => (
						<TouchableOpacity
							style={{ marginHorizontal: scale(8) }}
							onPress={() => navigation.navigate('AddNewRecordScreen')}
							children={<Ionicons size={scale(25)} name={'md-add'} color={'blue'} />}
							color="blue"
						/>
					)
				}}
			/>
			<Screen
				name="RecordDetailsScreen"
				component={RedordDetailsScreen}
				options={{
					title: 'Records details'
				}}
			/>
			<Screen
				name="AddNewRecordScreen"
				component={AddNewRecordScreen}
				options={{
					header: () => null
				}}
			/>
		</Navigator>
	);
}
