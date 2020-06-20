import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Loader from './Loader';

const mapStateToProps = (state) => {
  const {
    gamePhase,
    currentPlayerId,
    players: { byId, allIds },
  } = state;
  const players = allIds.map((id) => byId[id]);

  return {
    gamePhase,
    currentPlayerId,
    players,
  };
};
const actionCreators = {};

const Component = (props) => {
  const { t } = useTranslation();

  const { gamePhase, currentPlayerId, players } = props;

  return (
    <Row>
      <Col>
        <p>
          {t('info.phase')}: {t(`phases.${gamePhase}`)}
        </p>
      </Col>
      <Col xs={1}>
        <div className={`player-color ${players[currentPlayerId].color}`} />
      </Col>
      <Col>
        <p>
          {t('info.current-player')}: {players[currentPlayerId].name}
        </p>
      </Col>
    </Row>
  );
};

const ConnectComponent = connect(mapStateToProps, actionCreators)(Component);

const InfoPanel = () => (
  <Suspense fallback={<Loader />}>
    <ConnectComponent />
  </Suspense>
);

export default InfoPanel;
