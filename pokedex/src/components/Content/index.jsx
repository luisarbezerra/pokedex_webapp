import Content          from './Content'
import { connect }      from 'react-redux'
import { 
  fetchPokemon, 
} from '../../actions/Pokemon'


const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    allPokemon:     state.pokemon.all_pokemon,
    loadingPokemon: state.pokemon.fetching,
    maxPokemon:     state.pokemon.max_pokemon,
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