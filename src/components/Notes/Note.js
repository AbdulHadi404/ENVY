import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import moment from 'moment';
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
    <Card style={{ margin: 15 }}>
      <CardHeader tag="h3">{note.title}</CardHeader>
      <CardBody>
        <CardText>{note.content}</CardText>
      </CardBody>
      <CardFooter className="text-muted">
        <Col sm={{ size: 12, offset: 0 }}>
          <Button color="info" outline onClick={deleteNoteHandler}>
            Delete{' '}
            <Badge color="info">
              <MdDeleteForever />
            </Badge>
          </Button>
          <span> </span>
          <Button color="danger" outline={favMarkup} onClick={toggleFavHandler}>
            Favorite{' '}
            <Badge color="danger">
              <BsHeartFill />
            </Badge>
          </Button>
        </Col>
        <Col sm={{ size: 'auto', offset: 3 }}>
          <br />
          <CardText>{moment(note.createdAt.toDate()).fromNow()}</CardText>
        </Col>
      </CardFooter>
    </Card>
  );
};

export default Note;
