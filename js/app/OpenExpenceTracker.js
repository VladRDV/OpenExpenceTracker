/**
 * this module is for setting up and handling global js driven variables,states/ and functions
 * ex. color theme 
 **/

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { testAction } from '../redux/actions/test_action';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import LoggedInStack from './LoggedIn/navigators/LoggedOutStack';
import LoggedOutStack from './LoggedOut/navigators/LoggedOutStack';

const OpenExpenceTracker = (props) => {
	return <NavigationContainer>{createRootNavigation()}</NavigationContainer>;
};

function createRootNavigation () {
	if (1) {
		return <LoggedInStack />;
	} else {
		return <LoggedOutStack />;
	}
}

OpenExpenceTracker.propTypes = {
	test_state: PropTypes.string
};

const _s = StyleSheet.create({
	oet: { flex: 1 }
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
