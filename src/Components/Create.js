import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Create = ({ createdBlog }) => {
  const createList = () => {
    if (title !== "" && content !== "") {
      createdBlog(title, content);
      setShow(false);
      setTitle("");
      setContent("");
    }
    else {
      setValidated(true);
    }
    

  };

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create Blog
      </Button>
      <hr></hr>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Title is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
            >
              <Form.Label>Blog Content</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Content is required
              </Form.Control.Feedback>
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button id="create" variant="primary" onClick={createList}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
