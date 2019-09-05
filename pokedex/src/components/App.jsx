import React from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header'
import Content from './Content/Content';
import './App.scss';

import { simpleAction } from '../actions/simpleAction'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

const App = () => (
  <div className="Home">
    <Header />
    <Content />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
