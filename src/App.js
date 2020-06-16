import React, { component } from 'react';
import './App.css';
import Home from './components/Home'
import Greet from './components/Greet'
import Student from './components/Student'
import Finish from './components/Finish'
import Why from './components/Why'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Profile from './components/Profile'
import Contact from './components/Contact'


import { Button,Card,Jumbotron,Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function App () {
  
    return (
      <div className="App">

<Router>
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>    
              <Navbar.Brand href="/">Trainer </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <div className="links">
                <div className="nav">
                <Nav.Link href="/components/Home">HOME</Nav.Link>
                <Nav.Link href="/components/Why">WHY</Nav.Link>
                <Nav.Link href="/components/Faq">FAQ</Nav.Link>
                <Nav.Link href="/components/Contact">CONTACT</Nav.Link>
                </div>
                </div>  

                  <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/components/Profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/components/Home">Logout</NavDropdown.Item>
                  </NavDropdown>
              </Navbar.Collapse>
            </Container>  
            </Navbar>

        <Route exact path="/" component={Trainer} />
        <Route path="/components/Home" component={Home} />
        <Route path="/components/Why" component={Why} />
        <Route path="/components/Faq" component={Faq} />
        <Route path="/components/Contact" component={Contact} />
        <Route path="/components/Profile" component={Profile} />
        </div>
        </Router>

        </div>
        );
    }
  
function Trainer() {
  
    return (
        <div>
        <Greet/>
        <br></br>
            <Student/>
            <Finish/>
            <Footer/>
            </div>
        );
    }










       
export default App;      
        

        
          
          

          
             
          

          

            
            
            
             
              
      
