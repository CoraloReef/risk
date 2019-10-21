import React from 'react';
import { Container } from 'react-bootstrap';

import Battlefield from './Battlefield';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Container>
        <Battlefield />
      </Container>
    );
  }
}

export default App;
