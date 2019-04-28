import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

class PokemonDetails extends Component {

  handleChange = (id) =>(e) => {
    this.props.updateValue(id,e)
  }

  render() {
    const { toggle, show, showDetails } = this.props
    const name = showDetails ? showDetails.name.english : '';
    const type = showDetails ? showDetails.type.join(',') : '';
    const id = showDetails.id;
    return (
      showDetails ?
        <Modal show={show} >
          <Modal.Header >
            <Modal.Title>View or Update Pokemon Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Name:
                    </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="name"
                  onChange={this.handleChange(id)} value={name} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Type:
                    </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" 
                  name="type"
                  onChange={this.handleChange} value={type} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Attack:
                    </Form.Label>
                <Col sm="10">
                  <Form.Control type="text"
                  name="attack"
                  onChange={this.handleChange} value={showDetails.base.Attack} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Defense:
                    </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" 
                  name="defense"
                  onChange={this.handleChange} value={showDetails.base.Defense} />
                </Col>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggle}>
              Close
              </Button>
            <Button variant="primary" type="submit">
              Update
              </Button>
          </Modal.Footer>
        </Modal>
        : null
    )
  }
}

export default PokemonDetails;