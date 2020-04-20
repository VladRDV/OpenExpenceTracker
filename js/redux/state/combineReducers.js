import { combineReducers } from 'redux';
import recordsStack from './reducers/recordsStack';
import settingsStack from './reducers/settingsStack';
import statisticsStack from './reducers/statisticsStack';

export default combineReducers({
	recordsStack,
	settingsStack,
	statisticsStack
});
