import React from 'react';
import useInput from '../../custom-hooks/useInput';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardTitle,
} from 'reactstrap';
import './Card.css';
import { addNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const AddNotes = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetTitle();
    resetContent();
  };

  return (
    <Container fluid={true}>
      <Card className="text-center" body>
        <CardTitle tag="h5">New Note</CardTitle>
        <Form>
          <FormGroup>
            <Input type="text" {...bindTitle} placeholder="Enter Title" />
          </FormGroup>
          <FormGroup>
            <Input
              {...bindContent}
              className="card-textarea"
              placeholder="Body"
              type="textarea"
            />
          </FormGroup>
          <FormGroup>
            <Button onClick={onSubmitHandler}>Submit</Button>
          </FormGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default AddNotes;
