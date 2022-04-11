import { useEffect, useState } from 'react';
//import { firestore } from '../firebase';

export const useFirebaseFetch = (collectionName, conditions, limit = 100) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (conditions && collectionName) {
        }
    }, []);

    return { loading, data, error };
};
