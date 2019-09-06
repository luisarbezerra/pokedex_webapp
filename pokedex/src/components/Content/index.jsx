import Content          from './Content'
import { connect }      from 'react-redux'
import { 
  fetchPokemon, 
} from '../../actions/Pokemon'


const mapStateToProps = (state, ownProps) => {
  return {
    allPokemon:     state.pokemon.all_pokemon,
    loadingPokemon: state.pokemon.fetching,
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