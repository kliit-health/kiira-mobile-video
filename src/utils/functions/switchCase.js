/**
 * @description
 * https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d
 */
const ifFunction = f => (f instanceof Function ? f() : f);

const switchcase = cases => defaultCase => key =>
	cases.hasOwnProperty(key) ? cases[key] : defaultCase;

export const switchCase = cases => defaultCase => key =>
	ifFunction(switchcase(cases)(defaultCase)(key));
