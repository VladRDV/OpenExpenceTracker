import {
	UPDATE_DAY_EXPENCE_REPORT,
	UPDATE_MONTH_EXPENCE_REPORT,
	UPDATE_WEEK_EXPENCE_REPORT,
	UPDATE_DAY_INCOME_REPORT,
	UPDATE_WEEK_INCOME_REPORT,
	UPDATE_MONTH_INCOME_REPORT
} from '../../actions/statisticsStack/generateReport';
// import keygen from 'js/utils/keygen';

const defaultState = {
	income_summaries_day: [],
	income_summaries_week: [],
	income_summaries_month: [],

	income_pie_chart_day: [],
	income_pie_chart_week: [],
	income_pie_chart__month: [],

	expence_summaries_day: [],
	expence_summaries_week: [],
	expence_summaries_month: [],

	expence_pie_chart_day: [],
	expence_pie_chart_week: [],
	expence_pie_chart_month: []
};
const statisticsStack = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_DAY_EXPENCE_REPORT: {
			return {
				...state,
				expence_summaries_day: action.data.table,
				expence_pie_chart_day: action.data.pie_chart
			};
		}

		case UPDATE_WEEK_EXPENCE_REPORT: {
			return {
				...state,
				expence_summaries_week: action.data.table,
				expence_pie_chart_week: action.data.pie_chart
			};
		}

		case UPDATE_MONTH_EXPENCE_REPORT: {
			return {
				...state,
				expence_summaries_month: action.data.table,
				expence_pie_chart_month: action.data.pie_chart
			};
		}

		case UPDATE_DAY_INCOME_REPORT: {
			return {
				...state,
				income_summaries_day: action.data.table,
				income_pie_chart_day: action.data.pie_chart
			};
		}

		case UPDATE_WEEK_INCOME_REPORT: {
			return {
				...state,
				income_summaries_week: action.data.table,
				income_pie_chart_week: action.data.pie_chart
			};
		}

		case UPDATE_MONTH_INCOME_REPORT: {
			return {
				...state,
				income_summaries_month: action.data.table,
				income_pie_chart_month: action.data.pie_chart
			};
		}
		default:
			return state;
	}
};

export default statisticsStack;
