import { TEST_ACTION } from '../../actions/test_action';
const defaultState = {
	test_state: ''
};
const test_reducer = (state = defaultState, action) => {
	switch (action.type) {
		case TEST_ACTION: {
			return {
				test_state: action.data
			};
		}
		default:
			return state;
	}
};

export default test_reducer;
