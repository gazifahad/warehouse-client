import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogIn from "../SocialLogIn/SocialLogIn";

const Login = () => {
  const [emailUser, emailLoading, emailError] = useAuthState(auth);
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, googleUser, googleLoading, googleError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, Rsending, Rerror] =
    useSendPasswordResetEmail(auth);

  const onSubmitCreateUser = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (emailUser || googleUser) {
      navigate(from, { replace: true });
    }
  }, [emailUser,googleUser]);

  if (emailLoading || googleLoading) {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
        </div>
    );
  }

  return (
    <div className="min-vh-100">
      <h5>Please log in with</h5>
      <div className="w-25 mx-auto text-start mb-3">
        {/* social log in */}
        <div>
          <SocialLogIn></SocialLogIn>
        </div>
        <div className="text-center my-3">
          <p> or </p>
        </div>
        <Form onSubmit={onSubmitCreateUser}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <span className="ms-3">
            <Link to="">
              <button
                className="btn text-danger btn-link"
                onClick={async () => {
                  await sendPasswordResetEmail(email);
                  alert(`Sent email to : ${email}`);
                }}
              >
                Forgot Password?
              </button>
            </Link>
          </span>
        </Form>
        <div className="mt-5">
          Don't have an account?{" "}
          <Link to="/signin">
            <button className="btn btn-link">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
