import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';
import LanguagesSwitcher from './LanguagesSwitcher';

const mapStateToProps = (state) => {
  const { locale } = state.i18n;
  return { locale };
};

@connect(mapStateToProps)

class Header extends React.Component {
  render() {
    return (
      <header className="mb-4">
        <LanguagesSwitcher />
        <Container>
          <Row>
            <Col>
              <h1 className="heading">{I18n.t('app.heading')}</h1>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
