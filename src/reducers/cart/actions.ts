import { CartItem } from '../../Interfaces/CartItem'

export enum ActionTypes {
  INCREASE_ITEM_TO_CART = 'INCREASE_ITEM_TO_CART',
  DECREASE_ITEM_TO_CART = 'DECREASE_ITEM_TO_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export function addItemToCart(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item },
  }
}

export function removeItemFromCart(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  }
}

export function increaseItemFromCart(itemId: string) {
  return {
    type: ActionTypes.INCREASE_ITEM_TO_CART,
    payload: { itemId },
  }
}

export function decreaseItemFromCart(itemId: string) {
  return {
    type: ActionTypes.DECREASE_ITEM_TO_CART,
    payload: { itemId },
  }
}
