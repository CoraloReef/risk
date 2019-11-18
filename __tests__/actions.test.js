import {
  setCurrentPlayer,
  setGamePhase,
} from '../src/actions';

describe('>>> Test Actions', () => {
  it('test setCurrentPlayer', () => {
    const id = setCurrentPlayer(1);
    expect(id).toEqual({ type: 'CURRENT_PLAYER_SET', payload: 1 });
  });

  it('test setGamePhase', () => {
    const phase = setGamePhase('territory allocation');
    expect(phase).toEqual({ type: 'GAME_PHASE_SET', payload: 'territory allocation' });
  });
});
