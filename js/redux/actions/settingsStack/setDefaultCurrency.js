export const SET_DEFAULT_CURRENCY = 'SET_DEFAULT_CURRENCY';

export function setDefaultCurrency (data) {
	return {
		type: SET_DEFAULT_CURRENCY,
		data
	};
}
