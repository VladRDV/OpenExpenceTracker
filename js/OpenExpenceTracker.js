import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { testAction } from './redux/actions/test_action';
import { connect } from 'react-redux';

const OpenExpenceTracker = (props) => {
	props.testAction('RRRRRRRRRRRR');
	return (
		<View style={_s.oet}>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={_s.scrollView}>
					{/* <View style={_s.body}> */}
					<Text style={_s.sectionTitle}>Open Expence tracker</Text>
					<Text style={_s.sectionTitle}>{props.test_state}</Text>
					{/* </View> */}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

OpenExpenceTracker.propTypes = {
	test_state: PropTypes.string
};
const _s = StyleSheet.create({
	oet: { flex: 1 },
	body: {
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
