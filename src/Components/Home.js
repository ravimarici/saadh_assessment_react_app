import React,{ useState }  from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import { BsPencilSquare, BsTrash } from "react-icons/bs";

/**This is Home Page Component  */
function Home() {
  const [blogs, setBlogs] = useState([])
  const [show, setShow] = useState(false);
  
  
  const [blogTitle, setBlogTitle] = useState();
  const [blogContent, setBlogContent] = useState();
  const [blogShow, setBlogShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleViewShow = () => setBlogShow(true);
  const handleViewClose = () => setBlogShow(false)

  /**This method is to create a Blog and save in localstorage */
  const createBlog = (e) => {
    console.log(blogTitle);
    console.log(blogContent);
    let blogValue = {
      "blogid": Math.floor(Math.random() * 100) + 1,
      blogTitle,
      blogContent
    }
    setBlogs([...blogs,blogValue]);
    localStorage.setItem("blogs",JSON.stringify(blogs));

    setBlogTitle('');
    setBlogContent('');
  }

  return (
    <div>
      <Container>
        { /* Header */}
        <Navbar>
          <Image src='/Images/logo.png' alt='logo' height={50} width={200}/>
        <Navbar.Brand href="">Blog List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">A.Saadh</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

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
      <tbody>
        <tr>
          <td>1</td>
          <td>JavaScript</td>
          <td>Work on the JS class</td>
          <td><Button variant="info" onClick={handleViewShow}><BsPencilSquare/></Button></td>
          <td><Button variant="danger"><BsTrash/></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Angular</td>
          <td>Work on the Angular class</td>
          <td><Button variant="info" onClick={handleViewShow}><BsPencilSquare/></Button></td>
          <td><Button variant="danger"><BsTrash/></Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>React Native</td>
          <td>Work on the React class</td>
          <td><Button variant="info" onClick={handleViewShow}><BsPencilSquare/></Button></td>
          <td><Button variant="danger"><BsTrash/></Button></td>
        </tr>
        
      </tbody>
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
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus                 
                  name="title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Blog Content</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="content"
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

                <Button variant="primary" onClick={(e) => createBlog()}>
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
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" autoFocus  />
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
  )
}

export default Home