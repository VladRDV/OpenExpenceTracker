export default function keygen (params) {
	return Math.random().toString(36).substring(2, 15);
}
