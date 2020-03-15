import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordListScreen from '../../../screens/RecordsStack/RecordListScreen/RecordListScreen';
import RedordDetailsScreen from '../../../screens/RecordsStack/RedordDetailsScreen';
import AddNewRecordScreen from '../../../screens/RecordsStack/AddNewRecordScreen/AddNewRecordScreen';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
import _c from '../../../../../uiConfig/colors';
import TopBarPaint from '../components/TopBarPaint';

export default function RecordsStack ({ navigation, route }) {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<TopBarPaint
			color={_c.tomato}
			statusBarProps={{
				barStyle: 'light-content'
			}}>
			<Navigator
				screenOptions={{
					safeAreaInsets: { top: 0 },
					headerStyle: {
						height: scale(50)
					}
				}}>
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
					options={() => {
						return {
							title: 'Records details',
							headerTintColor: _c.red,
							headerRight: () => (
								<TouchableOpacity
									style={{ marginHorizontal: scale(8) }}
									onPress={navigation.goBack}
									children={<Ionicons size={scale(25)} name={'md-add'} color={_c.red} />}
								/>
							)
						};
					}}
				/>
				<Screen
					name="AddNewRecordScreen"
					component={AddNewRecordScreen}
					options={() => {
						return {
							title: 'Create new record',
							headerTintColor: _c.red,
							headerLeft: () => (
								<TouchableOpacity
									// style={{ marginHorizontal: scale(8) }}
									onPress={() => navigation.push('RecordListScreen')}
									children={<MaterialIcons size={scale(40)} name={'chevron-left'} color={_c.red} />}
								/>
							),
							headerRight: () => null
						};
					}}
				/>
			</Navigator>
		</TopBarPaint>
	);
}
