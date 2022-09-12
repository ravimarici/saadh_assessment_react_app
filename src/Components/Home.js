import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Create } from "./Create";
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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /**This method is to create a Blog and save in localstorage */
  const createBlog = (title, content) => {
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
    localStorage.setItem("blogs", JSON.stringify(filterBlogs));
  };

  return (
    <div>
      <Container>
        {/** This is for Navigation  */}
        <Navigation />

        <hr></hr>

        {/* Table */}
        {/* Receiving props  */}
        <View blogs={blogs} receiveBlog={updatedBlog} deleteBlog={deleteBlog} />

        {/* Create popup */}

        <hr></hr>
        <Create createdBlog={createBlog} />
      </Container>
    </div>
  );
}

export default Home;
