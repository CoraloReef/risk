import React, { Suspense } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';

import LanguagesSwitcher from './LanguagesSwitcher';
import Header from './Header';
import StartSettings from './StartSettings';
import Polygon from './Polygon';
import InfoPanel from './InfoPanel';
import Loader from './Loader';

const mapStateToProps = (state) => {
  const { gamePhase } = state;
  return { gamePhase };
};
const actionCreators = {};

const Component = (props) => {
  const { gamePhase } = props;

  return (
    <>
      <LanguagesSwitcher />
      <Header />
      <section>
        <Container className="mb-4">
          {gamePhase === 'start' ? (
            <StartSettings />
          ) : (
            <>
              <Polygon />
              <InfoPanel />
            </>
          )}
        </Container>
      </section>
    </>
  );
};

const ConnectComponent = connect(mapStateToProps, actionCreators)(Component);

const App = () => (
  <Suspense fallback={<Loader />}>
    <ConnectComponent />
  </Suspense>
);

export default App;
