export const DELETE_CATEGORIES = 'DELETE_CATEGORIES';

export function deleteCategories (data) {
	return {
		type: DELETE_CATEGORIES,
		data
	};
}
