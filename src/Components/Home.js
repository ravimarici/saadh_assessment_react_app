import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import Create from "./Create";

/**This is Home Page Component  */
function Home() {
  return (
    <div>
      <Container>
        {/** This is for Navigation  */}
        <Navigation />

        <hr></hr>

        {/* This is for Creating Blog and View Blog */}
        <Create />
      </Container>
    </div>
  );
}

export default Home;
