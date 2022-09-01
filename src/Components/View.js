import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

export const View = ({ blogs }) => {
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
                <Button variant="info">
                  <BsPencilSquare />
                </Button>
              </td>
              <td>
                <Button variant="danger">
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
