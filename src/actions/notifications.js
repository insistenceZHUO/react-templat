import actionType from './actionType'

export const markNotifications = (id) => {
    return dispatch => {
        setTimeout(() =>{
            dispatch({
                type: 'TOODlIST',
                payload: {
                    id
                }
            })
        },2000)
    }
} 