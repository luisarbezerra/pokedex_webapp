import React from 'react';
import './Content.scss';
import Card from "../Card/Card"

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPokemon( Object.keys(this.props.allPokemon).length !== 0 ? 
        Object.keys(this.props.allPokemon).length 
            : 0, 20 );
    }

    componentDidMount() {
        return (window.onscroll = function (ev) {
            if (!this.props.loadingPokemon && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.props.fetchPokemon(Object.keys(this.props.allPokemon).length, 20);
            }
        }.bind(this));
    }

    renderCards() {
        return (Object.keys(this.props.allPokemon['results']).map((pokemonid, key) => {
            return (<Card 
                id={parseInt(pokemonid)+1} pokemon={ this.props.allPokemon['results'][pokemonid] }
            />);
        }));
    }
    
    render() {
        return (
            <div className="content">
                <div className="cards-table"> 
                    {Object.keys(this.props.allPokemon).length !== 0 ? this.renderCards() : ""}
                </div>
                { this.props.loadingPokemon? 
                    <p className="App-intro"> loading ...</p>
                    : ""
                }
            </div>
        );
    }
}   
