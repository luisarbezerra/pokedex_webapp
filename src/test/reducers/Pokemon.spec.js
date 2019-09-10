import reducer from '../../reducers/Pokemon';

describe('Pokemon Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            modal_pokemon:  null,
            all_pokemon:    [],
            error:          null,
            fetching:       false,
            max_pokemon:    null,
      });
    });

    it('should handle FETCHING_POKEMON', () => {
        expect(reducer({}, { type: 'FETCHING_POKEMON' })).toEqual({
            fetching:       true,
        });
    });

    it('should handle FETCHED_POKEMON', () => {
        expect(reducer({all_pokemon:[]}, { type: 'FETCHED_POKEMON', payload: ['data'] })).toEqual({
            all_pokemon:    ['data'],
            error:          null,
            fetching:       false,
        });
    });

    it('should handle FETCH_POKEMON_ERROR', () => {
        expect(reducer({}, { type: 'FETCH_POKEMON_ERROR', payload: ['data'] })).toEqual({
            error:     ['data'],
            fetching:  false,
        });
    });

    it('should handle FETCHING_SINGLE_POKEMON', () => {
        expect(reducer({}, { type: 'FETCHING_SINGLE_POKEMON', payload: ['data'] })).toEqual({
            fetching:  true,
        });
    });

    it('should handle FETCHED_SINGLE_POKEMON', () => {
        expect(reducer({all_pokemon:[]}, { type: 'FETCHED_SINGLE_POKEMON', payload: ['data'] })).toEqual({
            all_pokemon:    [['data']],
            error:          null,
            fetching:       false,
        });
    });

    it('should handle FETCH_SINGLE_POKEMON_ERROR', () => {
        expect(reducer({}, { type: 'FETCH_SINGLE_POKEMON_ERROR', payload: ['data'] })).toEqual({
            error:     ['data'],
            fetching:  false,
        });
    });

    it('should handle FETCHING_MODAL_POKEMON', () => {
        expect(reducer({}, { type: 'FETCHING_MODAL_POKEMON', payload: ['data'] })).toEqual({
            fetching:  true,
            error:     null,
        });
    });

    it('should handle FETCHED_MODAL_POKEMON', () => {
        expect(reducer({}, { type: 'FETCHED_MODAL_POKEMON', payload: ['data'] })).toEqual({
            modal_pokemon:  ['data'],
            error:          null,
            fetching:       false,
        });
    });

    it('should handle FETCH_MODAL_POKEMON_ERROR', () => {
        expect(reducer({}, { type: 'FETCH_MODAL_POKEMON_ERROR', payload: ['data'] })).toEqual({
            error:         ['data'],
            fetching:      false,
            modal_pokemon: null,
        });
    });
});