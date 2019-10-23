import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import * as actions from '../actions';
import LanguagesSwitcher from './LanguagesSwitcher';
import Polygon from './Polygon';

const mapStateToProps = (state) => {
  const { locale } = state.i18n;
  return { locale };
};

const actionCreators = { };

class App extends React.Component {
  render() {
    return (
      <div>
        <LanguagesSwitcher />
        <Container>
          <h1>{I18n.t('app.heading')}</h1>
          <Polygon />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(App);
