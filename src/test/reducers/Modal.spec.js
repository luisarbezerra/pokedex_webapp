import reducer from '../../reducers/Modal';

describe('Modal Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            show_modal:    false,
            modal_pokemon: null,
      });
    });

    it('should handle OPEN_MODAL', () => {
        expect(reducer({}, { type: 'OPEN_MODAL', payload: ['data'] })).toEqual({
            show_modal: true, 
            modal_pokemon: ['data']
        });
    });

    it('should handle CLOSE_MODAL', () => {
        expect(reducer({}, { type: 'CLOSE_MODAL', data: ['data'] })).toEqual({
            show_modal:    false, 
            modal_pokemon: null
        });
    });
});