import { connect } from 'react-redux'
import { 
    hideModal, 
} from '../../actions/Modal'
import Modal from './Modal'

const mapStateToProps = (state) => {
    return {
        show_modal: state.modal.show_modal,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
        dispatch(hideModal());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);