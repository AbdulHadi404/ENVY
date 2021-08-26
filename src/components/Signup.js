import React, { useRef, useState } from 'react';
import { Alert, FormGroup, Label, Button, Input, Form } from 'reactstrap';
import { auth } from '../fbconfig';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const displayNameRef = useRef(null);
  const [error, setError] = useState('');

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('The passwords donot match');
      return;
    }

    await auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((res) => {
        console.log(res, 'Registered');
      })
      .catch((error) => {
        setError(error.message);
        console.log(error, error.message);
      });

    await auth.currentUser
      .updateProfile({
        displayName: `${displayNameRef.current.value}`,
      })
      .then((res) => {
        console.log(res, 'Name Added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form className="container">
      <h1>Sign Up</h1>

      <FormGroup>
        <Label>Full Name</Label>
        <Input innerRef={displayNameRef} type="text" placeholder="Full name" />
      </FormGroup>

      <FormGroup>
        <Label>Email address</Label>
        <Input innerRef={emailRef} type="email" placeholder="Enter email" />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input
          innerRef={passwordRef}
          type="password"
          placeholder="Enter password"
        />
      </FormGroup>

      <FormGroup>
        <Label>Confirm Password</Label>
        <Input
          innerRef={confirmPasswordRef}
          type="password"
          placeholder="Confirm Password"
        />
      </FormGroup>

      {error.length ? (
        <FormGroup>
          <Alert color="danger">
            <strong>Error!</strong> {error}.
          </Alert>
        </FormGroup>
      ) : null}

      <FormGroup>
        <Button block color="success" onClick={onSignUpHandler}>
          Sign Up
        </Button>
        <p className="forgot-password text-right">
          Already registered <a href="#">Sign In?</a>
        </p>
      </FormGroup>
    </Form>
  );
};

export default SignUp;
