import React from 'react';
import './Content.scss';
import Card from '../Card/Card'

export default class Content extends React.Component {
    componentDidMount() {
        const pokemonLength = this.props.all_pokemon.length;
        this.props.fetchPokemon(pokemonLength, 30);
    
        return (window.onscroll = () => {
            debugger
          if (!this.props.loading_pokemon && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.props.fetchPokemon(this.props.all_pokemon.length, 30);
          }
        });
    }

    renderCard = (pokemon, key) => (
        <Card {...pokemon} id={key+1}/>
    );

    renderCards = () => {
        const { all_pokemon } = this.props;
        return all_pokemon.map(this.renderCard);;
    }
    
    render() {
        return (
            <div className="content">
                <div className="cards-table"> 
                    {this.renderCards()}
                </div>
                { this.props.loadingPokemon? 
                    <p className="App-intro"> loading ...</p>
                    : ""
                }
            </div>
        );
    }
}   
