import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component  {
    componentDidMount() {
        this.props.fetchModalPokemon(this.props.modal_pokemon);
    }

    parseTypes = (types) => {
        return (types.map((poketype, index) => {
            return <span className={"card-type "+ poketype.type.name.toLowerCase()}>{poketype.type.name.toUpperCase()} </span>
        }))
    }

    render() {
        return (
            <div className={ this.props.show_modal ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                    {(!this.props.error && !this.props.loading_pokemon && this.props.pokemon_info && this.props.pokemon_info.sprites) ?
                        <div>
                            <img className="pkmn-image" alt="pkmn-modal" src={this.props.pokemon_info.sprites.front_default}/>
                            <div className="pkmn-info">
                                <span>{this.props.pokemon_info.name}</span>
                                <span>{this.props.pokemon_info.height} -</span>
                                <span>{this.props.pokemon_info.weight} -</span>
                                <span>{this.props.pokemon_info.id} -</span>
                                {this.parseTypes(this.props.pokemon_info.types)}
                            </div>
                        </div> 
                        : <span className="erro">"Erro! Não encontramos o seu Pokémon :( Faça uma nova busca."</span>
                    }
                        <button class="button" onClick={() => this.props.hideModal()}>Fechar</button>
                        </section>
            </div>
        );
    }
}
