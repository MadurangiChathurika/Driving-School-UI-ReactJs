import React from 'react'
import {Jumbotron,Container} from 'react-bootstrap';

function Student () {
 
    return (
    <Container>
    <Jumbotron style={{backgroundColor: "#cccccc"}}>
    <h1 style={{textAlign: "center"}}>Names of the students</h1>
    </Jumbotron>
    </Container>
    );
}


export default Student;