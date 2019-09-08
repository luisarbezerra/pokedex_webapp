import { 
    FETCHING_POKEMON,
    FETCHED_POKEMON,
    FETCH_POKEMON_ERROR,
    FETCHING_SINGLE_POKEMON,
    FETCHED_SINGLE_POKEMON,
    FETCH_SINGLE_POKEMON_ERROR,
} from '../actions/Pokemon';

const initialState = {
    search:         "",
    all_pokemon:    {},
    search_pokemon: null,
    error:          null,
    fetching:       false,
    max_pokemon:    null,
};

export const pokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_POKEMON':
            return { ...state, fetching: true }
        case 'FETCHED_POKEMON':
            return { ...state, all_pokemon: action.payload, error: null, fetching: false, max_pokemon: action.payload.count }
        case 'FETCH_POKEMON_ERROR':
            return { ...state, error: action.payload, fetching: false }
        case 'FETCHING_SINGLE_POKEMON':
            return { ...state, fetching: true }
        case 'FETCHED_SINGLE_POKEMON':
            return { ...state, search_pokemon: action.payload, error: null, fetching: false }
        case 'FETCH_SINGLE_POKEMON_ERROR':
            return { ...state, error: action.payload, fetching: false }
            
        default:
            return state;
    }
}