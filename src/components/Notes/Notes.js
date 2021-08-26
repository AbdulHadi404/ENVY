import React from 'react';
import AddNotes from './AddNotes';
import NotesList from './NotesList';
import { Container, Row, Col } from 'reactstrap';

const Notes = () => {
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <AddNotes />
        </Col>
        <Col xs="auto">
          <NotesList />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
