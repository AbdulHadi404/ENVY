import React from 'react';
import { getFirestore } from 'redux-firestore';

const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('Note Added Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default addNote;
