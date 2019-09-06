import fetch from 'isomorphic-fetch'

export const HANDLE_SEARCH       = 'HANDLE_SEARCH'
export const FETCHING_POKEMON    = 'FETCHING_POKEMON'
export const FETCHED_POKEMON     = 'FETCHED_POKEMON'
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR'

export function handleSearch(search) {
    return {
        type:    'HANDLE_SEARCH',
        payload: search,
    };
}

export function fetchingPokemon() {
    return {
        type: 'FETCHING_POKEMON'
    }
}

export function fetchedPokemon(all_pokemon) {
    return {
        type:    'FETCHED_POKEMON',
        payload: all_pokemon,
    }
}
  
export function fetchPokemonError(error) {
    return {
        type: 'FETCH_POKEMON_ERROR',
        payload: error
    }
}

export function fetchPokemon() {
    return async function (dispatch, getState) {
        try {
            dispatch(fetchingPokemon())
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
            let json = await response.json();
            if (response.ok) {
                return dispatch(fetchedPokemon(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            return dispatch(fetchPokemonError(error));
        }
    }
}

