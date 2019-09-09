import { 
    OPEN_MODAL,
    CLOSE_MODAL
  } from '../actions/Modal';
  
const initialState = {
    show_modal: false,
};
  
export const modal = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MODAL':
          return { ...state, show_modal: true }
      case 'CLOSE_MODAL':
          return { ...state, show_modal: false }
      default:
          return state;
    }
}