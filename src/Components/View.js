import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";

export const View = ({ blogs }) => {
  return blogs.map((blog) => (
    <tbody>
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
    </tbody>
  ));
};
