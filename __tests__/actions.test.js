import {
  setCurrentPlayer,
  setGamePhase,
} from '../src/actions';


describe('>>> A C T I O N --- Test Actions', () => {
  it('actionCreator setCurrentPlayer', () => {
    const id = setCurrentPlayer(1);
    expect(id).toEqual({ type: 'CURRENT_PLAYER_SET', payload: 1 });
  });

  it('actionCreator setGamePhase', () => {
    const phase = setGamePhase('territory allocation');
    expect(phase).toEqual({ type: 'GAME_PHASE_SET', payload: 'territory allocation' });
  });
});
