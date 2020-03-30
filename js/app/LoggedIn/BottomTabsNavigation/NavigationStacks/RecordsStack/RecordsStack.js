import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RecordListScreen from './screens/RecordListScreen/RecordListScreen';
import RedordDetailsScreen from './screens/RedordDetailsScreen';
import AddNewRecordScreen from './screens/AddNewRecordScreen/AddNewRecordScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';

import _c from 'js/uiConfig/colors';
import StatusBarPaint from '../../components/StatusBarPaint';

export default function RecordsStack ({ navigation, route }) {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<StatusBarPaint
			color={_c.gold}
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
							headerTintColor: _c.black,
							headerRight: () => (
								<TouchableOpacity
									style={{ marginHorizontal: scale(8) }}
									onPress={() => navigation.navigate('AddNewRecordScreen')}
									children={<Ionicons size={scale(25)} name={'md-add'} color={_c.gold} />}
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
							headerTintColor: _c.black,
							headerRight: () => (
								<TouchableOpacity
									style={{ marginHorizontal: scale(8) }}
									onPress={navigation.goBack}
									children={<Ionicons size={scale(25)} name={'md-add'} color={_c.dSkyblue} />}
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
							headerTintColor: _c.black,
							headerLeft: () => (
								<TouchableOpacity
									// style={{ marginHorizontal: scale(8) }}
									onPress={() => navigation.navigate('RecordListScreen')}
									children={<MaterialIcons size={scale(40)} name={'chevron-left'} color={_c.gold} />}
								/>
							),
							headerRight: () => null
						};
					}}
				/>
			</Navigator>
		</StatusBarPaint>
	);
}
