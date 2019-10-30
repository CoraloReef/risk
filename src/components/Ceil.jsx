import React from 'react';
import cn from 'classnames';
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

class Ceil extends React.Component {
  render() {
    const { contynentId, name } = this.props;

    const terClass = cn({
      territory: true,
      [name]: true,
      [`contynent-${contynentId}`]: true,
    });

    return (
      <div className={terClass}>
        <span className="ter-name">{I18n.t(`territories.${name}`)}</span>
      </div>
    );
  }
}

export default Ceil;
