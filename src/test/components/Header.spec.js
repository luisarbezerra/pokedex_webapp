import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header/Header';

describe('Header', () => {
  it('Should render correctly', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});