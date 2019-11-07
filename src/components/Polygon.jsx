import React from 'react';
import { Row, Col } from 'react-bootstrap';

import connect from '../connect';
import territoriesObj from '../territories.json';
import Ceil from './Ceil';

const mapStateToProps = (state) => {
  const { territories: { byId, allIds } } = state;
  const territories = allIds.map((id) => byId[id]);

  return { territories };
};

@connect(mapStateToProps)

class Polygon extends React.Component {
  componentDidMount() {
    const { addContinent, addTerritory } = this.props;

    territoriesObj.continents.forEach((continent) => {
      const continetData = {
        id: continent.id,
        name: continent.name,
        weight: continent.weight,
        owner: null,
      };

      continent.data.forEach((territory) => {
        const territoryData = {
          id: territory.id,
          name: territory.name,
          contacts: territory.contacts,
          idContinent: continent.id,
          owner: null,
          armysCount: null,
        };

        addTerritory(territoryData);
      });

      addContinent(continetData);
    });
  }

  render() {
    const { territories } = this.props;

    return (
      <Row>
        <Col className="polygon">
          {territories.map((territory) => (
            <Ceil
              id={territory.id}
              name={territory.name}
              contynentId={territory.idContinent}
              key={territory.id}
              owner={territory.owner}
            />
          ))}
          <div className="line greenland-1" />
          <div className="line greenland-2" />
          <div className="line greenland-3" />
          <div className="line greenland-4" />
          <div className="line iceland-1" />
          <div className="line iceland-2" />
          <div className="line great-britain-1" />
          <div className="line great-britain-2" />
          <div className="line great-britain-3" />
          <div className="line scandinavia-1" />
          <div className="line brazil-1" />
          <div className="line north-africa-1" />
          <div className="line north-africa-2" />
          <div className="line egypt-1" />
          <div className="line east-africa-1" />
          <div className="line madagascar-1" />
          <div className="line madagascar-2" />
          <div className="line japan-1" />
          <div className="line japan-2" />
          <div className="line kamchatka-1" />
          <div className="line alaska-1" />
          <div className="line siam-1" />
          <div className="line indonesia-1" />
          <div className="line indonesia-2" />
          <div className="line new-guinea-1" />
          <div className="line new-guinea-2" />
        </Col>
      </Row>
    );
  }
}

export default Polygon;
