import React from 'react';
import './Card.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({search: e.target.value});
    }

    onSearch() {
        let search = this.search;
        if (search.trim()) {

        }
    }

    render () {
        return (
            <div className="header"> 
                <img className="logo" src={require("../../assets/images/logo.png")}/>
                <span className="title">SmarttPokédex</span>
            </div>
        );
    }
}