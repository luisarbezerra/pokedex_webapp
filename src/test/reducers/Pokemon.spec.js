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
            all_pokemon: ['data'],
            error:          null,
            fetching:       false,
        });
    });
});