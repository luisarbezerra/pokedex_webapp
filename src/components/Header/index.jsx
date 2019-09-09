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
    showModal: () => {
        dispatch(showModal());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);