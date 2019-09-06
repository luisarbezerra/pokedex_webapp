import { 
    HANDLE_SEARCH,
    FETCHING_POKEMON,
    FETCHED_POKEMON,
    FETCH_POKEMON_ERROR,
} from '../actions/Pokemon';

const initialState = {
    isModalOpened: false,
    all_pokemon:   {},
    error:         null,
    fetching:      false,
};

export default function pokemon(state = initialState, action) {
    switch (action.type) {
        case 'HANDLE_SEARCH':
            //TODO
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