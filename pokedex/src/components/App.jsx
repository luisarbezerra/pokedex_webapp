import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header  from './Header'
import Content from './Content';
import Footer  from './Footer/Footer'

import './App.scss';

const mapDispatchToProps = dispatch => ({
//TODO
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
