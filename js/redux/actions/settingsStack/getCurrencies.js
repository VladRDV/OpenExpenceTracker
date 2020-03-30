export const GET_CURRENCIES_A = 'GET_CURRENCIES_A';
export const GET_CURRENCIES_S = 'GET_CURRENCIES_S';
export const GET_CURRENCIES_E = 'GET_CURRENCIES_E';
export const GET_CURRENCIES_R = 'GET_CURRENCIES_R';

export function getCurrencies_A (data) {
	return {
		type: GET_CURRENCIES_A,
		data
	};
}

export function getCurrencies_S (data) {
	return {
		type: GET_CURRENCIES_S,
		data
	};
}

export function getCurrencies_E (data) {
	console.log(data, ' ::: getCurrencies_E');
	return {
		type: GET_CURRENCIES_E,
		data
	};
}

export function getCurrencies_R () {
	return {
		type: GET_CURRENCIES_R
	};
}
