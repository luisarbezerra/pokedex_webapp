import { 
    OPEN_MODAL,
    CLOSE_MODAL
  } from '../actions/Modal';
  
  const initialState = {
      displayModal: false,
    };
  
  export default function modal(state = initialState, action) {
      switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, displayModal: true }
        case 'CLOSE_MODAL':
            return { ...state, displayModal: false }
          default:
            return state;
        }
  }