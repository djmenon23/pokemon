import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const UpdateDetails = props => {
    return (
          <Modal show={props.show} >
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
                  <Form.Control plaintext readOnly defaultValue="test" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Type:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue="test" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Attack:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue="test" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} >
                  <Form.Label column sm="2">
                    Defense:
                      </Form.Label>
                  <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue="test"/>
                  </Col>
                </Form.Group>
  
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.toggle}>
                Close
                </Button>
            </Modal.Footer>
          </Modal>
      )
}

export default UpdateDetails