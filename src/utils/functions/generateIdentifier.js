export const generateIdentifier = () => {
	const randomIdentifier = Math.random() * Date.now();
	return randomIdentifier.toFixed().toString();
};
