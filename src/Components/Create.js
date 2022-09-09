import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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

function Create() {
  const [blogs, setBlogs] = useState(getDatafromLS());
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

   // This method for Edit & Update method
  const updatedBlog = (blogid, title, content) => {
    const tempList = [...blogs];
    const deletedList = tempList.filter((blog) => blog.blogid !== blogid);
    let editedBlog = {
      blogid,
      title,
      content,
    };
    deletedList.push(editedBlog);
    setBlogs(deletedList);
    localStorage.setItem("blogs", JSON.stringify(deletedList));
  };

  // Deleting blogs from Local Storage
  const deleteBlog = (blogid) => {
    console.log(blogid);
    const filterBlogs = blogs.filter((element, index) => {
      return element.blogid !== blogid;
    });
    setBlogs(filterBlogs);
  };
  return (
    <div>
      <View blogs={blogs} receiveBlog={updatedBlog} deleteBlog={deleteBlog} />
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

              <Button id="create" variant="primary" onClick={createBlog}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Create;
