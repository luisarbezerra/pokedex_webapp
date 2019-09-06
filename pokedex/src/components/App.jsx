import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header  from './Header/Header'
import Content from './Content/Content';
import Footer  from './Footer/Footer'

import './App.scss';

import { simpleAction } from '../actions/simpleAction'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

const App = () => (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
