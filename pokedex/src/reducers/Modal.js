import { 
    OPEN_MODAL,
    CLOSE_MODAL
  } from '../actions/Modal';
  
const initialState = {
    showModal: false,
};
  
export const modal = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
          return { ...state, showModal: true }
      case 'CLOSE_MODAL':
          return { ...state, showModal: false }
      default:
          return state;
    }
}