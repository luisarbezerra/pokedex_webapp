import { connect } from 'react-redux'
import { 
    fetchSinglePokemon,
} from '../../actions/Pokemon'
import Card from './Card'


const mapStateToProps = (state) => {
    return {
        all_pokemon:     state.pokemon.all_pokemon,
        loading_pokemon: state.pokemon.fetching,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchSinglePokemon: (pokemon_name) => {
            dispatch(fetchSinglePokemon(pokemon_name));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);