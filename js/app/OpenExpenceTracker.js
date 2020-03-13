/**
 * this module is for setting up and handling global js driven variables,states/ and functions
 * ex. color theme 
 **/

import React from 'react';
import { testAction } from '../redux/actions/test_action';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInStack from './LoggedIn/navigators/LoggedInStack';
// import LoggedOutStack from './LoggedOut/navigators/LoggedOutStack';

const OpenExpenceTracker = () => <NavigationContainer children={createRootNavigation()} />;

function createRootNavigation () {
	// if (1) {
	return <LoggedInStack />;
	// } else {
	// 	return <LoggedOutStack />;
	// }
}

const mapStateToProps = ({ test_reducer }) => {
	return {
		test_state: test_reducer.test_state
	};
};
const mapDispatchToProps = (dispatch) => ({
	testAction: (data) => dispatch(testAction(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(OpenExpenceTracker);
