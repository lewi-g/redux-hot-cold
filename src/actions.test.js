import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions'

describe ('newGame', () => {
    it ('It should return the action', () => {
        const action = newGame()
        expect(action.type).toEqual(NEW_GAME);
    } )
})

describe ('makeGuess', () => {
    it ('It should return the action', () => {
        const ourGuess = 5
        const action = makeGuess(ourGuess)
        expect(action.type).toEqual(MAKE_GUESS)
        expect(action.guess).toEqual(ourGuess)
        } )
})

describe ('toggleInfoModal', () => {
    it ('It should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    } )
})