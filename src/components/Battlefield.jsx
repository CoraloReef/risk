import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Battlefield extends React.Component {
  static width = 12;
  static height = 6;

  createField = () => {
    return (
      <Col>1</Col>
    );
  }

  render() {
    return (
        <Row>
          {this.createField()}
        </Row>
    );
  }
}

export default Battlefield;