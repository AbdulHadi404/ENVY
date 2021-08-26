import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from './NotesList';
import { Container, Row, Col, CardColumns } from 'reactstrap';

const Favorites = () => {
  console.log('favoritess');
  useFirestoreConnect([
    {
      collection: 'notes',
      where: ['favorite', '==', true],
      orderBy: ['createdAt', 'desc'],
      storeAs: 'favNotes',
    },
  ]);
  const favNotes = useSelector((state) => state.firestore.ordered.favNotes);
  console.log('favNotes', favNotes);
  return (
    <Container>
      <CardColumns>
        <Col xs="auto">
          <NotesList notes={favNotes} />
        </Col>
      </CardColumns>
    </Container>
  );
};

export default Favorites;
