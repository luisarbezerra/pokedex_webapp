import { connect } from 'react-redux'
import { 
    hideModal, 
} from '../../actions/Modal'
import {
    fetchModalPokemon,
} from '../../actions/Pokemon'
import Modal from './Modal'

const mapStateToProps = (state) => {
    return {
        show_modal:      state.modal.show_modal,
        modal_pokemon:   state.modal.modal_pokemon,
        pokemon_info:    state.pokemon.modal_pokemon,
        error:           state.pokemon.error,
        loading_pokemon: state.pokemon.fetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        },
        fetchModalPokemon: (pokemon_name) => {
            dispatch(fetchModalPokemon(pokemon_name));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);