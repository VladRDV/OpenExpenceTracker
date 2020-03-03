export const TEST_ACTION = 'TEST_ACTION';

export function testAction (data) {
	return {
		type: TEST_ACTION,
		data
	};
}
