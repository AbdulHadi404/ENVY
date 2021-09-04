import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import './Card.css';
import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import {
  Card,
  Col,
  Badge,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import NotesModal from './NoteModal';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavHandler = () => {
    dispatch(toggleFav(note));
  };

  const favMarkup = note.favorite ? false : true;

  return (
    <Card className="text-center" style={{ margin: 15 }}>
      <NotesModal note={note}>
        <CardHeader className="effect-shine" tag="h3">
          {note.title}
        </CardHeader>
      </NotesModal>

      <CardBody>
        <CardText className="text">{note.content}</CardText>
      </CardBody>
      <CardFooter className="text-muted">
        <Col>
          <Button
            style={{ margin: '5px' }}
            color="info"
            outline
            onClick={deleteNoteHandler}
          >
            Delete{' '}
            <Badge color="info">
              <MdDeleteForever />
            </Badge>
          </Button>
          <Button
            style={{ margin: '5px' }}
            color="danger"
            outline={favMarkup}
            onClick={toggleFavHandler}
          >
            Favorite{' '}
            <Badge color="danger">
              <BsHeartFill />
            </Badge>
          </Button>
        </Col>
        <Col style={{ marginTop: '10px' }}>
          <CardText>{moment(note.createdAt.toDate()).fromNow()}</CardText>
        </Col>
      </CardFooter>
    </Card>
  );
};

export default Note;
