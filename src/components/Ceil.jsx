import React from 'react';
import cn from 'classnames';
import { I18n } from 'react-redux-i18n';

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
        <p>{I18n.t(`territories.${name}`)}</p>
      </div>
    );
  }
}

export default Ceil;