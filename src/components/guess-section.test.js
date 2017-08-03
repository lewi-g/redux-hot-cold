import React from 'react';

import { shallow } from 'enzyme';
import { GuessSection } from './guess-section';
import { newGame, makeGuess, toggleInfoModal } from '../actions';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the feedback', () => {
        const feedback = "Look at this amazing feedback!";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});