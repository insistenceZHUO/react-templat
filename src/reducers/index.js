import { combineReducers } from 'redux'

import user from './login'
import notifications from './notifications'

export default combineReducers({
    user,
    notifications
})