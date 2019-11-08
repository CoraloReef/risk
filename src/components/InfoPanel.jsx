import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';

const mapStateToProps = (state) => {
  const {
    gamePhase,
    i18n: { locale },
    currentPlayerId,
    players: { byId, allIds },
  } = state;
  const players = allIds.map((id) => byId[id]);

  return {
    gamePhase,
    locale,
    currentPlayerId,
    players,
  };
};

@connect(mapStateToProps)

class InfoPanel extends React.Component {
  render() {
    const { gamePhase, currentPlayerId, players } = this.props;

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
        <Col xs={1}>
          <div className={`player-color ${players[currentPlayerId].color}`} />
        </Col>
        <Col>
          <p>
            {I18n.t('info.current-player')}
            :
            {' '}
            {players[currentPlayerId].name}
          </p>
        </Col>
      </Row>
    );
  }
}

export default InfoPanel;
