import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component  {
    componentDidMount() {
        this.props.fetchModalPokemon(this.props.modal_pokemon);
    }

    parseTypes = (types) => {
        return (types.map((poketype, index) => {
            return <span key={"card-type "+ poketype.type.name.toLowerCase()} className={"card-type "+ poketype.type.name.toLowerCase()}>
                {poketype.type.name.toUpperCase()} 
            </span>
        }))
    }

    parseName = (name) => (
        name.charAt(0).toUpperCase() + name.slice(1)
    );
        
    parseNumberID = (n) => {
        if (n < 1000 && n >= 100) {
            return n
        } else if (n <= 99 && n > 9) {
            return "0" + n; 
        } else {
            return "00" + n;
        }
    }

    render() {
        return (
            <div className={ this.props.show_modal ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                    {(!this.props.error && !this.props.loading_pokemon && this.props.pokemon_info && this.props.pokemon_info.sprites) ?
                        <div>
                            <div className="pkmn-header"></div>
                            <span className="pkmn-title">{this.parseName(this.props.pokemon_info.name)} #{this.props.pokemon_info.id}</span>
                            <img className="pkmn-image" alt="pkmn-modal" src={this.props.pokemon_info.sprites.front_default}/>
                            <div className="pkmn-info">
                                <span>Altura: {this.props.pokemon_info.height*10} cm</span>
                                <span>Peso: {this.props.pokemon_info.weight/10} kg</span>
                                <div className="pkmn-types">{this.parseTypes(this.props.pokemon_info.types)}</div>
                            </div>
                        </div> 
                        : <span className="erro">"Erro! Não encontramos o seu Pokémon :( Faça uma nova busca."</span>
                    }
                        <button className="button" onClick={() => this.props.hideModal()}>Fechar</button>
                        </section>
            </div>
        );
    }
}
