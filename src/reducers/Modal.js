const initialState = {
    show_modal:    false,
    modal_pokemon: null,
};
  
export const modal = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'OPEN_MODAL':
          return { ...state, show_modal: true, modal_pokemon: payload }
      case 'CLOSE_MODAL':
          return { ...state, show_modal: false, modal_pokemon: null }
      default:
          return state;
    }
}

export default modal;