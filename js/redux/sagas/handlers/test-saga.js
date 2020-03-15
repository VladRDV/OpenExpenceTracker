import { takeEvery, put, call, select } from 'redux-saga/effects';
import { ADD_RECORD } from '../../actions/recordsStack/recordList_CRUD';
// import * as sel from '../selectors';

export default function* () {
	yield takeEvery(ADD_RECORD, handleTestAction);
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
