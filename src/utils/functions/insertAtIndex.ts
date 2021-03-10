export const insertAtIndex = (arr, index, ...items) => [
	...arr.slice(0, index),
	...items,
	...arr.slice(index),
];
