import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Edit({ blogid, title, content, updateSaadh }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleEditShow = () => setShow(true);
  const handleEditClose = () => setShow(false);

  const editBlog = () => {
    updateSaadh(blogid, editTitle, editContent);
    setValidated(true);
    setShow(false);
  };

  return (
    <div>
      <Button variant="info" onClick={handleEditShow}>
        <BsPencilSquare />
      </Button>

      {/* View Blog */}

      <Modal
        show={show}
        onHide={handleEditClose}
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
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
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
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Content is required
              </Form.Control.Feedback>
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Close
              </Button>

              <Button id="create" variant="primary" onClick={editBlog}>
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Edit;
