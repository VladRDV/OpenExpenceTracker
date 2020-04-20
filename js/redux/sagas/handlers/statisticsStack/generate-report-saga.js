import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_RECORD } from 'js/redux/actions/recordsStack/recordList_CRUD';
import * as moment from 'moment';
import {
	updateDayIncomeReport,
	updateWeekIncomeReport,
	updateMonthIncomeReport,
	updateDayExpenceReport,
	updateWeekExpenceReport,
	updateMonthExpenceReport
} from 'js/redux/actions/statisticsStack/generateReport.js';

export default function* () {
	yield takeEvery(ADD_RECORD, handleUpdateReport);
}

function getCurrencies (opt, url) {
	return axios({ ...opt, url }).then(checkStatus);
}

function* handleUpdateReport ({ data }) {
	const listUrl = `https://openexchangerates.org/api/currencies.json`;
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};

	try {
		const response = yield call(getCurrencies, options, listUrl);
		yield put(getCurrencies_S(response.data));
	} catch (error) {
		yield put(getCurrencies_E(error));
	}
}
