import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header  from './Header';
import Content from './Content';
import Footer  from './Footer/Footer'
import Modal   from './Modal/';

import './App.scss';

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => {
    return {
        show_modal: state.modal.show_modal,
    }
}

const App = ( props ) => (
    <Fragment>
        <Header />
        { props.show_modal && <Modal /> }
        <Content />
        <Footer />
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
