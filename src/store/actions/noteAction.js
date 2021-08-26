export const addNote = (note) => {
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

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .delete()
      .then(() => {
        console.log('Note Deleted Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const status = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .update({ favorite: status })
      .then(() => {
        console.log('Toggle Favorite Success');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
