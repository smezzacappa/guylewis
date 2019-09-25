  import React, {Component} from 'react';
  import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
  // import logo from './components/images/Untitled-2.png';
  import junior from './components/images/guyLewis2.png';
  import background from './components/images/background.jpeg';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { /*Media, Button, Form, FormControl, Col, Card,*/ Nav, Row,  Navbar, Image,  Container} from 'react-bootstrap';
  import {FaInstagram, FaFacebook, FaSoundcloud} from 'react-icons/fa';
  import Music from './pages/Music';
  import Bio  from './pages/Bio';
  import  Home  from './pages/Home';
  
  import  NavBarTop  from './components/NavBarTop';
  import NavBarBot from './components/NavBarBot';

  import './App.css';

  class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Router>

      <Image src={junior} alt="Junior" fluid/>
        <NavBarTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/music" component={Music} />
            <Route path="/bio" component={Bio} />
          </Switch>
      <NavBarBot/>
      </Router>
    </React.Fragment>
    );
  }
}

  export default App;
