import { GET_CURRENCIES_A, GET_CURRENCIES_R, GET_CURRENCIES_E, GET_CURRENCIES_S } from '../../actions/settingsStack/getCurrencies';

const defaultState = {
	currencies: [],
	getCurrencies_A: false,
	getCurrencies_S: false,
	getCurrencies_E: false
};

const recordsStack = (state = defaultState, action) => {
	switch (action.type) {
		case GET_CURRENCIES_A: {
			return {
				...state,
				getCurrencies_A: true,
				getCurrencies_S: false,
				getCurrencies_E: false
			};
		}

		case GET_CURRENCIES_S: {
			return {
				...state,
				getCurrencies_A: false,
				getCurrencies_S: true,
				getCurrencies_E: false,
				currencies: action.data
			};
		}

		case GET_CURRENCIES_E: {
			return {
				...state,
				getCurrencies_A: false,
				getCurrencies_S: false,
				getCurrencies_E: action.data
			};
		}

		case GET_CURRENCIES_R: {
			return {
				...state,
				getCurrencies_A: false,
				getCurrencies_S: false,
				getCurrencies_E: false
			};
		}

		default:
			return state;
	}
};

export default recordsStack;
