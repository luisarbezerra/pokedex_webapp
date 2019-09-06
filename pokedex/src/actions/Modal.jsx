export const OPEN_MODAL  = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function showModal() {
    return {
        type: OPEN_MODAL,
    }
}

export function hideModal() {
    return {
        type: CLOSE_MODAL,
    }
}