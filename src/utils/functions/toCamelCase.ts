import { toWords } from './toWords'

const toCamelCaseHelper = inputArray => {
	let result = ''
	for (let i = 0, len = inputArray.length; i < len; i++) {
		let currentStr = inputArray[i]
		let tempStr = currentStr.toLowerCase()
		if (i != 0) {
			tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
		}
		result += tempStr
	}
	return result
}

export const toCamelCase = input => {
	let words = toWords(input)
	return toCamelCaseHelper(words)
}
