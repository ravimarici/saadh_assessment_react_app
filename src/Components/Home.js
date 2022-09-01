import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Navigation from "./Navigation";
import { View } from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("blogs");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

/**This is Home Page Component  */
function Home() {
  const [blogs, setBlogs] = useState(getDatafromLS());
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogShow, setBlogShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleViewShow = () => setBlogShow(true);
  const handleViewClose = () => setBlogShow(false);

  /**This method is to create a Blog and save in localstorage */
  const createBlog = () => {
    if (title !== "" && content !== "") {
      let blog = {
        blogid: Math.floor(Math.random() * 100) + 1,
        title,
        content,
      };
      blogs.push(blog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
      setTitle("");
      setContent("");
      handleClose(true);
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Container>
        {/** This is for Navigation  */}
        <Navigation />
        <hr></hr>
        {/* Table */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Blog Title</th>
              <th>Blog Content</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/** This for View blog */}

          <View blogs={blogs} />
        </Table>
        {/* Create popup */}
        <hr></hr>
        <Button variant="primary" onClick={handleShow}>
          Create Blog
        </Button>

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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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

                <Button id="create" variant="primary" onClick={createBlog}>
                  Create
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        {/* View Blog */}

        <Modal
          show={blogShow}
          onHide={handleViewClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Blog Content</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleViewClose}>
              Close
            </Button>
            <Button variant="primary">Update</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Home;
