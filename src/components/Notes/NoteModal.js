import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
} from 'reactstrap';
import './Card.css';

const NotesModal = ({ note }) => {
  console.log('modal hit');

  const { title, content } = note;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <CardHeader className="effect-shine" tag="h3" onClick={toggle}>
        {title}
      </CardHeader>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> {title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NotesModal;
