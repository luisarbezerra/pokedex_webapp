import React from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header'
import Content from './Content/Content';

import { simpleAction } from '../actions/simpleAction'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

const App = () => (
  <div className="PokedexHome">
    <Header />
    <Content />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
