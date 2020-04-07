import { GET_CURRENCIES_A, GET_CURRENCIES_R, GET_CURRENCIES_E, GET_CURRENCIES_S } from '../../actions/settingsStack/getCurrencies';
import { SET_DEFAULT_CURRENCY } from '../../actions/settingsStack/setDefaultCurrency';

const defaultState = {
	currencies: [],
	defaultCurrency: { label: '---', value: '' },
	getCurrencies_A: false,
	getCurrencies_S: false,
	getCurrencies_E: false
};

const settingsStack = (state = defaultState, action) => {
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

		case SET_DEFAULT_CURRENCY: {
			return {
				...state,
				defaultCurrency: action.data
			};
		}

		default:
			return state;
	}
};

export default settingsStack;
