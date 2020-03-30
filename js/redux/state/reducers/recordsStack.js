import { ADD_RECORD, DELETE_RECORDS, PATCH_RECORD, patchRecord } from '../../actions/recordsStack/recordList_CRUD';
import keygen from '../../../utils/keygen';

const defaultState = {
	list: [
		{ date: '20-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'drinks', ammount: '1200$', type: 'exp', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '22-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '24-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'food', ammount: '120$', type: 'exp', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '27-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '28-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() },
		{ date: '30-12-2020', category: 'job', ammount: '1200$', type: 'inc', title: 'payday', id: keygen() }
	]
};
const recordsStack = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_RECORD: {
			return {
				...state,
				list: action.data
			};
		}
		case DELETE_RECORDS: {
			return {
				...state,
				list: action.data
			};
		}
		case PATCH_RECORD: {
			return {
				...state,
				list: action.data
			};
		}
		default:
			return state;
	}
};

export default recordsStack;
