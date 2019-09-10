import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../../components/Modal/Modal';

describe('Modal', () => {
  it('Should render correctly', () => {
    const tree = shallow(<Modal fetchModalPokemon={jest.fn()}/>);
    expect(tree).toMatchSnapshot();
  });
});