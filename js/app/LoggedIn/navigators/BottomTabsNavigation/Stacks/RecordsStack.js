import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordListScreen from '../../../screens/RecordsStack/RecordListScreen/RecordListScreen';
import RedordDetailsScreen from '../../../screens/RecordsStack/RedordDetailsScreen';
import AddNewRecordScreen from '../../../screens/RecordsStack/AddNewRecordScreen';
import { TouchableOpacity, StyleSheet, StatusBar, Fragment } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import _c from '../../../../../uiConfig/colors';
import { SafeAreaView } from 'react-native';

export default function RecordsStack ({ navigation, route }) {
	const Stack = createStackNavigator();
	const { Navigator, Screen } = Stack;
	return (
		<SafeAreaView style={styles.bottomSafeArea}>
			<SafeAreaView style={styles.topSafeArea} />
			<SafeAreaView style={styles.bottomSafeArea}>
				<StatusBar barStyle="light-content" />
				<Navigator>
					<Screen
						name="RecordListScreen"
						component={RecordListScreen}
						options={() => {
							return {
								title: 'Records list',
								headerTintColor: _c.red,
								safeAreaInsets: { top: 0 },
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
			</SafeAreaView>
		</SafeAreaView>
	);
}

// const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
// 	<View
// 		style={{
// 			height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
// 			backgroundColor: 'yellow'
// 		}}>
// 		<StatusBar translucent backgroundColor={'yellow'} {...props} />
// 	</View>
// );
const styles = StyleSheet.create({
	topSafeArea: {
		flex: 0,
		backgroundColor: 'tomato'
	},
	bottomSafeArea: {
		flex: 1,
		backgroundColor: 'tomato'
	}
});
