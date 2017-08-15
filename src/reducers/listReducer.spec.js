import reducer from './listReducer';

describe('List Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type:'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a list', () => {
        const startState = {
            list: [
                { id: 1, name: 'Render Static UI', isComplete: true },
                { id: 2, name: 'Render Initial State', isComplete: false },
                { id: 3, name: 'Render Based on State', isComplete: false }
            ]
        }

        const expectedState = {
            list: [
                { id: 1, name: 'Render Static UI', isComplete: true },
                { id: 2, name: 'Render Initial State', isComplete: false },
                { id: 3, name: 'Render Based on State', isComplete: false },
                { id: 4, name: 'Added List', isComplete: false }
            ]
        }

        const action = {type:'LIST_ADD', payload: { id: 4, name: 'Added List', isComplete: false }}

        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})