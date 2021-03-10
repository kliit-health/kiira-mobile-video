export const toString = input => {
	if (input) {
		if (typeof input === 'string') {
			return input
		}
		return String(input)
	}
	return ''
}
