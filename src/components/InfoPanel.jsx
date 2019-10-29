import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';

const mapStateToProps = (state) => {
  const {
    gamePhase,
    i18n: { locale },
  } = state;

  return { gamePhase, locale };
};

@connect(mapStateToProps)

class InfoPanel extends React.Component {
  render() {
    const { gamePhase } = this.props;

    return (
      <Row>
        <Col>
          <p>
            {I18n.t('info.phase')}
            :
            {' '}
            {I18n.t(`phases.${gamePhase}`)}
          </p>
        </Col>
      </Row>
    );
  }
}

export default InfoPanel;
