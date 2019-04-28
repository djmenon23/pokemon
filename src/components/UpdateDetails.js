import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class UpdateDetails extends Component  {

  constructor() {
    super();
    this.state = {
      name: '',
      type: '',
      attack: '',
      defense: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event)  {
    const name=event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggle();
    const name= {
      english: this.state.name
    }
    const type = [];
    type.push(this.state.type);
    const base = {
      Attack: this.state.attack,
      Defense: this.state.defense
    }

    const obj = {
      id: this.props.id,
      name,
      type,
      base
    }
    this.props.onValuesUpdate(this.props.id, obj);

  }

  render(){
    return (
          <Modal show={this.props.show} >
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header >
              <Modal.Title>View Pokemon Details</Modal.Title>
              
            </Modal.Header>
            <Modal.Body>
              
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Name:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Type:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control type="text" name="type" onChange={this.handleChange} value={this.state.type} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Attack:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control type="text" name="attack" onChange={this.handleChange} value={this.state.attack} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Defense:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control type="text" name="defense" onChange={this.handleChange} value={this.state.defense}/>
                  </Col>
                </Form.Group>
  
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.toggle}>
                Close
                </Button>
                <Button variant="primary" type="submit" value="submit">
                Update
                </Button>
            </Modal.Footer>
            </Form>
          </Modal>
      )
    }
}

export default UpdateDetails