import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './components/images/Untitled-2.png';
// import junior from './components/images/guyLewis2.png';
// import background from './components/images/background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Media, Button, Form, FormControl, Col, Card,*/ Nav, Row,  Navbar, Image,  Container} from 'react-bootstrap';
// import {FaInstagram, FaFacebook, FaSoundcloud} from 'react-icons/fa';
// import Music from './pages/Music'
// import Bio from './pages/Bio'
import './Component.css';

class NavBarTop extends Component{
render(){
  return(
    <div>
<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" id="top">

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    
   
         <Nav.Link>
           <Link to={'/' }>Home</Link>
           </Nav.Link>
           
   
     <Nav.Link>
       <Link to={'/music'}>Music</Link>
       </Nav.Link>
       
    <Nav.Link>
       <Link to={'/bio'}>Bio</Link>
       </Nav.Link>

  </Nav>
</Navbar.Collapse>
</Navbar>
</div>
)
  }
}

export default NavBarTop;