/**
 * @desc Takes in style objects and arrays of type [style, boolean] and returns an array of merged styles.
 * The styles contained in [style, boolean] is only merged if the boolean is truthy.
 *
 */

export const mergeStyles = (styles, spread) => {
	let merged = {};
	styles.map(style => {
		if (Array.isArray(style)) {
			if (style[1]) {
				merged = { ...merged, ...style[0] };
			}
		} else {
			merged = { ...merged, ...style };
		}
	});
	return merged;
};
