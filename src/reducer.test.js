import { hotColdReducer } from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('hotColdReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const newState = hotColdReducer(undefined, { type: 'BANANA' });
    expect(newState.guesses).toEqual([]);
    expect(newState.feedback).toEqual('Make your guess!');
    expect(newState.showInfoModal).toEqual(false);
  });
  it('Should return the current state on an unknown action', () => {
    const state = {
      guesses: [2, 4, 7],
      feedback: "You're Ice Cold...",
      correctAnswer: 100,
      showInfoModal: false
    };
    const newState = hotColdReducer(state, { type: 'banana' });
    expect(newState).toBe(state);
  });
  it('should handle the newGame action', () => {
    const state = {
      guesses: [2, 4, 7],
      feedback: "You're Ice Cold...",
      correctAnswer: 100,
      showInfoModal: false
    };
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100),
      showInfoModal: false
    };
    const action = newGame();
    const newState = hotColdReducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      correctAnswer: action.correctAnswer
    });
  });
  it('should handle the makeGuess action', () => {
    const initialState = {
      guesses: [7, 8, 9],
      feedback: 'Make your guess!',
      correctAnswer: 0,
      showInfoModal: false
    };
    const guess = 100;
    const action = makeGuess(guess);
    const newState = hotColdReducer(initialState, action);
    expect(newState).toEqual(
      Object.assign({}, initialState, {
        feedback: "You're Ice Cold...",
        guesses: initialState.guesses.concat(action.guess)
      })
    );
  });
  it('should handle the toggleInfoModal action', () => {});
  const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 0,
    showInfoModal: false
  };
  const newState = hotColdReducer(initialState, { type: 'TOGGLE_INFO_MODAL' });
  expect(newState).toEqual(
    Object.assign({}, initialState, {
      showInfoModal: true
    })
  );
});
