import { useReducer, useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

let initialState = {
	document  : null,
	isPending : false,
	error     : null,
	success   : null
};

const firestoreReducer = (state, action) => {
	switch (action.type) {
		case 'DELETED_DOCUMENT':
			return { error: null, isPending: false, success: true, document: null };
		case 'ERROR':
			return { ...state, error: action.payload, success: false, document: null, isPending: false };
		case 'ADDED_DOCUMENT':
			return { error: null, isPending: false, success: true, document: action.payload };
		case 'IS_PENDING':
			return { isPending: true, document: null, success: false, error: null };
		default:
			return state;
	}
};

export const useFirestore = (collection) => {
	const [ response, dispatch ] = useReducer(firestoreReducer, initialState);

	const ref = projectFirestore.collection(collection);

	// add document
	const addDocument = async (doc) => {
		dispatch({ type: 'IS_PENDING' });
		const createdAt = timestamp.fromDate(new Date());
		try {
			const addedDocument = await ref.add({ ...doc, createdAt });
			dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument });
		} catch (error) {
			dispatch({ type: 'ERROR', payload: error });
		}
	};

	// delete document
	const deleteDocument = async (id) => {
		dispatch({ type: 'IS_PENDING' });

		try {
			await ref.doc(id).delete();
			dispatch({ type: 'DELETED_DOCUMENT' });
		} catch (error) {
			dispatch({ type: 'ERROR', payload: 'could not delete' });
		}
	};

	return { addDocument, deleteDocument, response };
};
