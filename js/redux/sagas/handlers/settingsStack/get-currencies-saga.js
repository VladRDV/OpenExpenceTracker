import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getCurrencies_E, getCurrencies_S, GET_CURRENCIES_A } from '../../../actions/settingsStack/getCurrencies';
import axios from 'axios';

export default function* () {
	yield takeEvery(GET_CURRENCIES_A, handleGetCurrencies);
}

function checkStatus (response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		var err = new Error(response.statusText);
		err.response = response;
		throw err;
	}
}

function getCurrencies (opt, url) {
	return axios({ ...opt, url }).then(checkStatus);
}

function* handleGetCurrencies ({ data }) {
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
