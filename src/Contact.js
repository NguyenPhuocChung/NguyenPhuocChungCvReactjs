import { Fragment, React } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Header from "./Header";
function Contact() {
  return (
    <Fragment>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center">Contact Us</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>

          <Button className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
}

export default Contact;
