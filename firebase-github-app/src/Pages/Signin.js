import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
        toast("You Sign In successfully!", {
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.message, {
          type: "error",
        });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };
  if (context.user?.uid) {
    return <Navigate replace to="/" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">SignIn here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
