import React from 'react';

import connect from '../connect';
import territoriesObj from '../territories.json';
import Ceil from './Ceil';

const mapStateToProps = (state) => {
  const { continents } = state;
  return { continents };
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
      };

      continent.data.forEach((territory) => {
        const territoryData = {
          id: territory.id,
          name: territory.name,
          idContinent: continent.id,
        };

        addTerritory(territoryData);
      });

      addContinent(continetData);
    });
  }

  render() {
    return null;
  }
}

export default Polygon;
