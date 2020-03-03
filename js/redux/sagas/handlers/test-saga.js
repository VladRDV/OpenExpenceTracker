import { takeEvery, put, call, select } from 'redux-saga/effects';
import { TEST_ACTION, testAction } from '../../actions/test_action';
// import * as sel from '../selectors';

export default function* () {
	yield takeEvery(TEST_ACTION, handleTestAction);
}
function* shout (params) {
	return console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
}
function* handleTestAction () {
	try {
		yield put(shout());
	} catch (error) {
		console.log(error);
	}
}
