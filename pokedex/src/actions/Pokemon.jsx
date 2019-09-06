import fetch from 'isomorphic-fetch'

export const FETCHING_POKEMON           = 'FETCHING_POKEMON'
export const FETCHED_POKEMON            = 'FETCHED_POKEMON'
export const FETCH_POKEMON_ERROR        = 'FETCH_POKEMON_ERROR'
export const FETCHING_SINGLE_POKEMON    = 'FETCHING_SINGLE_POKEMON'
export const FETCHED_SINGLE_POKEMON     = 'FETCHED_SINGLE_POKEMON'
export const FETCH_SINGLE_POKEMON_ERROR = 'FETCH_SINGLE_POKEMON_ERROR'

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
        type:   'FETCH_POKEMON_ERROR',
        payload: error
    }
}

export function fetchPokemon(offset, limit) {
    return async function (dispatch, getState) {
        try {
            dispatch(fetchingPokemon())
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset' + offset + '&limit=' + limit)
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

export function fetchingSinglePokemon() {
    return {
        type: 'FETCHING_SINGLE_POKEMON'
    }
}

export function fetchedSinglePokemon(single_pokemon) {
    return {
        type:    'FETCHED_SINGLE_POKEMON',
        payload: single_pokemon,
    }
}
  
export function fetchSinglePokemonError(error) {
    return {
        type:   'FETCH_SINGLE_POKEMON_ERROR',
        payload: error
    }
}

export function fetchSinglePokemon(offset, limit) {
    return async function (dispatch, getState) {
        //TODO
        try {
            dispatch(fetchingSinglePokemon())
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset' + offset + '&limit=' + limit)
            let json = await response.json();
            if (response.ok) {
                return dispatch(fetchedSinglePokemon(json));
            } else {
                throw new Error(json.message);
            }
        } catch (error) {
            return dispatch(fetchSinglePokemonError(error));
        }
    }
}

