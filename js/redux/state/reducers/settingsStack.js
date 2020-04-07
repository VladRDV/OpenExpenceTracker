import { GET_CURRENCIES_A, GET_CURRENCIES_R, GET_CURRENCIES_E, GET_CURRENCIES_S } from '../../actions/settingsStack/getCurrencies';
import { SET_DEFAULT_CURRENCY } from '../../actions/settingsStack/setDefaultCurrency';
import { ADD_CATEGORY } from '../../actions/settingsStack/addCategory';
import { DELETE_CATEGORIES } from '../../actions/settingsStack/deleteCategories';

const defaultState = {
	currencies: [],
	categories: [],
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

		case ADD_CATEGORY: {
			return {
				...state,
				categories: [ ...state.categories, action.data ]
			};
		}

		case DELETE_CATEGORIES: {
			return {
				...state,
				categories: getCleanArr(state.categories, action.data)
			};
		}

		case SET_DEFAULT_CURRENCY: {
			return {
				...state,
				categories: action.data
			};
		}

		default:
			return state;
	}
};
function getCleanArr (arr, deletableArr) {
	deletableArr.forEach((el) => {
		if (arr.includes(el.value)) {
			arr.splice(el.index, 1);
		}
	});
	return arr;
}
export default settingsStack;
