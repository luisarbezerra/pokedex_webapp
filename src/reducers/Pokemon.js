import { 
    FETCHING_POKEMON,
    FETCHED_POKEMON,
    FETCH_POKEMON_ERROR,
    FETCHING_SINGLE_POKEMON,
    FETCHED_SINGLE_POKEMON,
    FETCH_SINGLE_POKEMON_ERROR,
    FETCHING_MODAL_POKEMON,
    FETCHED_MODAL_POKEMON,
    FETCH_MODAL_POKEMON_ERROR,
} from '../actions/Pokemon';

const initialState = {
    modal_pokemon:  null,
    all_pokemon:    [],
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

const handleFetchSinglePokemon = (state, new_pokemon) => {
    const position = new_pokemon.id - 1;
    const all_pokemon =  state.all_pokemon;
    all_pokemon.splice(position, 1, new_pokemon);

    return {
      ...state, all_pokemon: [...all_pokemon], error: null, fetching: false
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
            return handleFetchSinglePokemon(state, payload);
        case 'FETCH_SINGLE_POKEMON_ERROR':
            return { ...state, error: payload, fetching: false }
        case 'FETCHING_MODAL_POKEMON':
            return { ...state, fetching: true, error: null }
        case 'FETCHED_MODAL_POKEMON':
            return { ...state, modal_pokemon: payload, fetching: false, error: null }
        case 'FETCH_MODAL_POKEMON_ERROR':
                return { ...state, error: payload, modal_pokemon: payload, fetching: false }
            
        default:
            return state;
    }
}