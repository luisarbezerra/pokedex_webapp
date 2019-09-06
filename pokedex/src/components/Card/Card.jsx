import React from 'react';
import './Card.scss';
import Modal from "../Modal/Modal"

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.showModal(true);
    }

    render () {
        return (
            <div className="card" onClick={this.onClick.bind(this)}> 
                <span className=" card-text">Nome</span>
                <span className=" card-text">Número</span>
            </div>
        );
    }
}