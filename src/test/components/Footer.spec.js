import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer/Footer';

describe('Footer', () => {
  it('Should render correctly', () => {
    const tree = shallow(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});