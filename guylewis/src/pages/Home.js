import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import logo from './components/images/Untitled-2.png';
import junior from '../components/images/guyLewis2.png';
import background from '../components/images/background.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Media, Button, Form, FormControl, Col, */ Card,Nav, Row,  Navbar, Image,  Container} from 'react-bootstrap';
import {FaInstagram, FaFacebook, FaSoundcloud} from 'react-icons/fa';
import Music from './Music'
import Bio from './Bio'
import './Pages.css';


class Home extends Component{
    render(){
        return(


   <body >
       <Container className="App-header">
       <Card> Hello World</Card>
       </Container>
   </body>
    )
} 
}


export default Home;
