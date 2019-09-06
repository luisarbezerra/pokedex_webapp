import { 
    HANDLE_SEARCH,
    FETCHING_POKEMON,
    FETCHED_POKEMON,
    FETCH_POKEMON_ERROR,
} from '../actions/Pokemon';

const initialState = {
    search:         "",
    all_pokemon:    {},
    search_pokemon: null,
    error:          null,
    fetching:       false,
};

export const pokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_SEARCH':
            return { ...state, search: action.payload, search_pokemon: ((state.search && state.all_pokemon) ? 
                state.all_pokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(state.search.toLowerCase()) >-1,)
                : state.search_pokemon) }
        case 'FETCHING_POKEMON':
            return { ...state, fetching: true }
        case 'FETCHED_POKEMON':
            return { ...state, all_pokemon: [action.payload], error: null, fetching: false }
        case 'FETCH_POKEMON_ERROR':
            return { ...state, error: action.payload, fetching: false }
        default:
            return state;
    }
}