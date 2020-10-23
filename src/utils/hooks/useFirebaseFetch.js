import { useEffect, useState } from "react";
import { firestore } from "../firebase";

export const useFirebaseFetch = (collectionName, conditions, limit = 100) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const queryFirestore = async () => {
			try {
				let query = firestore.collection(collectionName);
				for (let condition of conditions) {
					const { key, operator, value } = condition;
					query = query.where(key, operator, value);
				}

				const response = await query.limit(limit).get();
				if (response) {
					const data = response.docs.map(item => item.data());
					setData(data);
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		if (conditions && collectionName) {
			queryFirestore();
		}
	}, []);

	return { loading, data, error };
};
