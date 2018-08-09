export default function(state={}, action){
    switch(action.type){
        case 'GET_CLIENTS':
            return {...state , clients:action.payload}
        case 'ADD_CLIENT':
            return state
        // case 'PROJECTS_DETAIL':
        //     return action.payload
        // case 'DELETE_PROJECT':
        //     return action.payload
        default:
            return state
    }
}