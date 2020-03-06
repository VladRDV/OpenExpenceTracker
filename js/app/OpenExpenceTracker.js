/**
 * this module is for setting up and handling global js driven variables,states/ and functions
 * ex. color theme 
 **/
import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Alert } from 'react-native';
import { testAction } from '../redux/actions/test_action';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';

const OpenExpenceTracker = (props) => {
	// props.testAction('RRRRRRRRRRRR');
	// Alert.alert('fdfd', 'tttt', [
	// 	{
	// 		text: 'fdfdfd',
	// 		onPress: () => props.testAction('FFFFFFFFFFFFFF')
	// 	}
	// ]);
	return (
		<NavigationContainer>
			{/* <SafeAreaView style={_s.body}>
			<View style={{ backgroundColor: 'tomato', flex: 1 }}>
				<Text style={_s.sectionTitle}>Open Expence tracker</Text>
				<Text style={_s.sectionTitle}>{props.test_state}</Text>
			</View>
		</SafeAreaView> */}
			{makeBottomTabs()}
		</NavigationContainer>
	);
};
OpenExpenceTracker.propTypes = {
	test_state: PropTypes.string
};
function makeBottomTabs () {
	const BottomTabs = createMaterialBottomTabNavigator();
	const { Navigator, Screen } = BottomTabs;
	return (
		<Navigator>
			<Screen
				name="Tab 1"
				component={Screen1}
				options={{
					tabBarLabel: 'Screen1',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-home'} />
				}}
			/>
			<Screen
				name="Tab 2"
				component={Screen2}
				options={{
					tabBarLabel: 'Screen2',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-list'} />
				}}
			/>
			<Screen
				name="Tab 3"
				component={Screen3}
				options={{
					tabBarLabel: 'Screen3',
					tabBarIcon: () => <Icon style={[ { color: 'white' } ]} size={25} name={'ios-settings'} />
				}}
			/>
		</Navigator>
	);
}
const _s = StyleSheet.create({
	oet: { flex: 1 },
	sv: {
		flex: 1,
		minHeight: '100%',
		backgroundColor: 'blue'
	},
	body: {
		flex: 1,
		backgroundColor: 'red'
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: 'black'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: 'black'
	},
	highlight: {
		fontWeight: '700'
	},
	footer: {
		color: 'black',
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right'
	}
});
const mapStateToProps = ({ test_reducer }) => {
	return {
		test_state: test_reducer.test_state
	};
};
const mapDispatchToProps = (dispatch) => ({
	testAction: (data) => dispatch(testAction(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(OpenExpenceTracker);
