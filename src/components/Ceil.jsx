import React from 'react';
import { Col } from 'react-bootstrap';

class Ceil extends React.Component {
  render() {
    return (
      <Col>
        {this.props.id}
      </Col>
    );
  }
}

export default Ceil;