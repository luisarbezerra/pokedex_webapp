import React from 'react';
import './Content.scss';
import Card from '../Card/Card'

export default class Content extends React.Component {
    componentDidMount() {
        const pokemonLength = this.props.all_pokemon.length;
        this.props.fetchPokemon(pokemonLength, 20);

        window.addEventListener("scroll", function(){
            var wrap = document.getElementById('content');
            var contentHeight = wrap.offsetHeight;
            var yOffset = window.pageYOffset; 
            var y = yOffset + window.innerHeight;
            if(!this.props.loading_pokemon && (y >= contentHeight))
            {
                this.props.fetchPokemon(this.props.all_pokemon.length, 20);
            }
        }.bind(this))
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
            <div className="content" id="content">
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
