export const formatLanguages = (languages = []) => {
	return languages.map(({ value }) => value).join(", ");
};
