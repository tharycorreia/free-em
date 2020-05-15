import {
    ITEM_MENU
} from '../actions/actionsTypes'

const initialState = {
    menu: 'inicio'
}

export default function (state = initialState, action) {
    switch(action.type) {
      case ITEM_MENU:
        return {
          ...state,
          menu: action.payload
        }
      default: 
        return state
    }
  }