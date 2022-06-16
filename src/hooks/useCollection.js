import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, _query, _orderBy) => {
	const [ document, setDocument ] = useState(null);
	const [ error, setError ] = useState(null);
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current
	useEffect(
		() => {
			let ref = projectFirestore.collection(collection);

            if (query) {
                ref = ref.where(...query)
            }
            if (orderBy) {
                ref = ref.orderBy(...orderBy)
            }

			const unsub = ref.onSnapshot(
				(snapshot) => {
					let results = [];
					snapshot.docs.forEach((doc) => {
						results.push({ ...doc.data(), id: doc.id });
					});
					setDocument(results);
					setError(null);
				},
				(err) => {
					console.log(err);
					setError('could not fetch data');
				}
			);

			return () => unsub();
		},
		[ collection, query, orderBy ]
	);

	return { document, error };
};
