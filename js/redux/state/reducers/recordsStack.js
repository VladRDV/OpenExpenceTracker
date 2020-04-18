import { ADD_RECORD, DELETE_RECORDS, PATCH_RECORD, patchRecord } from '../../actions/recordsStack/recordList_CRUD';
import keygen from 'js/utils/keygen';

const defaultState = {
	list: [ { date: '20-12-2020', category: 'job', ammount: '120$', type: 'inc', title: 'payday', id: keygen() } ]
};
const recordsStack = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_RECORD: {
			return {
				...state,
				list: [
					...state.list,
					{
						...action.data,
						id: keygen()
					}
				]
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
