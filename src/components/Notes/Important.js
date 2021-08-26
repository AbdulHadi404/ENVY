import React from 'react';
import useInput from '../../custom-hooks/useInput';
import { Button, Form, FormGroup, Input, Card, CardTitle } from 'reactstrap';
import './Card.css';

const Important = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card className="card-component" body>
        <CardTitle tag="h5">Note</CardTitle>
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
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
};

export default Important;
