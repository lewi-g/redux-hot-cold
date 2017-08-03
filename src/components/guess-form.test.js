import React from 'react';

import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { newGame, makeGuess, toggleInfoModal } from '../actions';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onGuess callback when the form is submitted', () => {
    const payload = {"guess": "10", "type": "MAKE_GUESS"}
    const dispatch = jest.fn()
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = payload.guess;
    
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(payload);
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}}/>);
    const input = wrapper.find('input[type="text"]');
    input.node.value = 10;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  });
});
