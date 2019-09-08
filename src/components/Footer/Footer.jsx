import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
    render () {
        return (
            <div className="footer"> 
                <span className="footer-text">SmarttPokédex made with <span className="heart">♥</span> by Luísa Ribeiro </span>
            </div>
        );
    }
}