export const OPEN_MODAL  = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function showModal(pokemon_name) {
    return {
        type:    OPEN_MODAL,
        payload: pokemon_name
    }
}

export function hideModal() {
    return {
        type: CLOSE_MODAL,
    }
}