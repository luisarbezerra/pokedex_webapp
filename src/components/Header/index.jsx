import { connect } from 'react-redux'
import { 
    showModal, 
} from '../../actions/Modal'
import Header from './Header'

const mapStateToProps = (state) => {
    return {
        show_modal: state.modal.show_modal,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (pokemon_name) => {
        dispatch(showModal(pokemon_name));
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);