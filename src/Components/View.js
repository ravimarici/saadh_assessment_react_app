import React from "react";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import Edit from "./Edit";

export const View = ({ blogs, receiveBlog, deleteBlog }) => {

  // Sending props to Editing
  const updateBlog = (key, title, content) => {
    console.log("saadh");
    receiveBlog(key, title, content);
  };

  // Passing the props for deleting
  const removeItem = (blogid) => {
    deleteBlog(blogid)
  }

  return (
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
        {blogs.map((blog) => {
          return (
            <tr>
              <td>{blog.blogid}</td>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              <td>
                <Edit
                  blogid={blog.blogid}
                  title={blog.title}
                  content={blog.content}
                  updateBlog={updateBlog}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => removeItem(blog.blogid)}>
                  <BsTrash />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
