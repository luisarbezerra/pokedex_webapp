import reducer from '../../reducers/Modal';

describe('Modal Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            data: {},
            error: null,
      });
    });

    it('should handle FETCH_FLIGHTS', () => {
        expect(reducer({}, { type: 'FETCH_FLIGHTS', data: ['data'] })).toEqual({
            loading: true,
            data: {},
            error: null,
        });
    });

    it('should handle FETCH_FLIGHTS_SUCCESS', () => {
        expect(reducer({}, { type: 'FETCH_FLIGHTS_SUCCESS', data: ['data'] })).toEqual({
            loading: false,
            data: ['data'],
            error: null,
        });
    });

    it('should handle FETCH_FLIGHTS_FAILURE', () => {
        expect(reducer({}, { type: 'FETCH_FLIGHTS_FAILURE', error: 'error' })).toEqual({
            loading: false,
            data: {},
            error: 'error',
        });
    });
});