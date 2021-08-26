import React from 'react';
import AddNotes from './AddNotes';
import NotesList from './NotesList';
import { Container, Row, Col } from 'reactstrap';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const Notes = () => {
  useFirestoreConnect([
    { collection: 'notes', orderBy: ['createdAt', 'desc'] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered.notes);
  console.log(notes);

  return (
    <Container>
      <Row>
        <Col xs="auto">
          <AddNotes />
        </Col>
        <Col xs="auto">
          <NotesList notes={notes} />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
