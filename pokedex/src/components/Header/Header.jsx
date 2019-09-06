import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPokemon: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({searchPokemon: e.target.value});
    }

    onSearch() {
        this.props.onSearch(this.state.searchPokemon);
    }

    render () {
        return (
            <div className="header"> 
                <img className="logo" src={require("../../assets/images/logo.png")}/>
                <span className="title">SmarttPokédex</span>
                
                <div className="search">
                    <input 
                        type="text" 
                        className="search-filter" 
                        placeholder="Pesquise por um Pokémon..." 
                        onChange={this.handleChange.bind(this)}
                    />
                    <button type="submit" class="searchButton" onClick={this.onSearch.bind(this)}>
                        <i className="fa fa-search search-icon"></i>
                    </button>

                </div>

            </div>
        );
    }
}