import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordListScreen from '../../../screens/RecordsStack/RecordListScreen/RecordListScreen';
import RedordDetailsScreen from '../../../screens/RecordsStack/RedordDetailsScreen';
import AddNewRecordScreen from '../../../screens/RecordsStack/AddNewRecordScreen';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import _c from '../../../../../uiConfig/colors';

export default function RecordsStack ({ navigation, route }) {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	console.log(route, 'fndkf');

	return (
		<Navigator>
			<Screen
				name="RecordListScreen"
				component={RecordListScreen}
				options={() => {
					return {
						title: 'Records list',
						headerTintColor: _c.red,
						headerRight: () => (
							<TouchableOpacity
								style={{ marginHorizontal: scale(8) }}
								onPress={() => navigation.navigate('AddNewRecordScreen')}
								children={<Ionicons size={scale(25)} name={'md-add'} color={_c.red} />}
							/>
						)
					};
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
