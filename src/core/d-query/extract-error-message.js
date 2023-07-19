export function extactErrorMessage(errorData) {
	return typeof errorData.message === 'object'
		? errorData.message[0]
		: errorData.message
}
