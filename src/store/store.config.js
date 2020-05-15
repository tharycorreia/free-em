import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numerosReducer'
import menuReducer from './reducers/menuReducers'

const reducers = combineReducers({
  numeros: numerosReducer,
  menu: menuReducer
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig