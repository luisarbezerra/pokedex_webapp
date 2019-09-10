import React from 'react';
import { shallow } from 'enzyme';

import Content from '../../components/Content/Content';

describe('Content', () => {
  it('Should render correctly', () => {
    const tree = shallow(<Content all_pokemon={[]} fetchPokemon={jest.fn()}/>);
    expect(tree).toMatchSnapshot();
  });
});