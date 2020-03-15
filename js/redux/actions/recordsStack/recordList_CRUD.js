export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORDS = 'DELETE_RECORDS';
export const PATCH_RECORD = 'PATCH_RECORD';

export function addRecord (data) {
	return {
		type: ADD_RECORD,
		data
	};
}

export function deleteRecords (data) {
	return {
		type: DELETE_RECORDS,
		data
	};
}

export function patchRecord (data) {
	return {
		type: ADD_RECORD,
		data
	};
}
