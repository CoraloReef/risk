import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';
import LanguagesSwitcher from './LanguagesSwitcher';
import Polygon from './Polygon';

const mapStateToProps = (state) => {
  const { locale } = state.i18n;
  return { locale };
};

@connect(mapStateToProps)

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <LanguagesSwitcher />
          <Container>
            <Row>
              <Col>
                <h1 className="heading">{I18n.t('app.heading')}</h1>
              </Col>
            </Row>
          </Container>
        </header>
        <Container>
          <Row>
            <Polygon />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
