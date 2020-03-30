import { combineReducers } from 'redux';
import recordsStack from './reducers/recordsStack';
import settingsStack from './reducers/settingsStack';

export default combineReducers({
	recordsStack,
	settingsStack
});
