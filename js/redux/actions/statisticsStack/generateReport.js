export const UPDATE_DAY_INCOME_REPORT = 'UPDATE_DAY_INCOME_REPORT';
export const UPDATE_WEEK_INCOME_REPORT = 'UPDATE_WEEK_INCOME_REPORT';
export const UPDATE_MONTH_INCOME_REPORT = 'UPDATE_MONTH_INCOME_REPORT';

export const UPDATE_DAY_EXPENCE_REPORT = 'UPDATE_DAY_EXPENCE_REPORT';
export const UPDATE_WEEK_EXPENCE_REPORT = 'UPDATE_WEEK_EXPENCE_REPORT';
export const UPDATE_MONTH_EXPENCE_REPORT = 'UPDATE_MONTH_EXPENCE_REPORT';

export function updateDayIncomeReport (data) {
	return {
		type: UPDATE_DAY_INCOME_REPORT,
		data
	};
}

export function updateWeekIncomeReport (data) {
	return {
		type: UPDATE_WEEK_INCOME_REPORT,
		data
	};
}
export function updateMonthIncomeReport (data) {
	return {
		type: UPDATE_MONTH_INCOME_REPORT,
		data
	};
}

export function updateDayExpenceReport (data) {
	return {
		type: UPDATE_DAY_EXPENCE_REPORT,
		data
	};
}
export function updateWeekExpenceReport (data) {
	return {
		type: UPDATE_WEEK_EXPENCE_REPORT,
		data
	};
}

export function updateMonthExpenceReport (data) {
	return {
		type: UPDATE_MONTH_EXPENCE_REPORT,
		data
	};
}
