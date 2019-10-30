import React from 'react';
import { Container } from 'react-bootstrap';

import connect from '../connect';
import Header from './Header';
import StartSettings from './StartSettings';
import Polygon from './Polygon';
import InfoPanel from './InfoPanel';

const mapStateToProps = (state) => {
  const { gamePhase } = state;
  return { gamePhase };
};

@connect(mapStateToProps)

class App extends React.Component {
  render() {
    const { gamePhase } = this.props;

    return (
      <>
        <Header />
        <section>
          <Container className="mb-4">
            {(gamePhase === 'start')
              ? <StartSettings />
              : (
                <>
                  <Polygon />
                  <InfoPanel />
                </>
              )}
          </Container>
        </section>
      </>
    );
  }
}

export default App;
