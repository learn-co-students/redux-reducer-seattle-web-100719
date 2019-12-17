export function managePresents(preState, action){
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: preState.numberOfPresents + 1}
        default:
            return preState; 
    }

}
