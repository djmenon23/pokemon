import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const PokemonDetails = props => {

    const { toggle, show, showDetails } = props
    const name = showDetails ? showDetails.name.english : '';
    const type = showDetails ? showDetails.type.join(',') : '';
    return (
      showDetails ?
        <Modal show={show} >
          <Modal.Header >
            <Modal.Title>View Pokemon Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Name:
                    </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={name} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Type:
                    </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={type} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Attack:
                    </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={showDetails.base.Attack} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                  Defense:
                    </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={showDetails.base.Defense} />
                </Col>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggle}>
              Close
              </Button>
          </Modal.Footer>
        </Modal>
        : null
    )
  }

export default PokemonDetails;