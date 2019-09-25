  import React from 'react';
  import logo from './components/images/Untitled-2.png';
  import junior from './components/images/guyLewis2.png';
  import background from './components/images/background.jpeg';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Media, Nav, Row,  Navbar, Image, Button, Form, FormControl, Container, Col, Card} from 'react-bootstrap';

  import './App.css';

  function App() {
    return (

      <div className="App">
     
    <Row className="col">
    
  
  <Image src={junior} alt="Junior" fluid/>
  
    </Row>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="top">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <table><tr><td> <Nav.Link href="#Music">Music</Nav.Link></td>
     
      <Nav.Link href="#Bio">Bio</Nav.Link></tr></table>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
 
<Image src={background} alt="background" fluid/>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom" id="Brand">
  
<Navbar.Brand href="#home" >Guy Lewis</Navbar.Brand>
</Navbar>
      </div>
    );
  }

  export default App;
