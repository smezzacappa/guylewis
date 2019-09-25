import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './components/images/Untitled-2.png';
// import junior from './components/images/guyLewis2.png';
// import background from './components/images/background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Media, Button, Form, FormControl, Col, Card,*/ Nav, Row,  Navbar, Image,  Container} from 'react-bootstrap';
import {FaInstagram, FaFacebook, FaSoundcloud} from 'react-icons/fa';
// import Music from './pages/Music'
// import Bio from './pages/Bio'
import './Component.css';


const NavBarBot = () =>(
<Navbar  bg="dark" variant="dark" fixed="bottom" className="Links">
<Container className="NavIcons">
<Nav.Link href="#Instagram"><FaInstagram/></Nav.Link>
<Nav.Link href="#Facebook"><FaFacebook/></Nav.Link>
<Nav.Link href="#SoundCloud"><FaSoundcloud/></Nav.Link>
<Navbar.Brand href="/" >Guy Lewis</Navbar.Brand></Container>
</Navbar>
)

export default NavBarBot;