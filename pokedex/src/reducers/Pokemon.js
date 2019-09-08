import { 
    FETCHING_POKEMON,
    FETCHED_POKEMON,
    FETCH_POKEMON_ERROR,
    FETCHING_SINGLE_POKEMON,
    FETCHED_SINGLE_POKEMON,
    FETCH_SINGLE_POKEMON_ERROR,
} from '../actions/Pokemon';

const initialState = {
    search:         '',
    all_pokemon:    [],
    search_pokemon: null,
    error:          null,
    fetching:       false,
    max_pokemon:    null,
};

const handleFetchNewPokemon = (state, new_pokemon) => {
    const all_pokemon = [ ...state.all_pokemon, ...new_pokemon];
    return {
      ...state, all_pokemon, error: null, fetching: false
    };
}

export const pokemon = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCHING_POKEMON':
            return { ...state, fetching: true }
        case 'FETCHED_POKEMON':
            return handleFetchNewPokemon(state, payload);
        case 'FETCH_POKEMON_ERROR':
            return { ...state, error: payload, fetching: false }
        case 'FETCHING_SINGLE_POKEMON':
            return { ...state, fetching: true }
        case 'FETCHED_SINGLE_POKEMON':
            return { ...state, search_pokemon: payload, error: null, fetching: false }
        case 'FETCH_SINGLE_POKEMON_ERROR':
            return { ...state, error: payload, fetching: false }
            
        default:
            return state;
    }
}