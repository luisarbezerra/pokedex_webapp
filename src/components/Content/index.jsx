
import { connect } from 'react-redux'
import { 
    fetchPokemon, 
} from '../../actions/Pokemon'
import Content from './Content'


const mapStateToProps = (state) => {
    return {
        all_pokemon:     state.pokemon.all_pokemon,
        loading_pokemon: state.pokemon.fetching,
        max_pokemon:     state.pokemon.max_pokemon,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemon: (offset, limit) => {
            dispatch(fetchPokemon(offset, limit));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);