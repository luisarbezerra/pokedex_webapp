import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component  {
    componentDidMount() {
        this.props.fetchModalPokemon(this.props.modal_pokemon);
    }

    render() {
        return (
            <div className={ this.props.show_modal ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                    {(!this.props.error && !this.props.loading_pokemon && this.props.pokemon_info) ?
                    <div><span>{this.props.pokemon_info.name}</span>
                    <img className="logo" src={require("../../assets/images/logo.png")}/></div> 
                      
                        : <span className="erro">"Erro! Não encontramos o seu Pokémon :( Faça uma nova busca."</span>}
                        <button class="button" onClick={() => this.props.hideModal()}>Fechar</button>
                        </section>
            </div>
        );
    }
}
