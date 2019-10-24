import React from 'react';
import { Col } from 'react-bootstrap';

class Ceil extends React.Component {
  render() {
    return (
      <Col>
        <p>Id: {this.props.id}</p>
        <p>Cont id: {this.props.contynentId}</p>
        <p>Name: {this.props.name}</p>
      </Col>
    );
  }
}

export default Ceil;