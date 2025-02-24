import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Card,
  Alert,
  Button,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../scss/Contact.css";
import * as formik from "formik";
import * as Yup from "yup";

export default function Contact({ darkMode }) {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_Mail_Service_Key,
        process.env.REACT_APP_Mail_Template_Key,
        form.current,
        {
          publicKey: process.env.REACT_APP_Mail_Public_Key,
        }
      )
      .then(
        () => {
          setShowSuccess(true);
          setShowError(false);
          resetForm();
        },
        (error) => {
          console.log(error);
          setShowError(true);
          setShowSuccess(false);
        }
      );
  };

  const { Formik } = formik;

  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Please enter your email."),
    message: Yup.string().required("Please enter your message."),
  });

  return (
    <div
      className={`background background-contact ${
        darkMode ? "background-dark" : ""
      }`}
    >
      <Container className="d-flex justify-content-center p-5">
        {showSuccess && (
          <Alert
            variant="success"
            onClose={() => setShowSuccess(false)}
            style={{ maxWidth: "400px", margin: "auto" }}
            dismissible
          >
            Your message has been sent successfully!
          </Alert>
        )}

        {showError && (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            style={{ maxWidth: "400px", margin: "auto" }}
            dismissible
          >
            Failed to send the message. Please try again later.
          </Alert>
        )}
        <Card className="shadow-lg card-contact">
          <Card.Body>
            <h1 className="mb-4">Contact</h1>
            <Formik
              validationSchema={schema}
              onSubmit={sendEmail}
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit} ref={form}>
                  <Row className="text-start">
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        className="shadow-sm rounded"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        className="shadow-sm rounded"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          className="shadow-sm rounded"
                          placeholder="Write your message..."
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={touched.message && !!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Button type="submit" variant="dark" className="w-100">
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
