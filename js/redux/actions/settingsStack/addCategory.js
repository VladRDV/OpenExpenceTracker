export const ADD_CATEGORY = 'ADD_CATEGORY';

export function addCategory (data) {
	return {
		type: ADD_CATEGORY,
		data
	};
}
