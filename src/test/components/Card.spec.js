import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../components/Card/Card';

describe('Card', () => {
  it('Should render correctly', () => {
    const tree = shallow(<Card />);
    expect(tree).toMatchSnapshot();
  });
});