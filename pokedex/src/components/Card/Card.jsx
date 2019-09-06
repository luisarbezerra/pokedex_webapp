import React from 'react';
import './Card.scss';

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

    parseName(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    parseNumberID(n) {
        if (n < 1000 && n > 100) 
            return n; 
        else if (n < 100 && n > 10) {
            return "0" + n; 
        } else {
            return "00" + n;
        }
    }
    render () {
        debugger
        return (
            <div className="card" key={this.props.id} onClick={this.onClick.bind(this)}> 
                <div className=" card-text"><span>Nome: {this.parseName(this.props.pokemon['name'])}</span></div>
                <div className=" card-text"><span>Número: {this.parseNumberID(this.props.id)}</span></div>
            </div>
        );
    }
}