import Content          from './Content'
import { connect }      from 'react-redux'
import { fetchPokemon } from '../../actions/Pokemon'


const mapStateToProps = (state, ownProps) => {
  return {
    allPokemon: state.pokemon.all_pokemon,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => {
      dispatch(fetchPokemon());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);