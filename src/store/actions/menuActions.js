import {
    ITEM_MENU
} from './actionsTypes'

export function alteraItemMenu(novoItem) {
    return {
        type: ITEM_MENU,
        payload: novoItem
    }
}