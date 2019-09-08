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
            : 0, 30 );
    }

    componentDidMount() {
        debugger
        return (window.onscroll = function (ev) {
            debugger
            if (!this.props.loadingPokemon && 
            Object.keys(this.props.allPokemon).length < this.props.maxPokemon && 
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.props.fetchPokemon(Object.keys(this.props.allPokemon).length, 30);
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
