import actionType from './../actions/actionType'



const initState = {
    isLoading: false,
    list:[{
        id: 1,
        title:'11111111111 lorem ipasdasdasdddddasdasdasdasdasdasdasdasdasd',
        hasRead: false
    },
    { 
        id: 2, 
        title:'22222 lorem ipasdasdasdddddasdasdasdasdasdasdasdasdasd',
        hasRead: true
    }]
}

export default (state = initState, action)  => {
    switch (action.type) {
        case actionType.TOODlIST : 
            return {
                ...state,
                list: []
            }
        default:
            return state
    }
}