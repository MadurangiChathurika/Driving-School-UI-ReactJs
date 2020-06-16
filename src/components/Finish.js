import React from 'react'
import { Form,Col,Jumbotron,Container } from 'react-bootstrap';
import './Finish.css';

function Finish () {

    return (
        <div>
          <Container>
          <Jumbotron style={{backgroundColor: "#cccccc"}}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>Name</h5></Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCompetence">
                <Form.Label><h5>Competence</h5></Form.Label>
                  <div className="radio">
                    <label><input type="radio" value="Success" />Success</label>
                  </div>

                  <div className="radio">
                    <label><input type="radio" value="Normal" />Normal</label>
                  </div>

                  <div className="radio">
                    <label><input type="radio" value="Weak" />Weaked</label>
                  </div> 
              </Form.Group>
                

              <Form.Group as={Col} controlId="formGridAttendence">
                <Form.Label><h5>Attendence</h5></Form.Label>
                  <div className="radio">
                    <label><input type="radio" value="Normal" />present</label>
                  </div>

                  <div className="radio">
                    <label><input type="radio" value="Weak" />absence</label>
                  </div> 
              </Form.Group>

              <Form.Group as={Col} controlId="formGridComment">
                <Form.Label><h5>Comment</h5></Form.Label>
                <div>
                <textarea type="comment" className="Form.control" placeholder=" Add a comment" rows="4"></textarea>
                </div>
              </Form.Group>
            </Form.Row>
           <button className="btn btn-success" type="submit">Submit</button>
            <button className="btn btn-primary" type="submit">Update</button>
            <button className="btn btn-danger" type="submit">Delete</button>
          </Form>
          </Jumbotron>
          </Container>
        </div>  
    );
}

export default Finish;



        