import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

function Navigation() {

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
         { /* Header */ }
        <Navbar>
          <Image src='/Images/logo.png' alt='logo' height={50} width={200}/>
        <Navbar.Brand href="">Blog List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as Username: <a href="/" onClick={handleClick}>{localStorage.getItem("username")}</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navigation