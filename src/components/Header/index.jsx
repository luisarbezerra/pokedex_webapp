import { connect } from 'react-redux'
import { 
    showModal,
    hideModal, 
} from '../../actions/Modal'
import Header from './Header'


const mapStateToProps = (state) => {
    return {
        showModal: state.modal.showModal,
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
        dispatch(showModal());
    },
    hideModal: () => {
        dispatch(hideModal());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);