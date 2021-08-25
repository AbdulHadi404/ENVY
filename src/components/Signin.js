import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { auth } from '../firebase';

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const onSignInHandler = (e) => {
    e.preventDefault();
    setError('');

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error, error.message);
      });
  };

  return (
    <Form className="container">
      <h1>Sign In</h1>

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" innerRef={emailRef} placeholder="Enter Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          innerRef={passwordRef}
          placeholder="Enter Password"
        />
      </FormGroup>

      <FormGroup>
        <Label className="remember-me">
          <Input type="checkbox" />
          <Label> Remember Me</Label>
        </Label>
      </FormGroup>

      {error.length ? (
        <FormGroup>
          <Alert color="danger">
            <strong>Error!</strong> {error}.
          </Alert>
        </FormGroup>
      ) : null}

      <FormGroup>
        <Button onClick={onSignInHandler} type="submit" block color="success">
          Submit
        </Button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </FormGroup>
    </Form>
  );
};

export default SignIn;
