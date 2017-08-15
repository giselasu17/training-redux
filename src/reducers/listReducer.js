const initState = {
    list: [
        { id: 1, name: 'Render Static UI', isComplete: true },
        { id: 2, name: 'Render Initial State', isComplete: false },
        { id: 3, name: 'Render Based on State', isComplete: false }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'LIST_ADD':
            return {...state, list: state.list.concat(action.payload)}
        default:
            return state
    }
}