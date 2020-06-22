import { actions } from '../src/slices';

const {
  addContinent,
  addTerritory,
  addPlayer,
  updateTerritoryData,
  setCurrentPlayer,
  setGamePhase,
} = actions;

describe('>>> Test Actions', () => {
  it('test addContinent', () => {
    const continent = addContinent({
      continent: {
        id: 1,
        name: 'africa',
        weight: '3',
        owner: null,
      },
    });
    expect(continent).toEqual({
      type: 'continents/addContinent',
      payload: {
        continent: {
          id: 1,
          name: 'africa',
          weight: '3',
          owner: null,
        },
      },
    });
  });

  it('test addTerritory', () => {
    const territory = addTerritory({
      territory: {
        id: 1,
        name: 'egypt',
        contacts: ['20', '30', '33', '36'],
        idContinent: 1,
        owner: null,
        armysCount: null,
      },
    });
    expect(territory).toEqual({
      type: 'territories/addTerritory',
      payload: {
        territory: {
          id: 1,
          name: 'egypt',
          contacts: ['20', '30', '33', '36'],
          idContinent: 1,
          owner: null,
          armysCount: null,
        },
      },
    });
  });

  it('test addPlayer', () => {
    const player = addPlayer({
      player: {
        id: 1,
        color: 'red',
        name: 'Test name',
        type: 'human',
      },
    });
    expect(player).toEqual({
      type: 'players/addPlayer',
      payload: {
        player: {
          id: 1,
          color: 'red',
          name: 'Test name',
          type: 'human',
        },
      },
    });
  });

  it('test updateTerritoryData', () => {
    const territory = updateTerritoryData({
      territory: {
        id: 1,
        name: 'egypt',
        contacts: ['20', '30', '33', '36'],
        idContinent: 1,
        owner: 1,
        armysCount: 2,
      },
    });
    expect(territory).toEqual({
      type: 'territories/updateTerritoryData',
      payload: {
        territory: {
          id: 1,
          name: 'egypt',
          contacts: ['20', '30', '33', '36'],
          idContinent: 1,
          owner: 1,
          armysCount: 2,
        },
      },
    });
  });

  it('test setCurrentPlayer', () => {
    const id = setCurrentPlayer(1);
    expect(id).toEqual({ type: 'currentPlayerId/setCurrentPlayer', payload: 1 });
  });

  it('test setGamePhase', () => {
    const phase = setGamePhase('territory allocation');
    expect(phase).toEqual({ type: 'gamePhase/setGamePhase', payload: 'territory allocation' });
  });
});
