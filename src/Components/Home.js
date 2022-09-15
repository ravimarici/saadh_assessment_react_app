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

  /**This method is to create a Blog and save in localstorage */
  const createBlog = (title, content) => {
    if (title !== "" && content !== "") {
      let blog = {
        blogid: Math.floor(Math.random() * 100) + 1,
        title,
        content,
      };
      const todotempList = [...blogs];
      todotempList.push(blog);
      todotempList.sort((a,b) => a.blogid - b.blogid);
      setBlogs(todotempList);
      localStorage.setItem("blogs", JSON.stringify(todotempList));
      window.location.reload();
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
    deletedList.sort((a,b) => a.blogid - b.blogid);
    setBlogs(deletedList);
    localStorage.setItem("blogs", JSON.stringify(deletedList));
    window.location.reload();
  };

  // Deleting blogs from Local Storage
  const deleteBlog = (blogid) => {
    const filterBlogs = blogs.filter((element, index) => {
      return element.blogid !== blogid;
    });
    filterBlogs.sort((a,b) => a.blogid - b.blogid);
    setBlogs(filterBlogs);
    localStorage.setItem("blogs", JSON.stringify(filterBlogs));
    window.location.reload();
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
