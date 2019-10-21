import React from 'react';
import { Row } from 'react-bootstrap';

import Ceil from './Ceil';

class Battlefield extends React.Component {
  static width = 12;
  static height = 6;

  createRow = () => {
    let row = <Ceil />;

    return row;
  }

  render() {
    return (
      <Row>
        {this.createRow()}
      </Row>
    );
  }
}

export default Battlefield;