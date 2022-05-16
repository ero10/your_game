import { combineReducers } from 'redux'
import answerReducer from './answerReducer'
import scoreReducer from './scoreReducer'

const rootReducer = combineReducers({
  score:scoreReducer,
  answer:answerReducer
  })

export default rootReducer